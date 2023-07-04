import { addApostrophes, ExplorerClient } from '@alephium/sdk'
import { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'
import { formatNumberForDisplay } from '../utils/numbers'

import PageSectionContainer from './PageSectionContainer'
import SubsectionTextHeader from './SubsectionTextHeader'
import NumbersInfo from './NumbersInfo'
import Columns from './Columns/Columns'
import Column from './Columns/Column'
import { HttpResponse } from '@alephium/sdk/api/explorer'
import Waves from './Wave/Waves'
import ArrowedLink from './ArrowedLink'
import { motion } from 'framer-motion'

const baseUrl = 'https://mainnet-backend.alephium.org'
const ONE_DAY = 1000 * 60 * 60 * 24

export interface PageSectionNumbersContentType {
  title: string
  subtitle: string
}

interface Props {
  content: PageSectionNumbersContentType
}

interface Stat<T> {
  value: T
  isLoading: boolean
}

const statScalarDefault = { value: 0, isLoading: true }

type StatScalar = Stat<number>
type StatScalarKeys = 'hashrate' | 'circulatingSupply' | 'totalTransactions'

type StatsScalarData = { [key in StatScalarKeys]: StatScalar }

const PageSectionNumbers = ({ content: { title, subtitle } }: Props) => {
  const [explorerClient, setExplorerClient] = useState<ExplorerClient>()
  const [statsScalarData, setStatsScalarData] = useState<StatsScalarData>({
    hashrate: statScalarDefault,
    circulatingSupply: statScalarDefault,
    totalTransactions: statScalarDefault
  })

  const boxRef = useRef<HTMLDivElement>(null)

  const updateStatsScalar = useCallback(
    (key: StatScalarKeys, value: StatScalar['value']) => {
      setStatsScalarData((prevState) => ({ ...prevState, [key]: { value, isLoading: false } }))
    },
    [setStatsScalarData]
  )

  useEffect(() => {
    setExplorerClient(new ExplorerClient({ baseUrl }))
  }, [])

  useEffect(() => {
    if (!explorerClient) return

    const fetchHashrateData = async () => {
      try {
        const now = new Date().getTime()
        const yesterday = now - ONE_DAY

        const { data } = await explorerClient.charts.getChartsHashrates({
          fromTs: yesterday,
          toTs: now,
          'interval-type': 'hourly'
        })

        if (data && data.length > 0) updateStatsScalar('hashrate', Number(data[0].value))
      } catch (e) {
        console.error(e)
      }
    }

    const fetchAndUpdateStatsScalar = async (
      key: StatScalarKeys,
      fetchCall: () => Promise<HttpResponse<string | number>>
    ) => {
      try {
        await fetchCall()
          .then((res) => res.text())
          .then((text) => updateStatsScalar(key, parseInt(text)))
      } catch (e) {
        console.error(e)
      }
    }

    fetchHashrateData()
    fetchAndUpdateStatsScalar('circulatingSupply', explorerClient.infos.getInfosSupplyCirculatingAlph)
    fetchAndUpdateStatsScalar('totalTransactions', explorerClient.infos.getInfosTotalTransactions)
  }, [explorerClient, updateStatsScalar])

  const { hashrate, circulatingSupply, totalTransactions } = statsScalarData
  const [hashrateInteger, hashrateDecimal, hashrateSuffix] = formatNumberForDisplay(hashrate.value, 'hash')
  const supply = formatNumberForDisplay(circulatingSupply.value).join('')

  const columns = [
    {
      value: '16',
      isLoading: false,
      description: 'shards running'
    },
    {
      value: hashrateInteger && `${addApostrophes(hashrateInteger)}${hashrateDecimal ?? ''}`,
      isLoading: false,
      description: `${hashrateSuffix}H/s`
    },
    {
      value: supply,
      isLoading: false,
      description: 'ALPH circulating'
    },
    {
      value: addApostrophes(totalTransactions.value.toFixed(0)),
      isLoading: false,
      description: 'transactions executed'
    }
  ]

  return (
    <NumbersSection>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={{ zIndex: 5000, width: '100%' }}
        viewport={{ once: true }}
      >
        <PageSectionContainer>
          <BorderedBox ref={boxRef}>
            <SubsectionTextHeaderStyled title={title} subtitle={subtitle} condensed bigTitle />
            <ArrowedLinkStyled url="https://explorer.alephium.org/" newTab>
              Check our explorer
            </ArrowedLinkStyled>
            <ColumnsStyled>
              {columns.map((column) => (
                <NumbersColumn key={column.description}>
                  <NumbersInfo {...column} />
                </NumbersColumn>
              ))}
            </ColumnsStyled>
            <Waves parentRef={boxRef} />
          </BorderedBox>
        </PageSectionContainer>
      </motion.div>
    </NumbersSection>
  )
}

export default PageSectionNumbers

const NumbersSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: var(--spacing-12);
  padding-bottom: var(--spacing-20);
  background-color: ${({ theme }) => theme.bgTertiary};

  @media ${deviceBreakPoints.tablet} {
    margin-top: var(--spacing-6);
    margin-bottom: var(--spacing-10);
  }
`

const BorderedBox = styled.div`
  flex: 1;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.borderPrimary};
  background-color: ${({ theme }) => theme.bgSecondary};
  padding: var(--spacing-11);
  padding-bottom: var(--spacing-16);
  box-shadow: 0 50px 50px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: relative;
`

const NumbersColumn = styled(Column)`
  display: flex;
  align-items: center;
  z-index: 1;

  &:not(:first-child) {
    > div {
      padding-left: var(--spacing-6);

      @media ${deviceBreakPoints.tablet} {
        padding-left: 0;
        padding-top: var(--spacing-9);
      }
    }
  }

  &:not(:last-child) {
    > div {
      padding-right: var(--spacing-9);

      @media ${deviceBreakPoints.tablet} {
        padding-right: 0;
      }
    }
  }
`

const SubsectionTextHeaderStyled = styled(SubsectionTextHeader)`
  margin-bottom: var(--spacing-4);
`

const ArrowedLinkStyled = styled(ArrowedLink)`
  margin-bottom: var(--spacing-10);
`

const ColumnsStyled = styled(Columns)`
  align-items: baseline;
`
