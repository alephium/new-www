import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { uniqBy } from 'lodash'

import { deviceBreakPoints, deviceSizes } from '../styles/global-style'

export type Timeline = {
  title: string
  years: {
    year: string
    entries: {
      order: number
      text: string
      when: string
      isMajor: boolean
    }[]
  }[]
}

type Props = {
  timelines: Timeline[]
}

const DualTimeline = (props: Props) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const event: [string, EventListenerOrEventListenerObject] = [
      'resize',
      () => setIsMobile(window.innerWidth <= deviceSizes.smallMobile)
    ]

    setIsMobile(window.innerWidth <= deviceSizes.smallMobile)
    window.addEventListener(...event)
    return () => window.removeEventListener(...event)
  }, [setIsMobile])

  return isMobile ? <DualTimelineMobile {...props} /> : <DualTimelineDesktop {...props} />
}

const DualTimelineDesktop = ({ timelines }: Props) => {
  const headings = timelines.map((t) => t.title)

  return (
    <Container>
      <Header>
        <Headings>
          {headings.map((text, index) => (
            <Heading key={index} right={index % 2 == 0}>
              {text}
            </Heading>
          ))}
        </Headings>
      </Header>
      <HeaderStickyBackground />
      <LineStartsEnds starts headings={headings} />
      {timelines[0].years.map(({ year, entries }, index) => (
        <section key={year}>
          <Year value={year} headings={headings} />
          <Entries>
            {sortMerge(entries, timelines[1]?.years[index]?.entries ?? []).map(([entryA, entryB], index) => (
              <Pair key={index}>
                <Entry right>
                  {entryA && (
                    <Data right>
                      <Text isMajor={entryA?.isMajor}>{entryA.text}</Text>
                      <When>{entryA.when}</When>
                    </Data>
                  )}
                  <Track forHeading={headings[0]} entry={entryA} />
                </Entry>
                <Entry>
                  <Track forHeading={headings[1]} entry={entryB} />
                  {entryB && (
                    <Data>
                      <Text isMajor={entryB?.isMajor}>{entryB.text}</Text>
                      <When>{entryB.when}</When>
                    </Data>
                  )}
                </Entry>
              </Pair>
            ))}
          </Entries>
        </section>
      ))}
      <LineStartsEnds headings={headings} />
      <LineStartsEnds ends headings={headings} />
    </Container>
  )
}

const DualTimelineMobile = ({ timelines }: Props) => {
  const years = timelines.reduce((years, timeline, index) => {
    timeline.years.forEach(({ year, entries }) => {
      if (years[year] === undefined) {
        years[year] = []
      }
      years[year][index] = { title: timeline.title, entries }
    })
    return years
  }, {})

  // The track will be 3 'm' length, exactly how "3em" works 🙂
  const trackTitle = 'mmm'

  return (
    <Container>
      <LineStartsEnds isSingle starts headings={[trackTitle]} />
      {Object.entries(years).map(([year, values]) => (
        <div key={year}>
          <Year value={year} headings={[trackTitle]} isSingle />
          {values.map(({ title, entries }) => (
            <div key={title}>
              {entries && (
                <>
                  <Entries>
                    <Entry>
                      <Track forHeading={trackTitle} />
                      <Heading isSingle>{title}</Heading>
                    </Entry>
                  </Entries>
                </>
              )}
              {entries?.map((entry, index) => (
                <Entry isSingle key={index}>
                  <Track forHeading={[trackTitle]} entry={entry} />
                  <Data>
                    <Text isMajor={entry?.isMajor}>{entry.text}</Text>
                    <When>{entry.when}</When>
                  </Data>
                </Entry>
              ))}
            </div>
          ))}
        </div>
      ))}
      <LineStartsEnds isSingle headings={[trackTitle]} />
      <LineStartsEnds isSingle ends headings={[trackTitle]} />
    </Container>
  )
}

