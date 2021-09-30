import React, { FC } from 'react'
import styled, { ThemeProvider, useTheme } from 'styled-components'

import { darkTheme, lightTheme } from '../styles/themes'
import { deviceBreakPoints } from '../styles/global-style'

import SectionTextHeader from './SectionTextHeader'
import PageSectionContainer from './PageSectionContainer'
import GridCard from './GridCard'

import LogoYellow from '../images/svgs/logo-yellow.svg'
import MiningImage from '../images/svgs/mining.svg'
import CodeImage from '../images/svgs/code.svg'
import GreyMountainsImage from '../images/svgs/grey-mountains.svg'
import GenevaImage from '../images/geneva.jpg'

interface PageSectionStartNowProps {
  className?: string
}

let PageSectionStartNow: FC<PageSectionStartNowProps> = ({ className }) => {
  const theme = useTheme()

  return (
    <section className={className}>
      <PageSectionContainer>
        <SectionHeader>
          <SectionTextHeader title="Start now" subtitle="Build and contribute." bigSubtitle>
            <p>Alephium is already live. You can start building, earning, and contributing right now.</p>
          </SectionTextHeader>
          <LogoYellow />
        </SectionHeader>
        <Grid>
          <ThemeProvider theme={theme === darkTheme ? lightTheme : darkTheme}>
            <GridCard
              title="Start mining"
              subtitle="Earn ALPH tokens"
              link={{ to: '#', text: 'Instructions', newTab: true }}
              ImageComponent={MiningImageComponent}
            >
              <p>
                liquam dapibus ipsum vitae sem. Ut eget mauris ac nunc luctus ornare. Phasellus enim augue, rutrum
                tempus, blandit in, vehicula eu, neque. Sed consequat nunc. Proin metus. Duis at mi non tellus{' '}
              </p>
            </GridCard>
          </ThemeProvider>
          <GridCard
            title="Get a grant"
            subtitle="And start building"
            link={{ to: '#', text: 'Apply for a grand', newTab: true }}
            ImageComponent={GreyMountainsImageStyled}
          >
            <p>
              liquam dapibus ipsum vitae sem. Ut eget mauris ac nunc luctus ornare. Phasellus enim augue, rutrum tempus,
              blandit in, vehicula eu, neque. Sed consequat nunc. Proin metus. Duis at mi non tellus
            </p>
          </GridCard>
          <GridCard
            title="Get a job @ Alephium"
            subtitle="We value individuals"
            link={{ to: '#', text: 'Job openings', newTab: true }}
            backgroundImageUrl={GenevaImage}
          >
            <p>We're based in beautiful Switzerland, but you can work from anywhere in the world.</p>
          </GridCard>
          <ThemeProvider theme={theme === darkTheme ? lightTheme : darkTheme}>
            <GridCard
              title="Contribute to the code"
              subtitle="Code and get rewarded"
              link={{ to: 'https://github.com/alephium/alephium', text: 'To the codebase', newTab: true }}
              ImageComponent={CodeImageStyled}
              primaryBackground
            >
              <p>
                We would love to see your code integrated in our codebase! Contribute, and receive some unique rewards.
              </p>
            </GridCard>
          </ThemeProvider>
        </Grid>
      </PageSectionContainer>
    </section>
  )
}

PageSectionStartNow = styled(PageSectionStartNow)`
  padding-top: var(--spacing-28);
  padding-bottom: var(--spacing-28);
  background-color: ${({ theme }) => theme.bgSecondary};
  color: ${({ theme }) => theme.textPrimary};
`

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-4);

  svg {
    width: var(--width-82);
    flex-shrink: 0;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 8fr 1fr 8fr;
  grid-template-rows: repeat(2, minmax(24.5rem, auto));
  gap: var(--spacing-3);
  margin-top: var(--spacing-16);

  > div:nth-child(4n + 2) {
    grid-column: 2 / span 2;
  }

  > div:nth-child(4n + 3) {
    grid-column: 1 / span 2;
  }

  @media ${deviceBreakPoints.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    > div:nth-child(4n + 2),
    > div:nth-child(4n + 3) {
      grid-column: auto;
    }
  }
`

const ImageContainer = styled.div`
  width: 35%;
  position: relative;
  margin: calc(-1 * var(--spacing-4)) calc(-1 * var(--spacing-4)) calc(-1 * var(--spacing-4)) 0;
  overflow: hidden;
`

const MiningImageStyled = styled(MiningImage)`
  width: 14rem;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: auto 0;
`

const MiningImageComponent = () => (
  <ImageContainer>
    <MiningImageStyled />
  </ImageContainer>
)

const CodeImageStyled = styled(CodeImage)`
  width: 6.25rem;
  height: auto;
  position: absolute;
  top: var(--spacing-4);
  right: var(--spacing-4);
`

const GreyMountainsImageStyled = styled(GreyMountainsImage)`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: -2px;
`

export default PageSectionStartNow