const Year = ({ value, headings, isSingle }) =>
  !isSingle ? (
    <YearHeader>
      <Pair>
        <Entry right>
          <YearDate>{value}</YearDate>
          <Track forHeading={headings[0]} />
        </Entry>
        <Entry>
          <Track forHeading={headings[1]} />
        </Entry>
        <YearLine />
      </Pair>
    </YearHeader>
  ) : (
    <YearHeader>
      <Entry>
        <Track forHeading={headings[0]} />
        <YearDate>{value}</YearDate>
      </Entry>
      <YearLine />
    </YearHeader>
  )

const LineStartsEnds = ({ headings, starts, ends, isSingle, height }) =>
  isSingle ? (
    headings.map((text, index) => (
      <Entry key={index}>
        <TrackContainer>
          <HeadingTextForWidthExpansion>{text}</HeadingTextForWidthExpansion>
          {(starts && <LineStart />) || (ends && <LineEnd />) || <LineExtra height={height} />}
        </TrackContainer>
      </Entry>
    ))
  ) : (
    <Entries>
      <Pair>
        {headings.map((text, index) => (
          <Entry right={index % 2 == 0} key={index}>
            <TrackContainer>
              <HeadingTextForWidthExpansion>{text}</HeadingTextForWidthExpansion>
              {(starts && <LineStart />) || (ends && <LineEnd />) || <LineExtra height={height} />}
            </TrackContainer>
          </Entry>
        ))}
      </Pair>
    </Entries>
  )

const Track = ({ forHeading, entry }) => (
  <TrackContainer>
    <HeadingTextForWidthExpansion>{forHeading}</HeadingTextForWidthExpansion>
    <Piece>{entry && <Dot isMajor={entry.isMajor} />}</Piece>
  </TrackContainer>
)

const headerHeight = 60
const trackWidth = 90

const Container = styled.div`
  width: 100vw;
  margin-bottom: var(--spacing-16);
`

const Text = styled.div`
  ${({ isMajor }) =>
    isMajor &&
    `
    background: linear-gradient(30deg, #ff9100 0%, #ff4000 20%, #b700ff 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  `}
`

const When = styled.div`
  color: ${({ theme }) => theme.textTertiary};
  margin-top: var(--spacing-1);
`

const Piece = styled.div`
  display: flex;
  align-items: center;
  width: 5px;
  height: 100%;
  background-color: ${({ theme }) => theme.textTertiary};
`

const Dot = styled.div`
  position: relative;
  left: -7px;
  top: calc((18px + 4px) / -2);

  ::after {
    width: 13px;
    height: 13px;
    transform: translateY(60%);
    border-radius: 100%;
    background: ${({ isMajor }) =>
      isMajor ? 'linear-gradient(30deg, #ff9100 0%, #ff4000 20%, #b700ff 80%)' : 'white'};
    border: 3px solid black;
    position: absolute;
    content: '';
    display: block;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
  }
`

const Data = styled.div`
  display: flex;
  max-width: 300px;
  line-height: 22px;
  flex-direction: column;
  text-align: ${({ right }) => (right ? 'right' : 'left')};
  padding-top: var(--spacing-5);
  padding-left: ${({ right }) => (right ? 'var(--spacing-3)' : '0')};
  padding-right: ${({ right }) => (right ? '0' : 'var(--spacing-3)')};

  ${({ isSingle }) =>
    isSingle &&
    `
    position: relative;
    ${({ right }) => (right ? 'right: -3rem;' : 'left: -2rem')}
  `}
`

const LineExtra = styled.div`
  width: 5px;
  height: ${({ height }) => (height ? height : '8px')};
  background-color: ${({ theme }) => theme.textTertiary};
`

const LineEnd = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 0 0 50% 50%;
  background-color: ${({ theme }) => theme.textTertiary};
`

const LineStart = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50% 50% 0 0;
  background-color: ${({ theme }) => theme.textTertiary};
`

const HeadingTextForWidthExpansion = styled.div`
  visibility: hidden;
  height: 0;
  white-space: nowrap;
  font-weight: var(--fontWeight-semiBold);
  font-size: var(--fontSize-28);
`

const TrackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  width: ${trackWidth}px;
  min-width: ${trackWidth}px;
`

const Entry = styled.div`
  width: ${({ isSingle }) => (isSingle ? '100%' : '50%')};
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: ${({ right }) => (right ? 'right' : 'left')};
  font-weight: var(--fontWeight-semiBold);
  font-size: var(--fontSize-18);
`

const Pair = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Entries = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  justify-content: center;
  flex-direction: column;
`

const yearSmallMobileBreakpoint = '(max-width: 510px)'
const yearRowPositionDesktop = '80px'
const yearRowPositionMobile = '70px'
const yearRowPositionSmallMobile = '110px'

const YearHeader = styled.div`
  position: sticky;
  display: flex;
  top: ${yearRowPositionDesktop};
  z-index: 3;
  height: ${headerHeight}px;
  background-color: ${({ theme }) => theme.bgTertiary};

  > * {
    flex: 1;
  }

  @media ${deviceBreakPoints.tablet} {
    top: ${yearRowPositionMobile};
  }

  @media ${yearSmallMobileBreakpoint} {
    top: ${yearRowPositionSmallMobile};
  }
`

const YearDate = styled.div`
  width: 100%;
  font-weight: var(--fontWeight-semiBold);
  font-size: var(--fontSize-28);
  padding: var(--spacing-3);

  @media ${deviceBreakPoints.mobile} {
    transform: translateX(calc(50vw - 50%));
    text-align: center;
  }

  @media ${deviceBreakPoints.smallMobile} {
    text-align: right;
    transform: none;
  }
`

const YearLine = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.separator};
  width: 100%;
  position: absolute;
  bottom: 0;
`

const Header = styled.div`
  display: flex;
  position: sticky;
  top: ${yearRowPositionDesktop};
  z-index: 4;

  @media ${deviceBreakPoints.tablet} {
    top: ${yearRowPositionMobile};
  }

  @media ${yearSmallMobileBreakpoint} {
    top: ${yearRowPositionSmallMobile};
  }
`

const Headings = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: calc(${trackWidth}px * 2);
  height: ${headerHeight}px;
`

const Heading = styled.div<{ right: boolean }>`
  text-align: ${({ right }) => (right ? 'right' : 'left')};
  font-weight: var(--fontWeight-semiBold);
  font-size: var(--fontSize-28);
  flex: 1;

  @media ${deviceBreakPoints.smallMobile} {
    padding-top: var(--spacing-8);
  }
`

const HeaderStickyBackground = styled.div`
  position: sticky;
  top: ${yearRowPositionDesktop};
  width: 100%;
  height: ${headerHeight}px;
  z-index: 1;
  backdrop-filter: blur(20px);

  @media ${deviceBreakPoints.tablet} {
    top: ${yearRowPositionMobile};
  }

  @media ${yearSmallMobileBreakpoint} {
    top: ${yearRowPositionSmallMobile};
  }
`

function sortMerge(as, bs) {
  const diff = (c, d) => c.order - d.order
  const aSorted = as.sort(diff)
  const bSorted = bs.sort(diff)

  const aNewList = aSorted.reduce((list, a) => {
    const b = bSorted.find((b) => b.order === a.order)
    return b ? [...list, [a, b]] : [...list, [a, undefined]]
  }, [])
  const bNewList = bSorted.reduce((list, b) => {
    const a = aSorted.some((a) => a.order === b.order)
    return a ? [...list, [a, b]] : [...list, [undefined, b]]
  }, [])
  const newList = aNewList.concat(bNewList).sort((a, b) => {
    if (a[0] !== undefined && b[0] !== undefined) return a[0].order - b[0].order
    if (a[1] !== undefined && b[1] !== undefined) return a[1].order - b[1].order
    if (a[0] !== undefined && b[1] !== undefined) return a[0].order - b[1].order
    return a[1].order - b[0].order
  })

  return uniqBy(newList, (el) => (el[0] && el[0].order) || (el[1] && el[1].order))
}

export default DualTimeline
