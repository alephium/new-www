import { colord } from 'colord'
import styled from 'styled-components'
import ArrowedLink from '../../ArrowedLink'
import { deviceBreakPoints } from '../../../styles/global-style'
import AI from './AnimatedIllustrations/AI'
import DeFi from './AnimatedIllustrations/DeFi'
import Gaming from './AnimatedIllustrations/Gaming'
import Interoperability from './AnimatedIllustrations/Interoperability'
import NFTs from './AnimatedIllustrations/NFTs'
import Tooling from './AnimatedIllustrations/Tooling'
import HackathonSectionContainer from './HackathonSectionContainer'
import HackathonSectionTitle from './HackathonSectionTitle'
import { H3, Paragraph } from './Texts'
import TrackCard from './TrackCard'

export type HackathonInfoSectionContentType = {
  participantsInfo: {
    title: string
    description: string
    link: {
      text: string
      url: string
    }
  }
  prerequisites: {
    title: string
    description: string
    skills: string[]
    link: {
      text: string
      url: string
    }
  }
  schedule: {
    title: string
    description: string
    events: {
      title: string
      description: string
    }[]
  }
  ideasAndTracks: {
    title: string
    subtitle: string
    tracks: {
      title: string
      description: string
    }[]
  }
  prizes: {
    title: string
    description: string
    prizeList: {
      title: string
      description: string
    }[]
  }
}

interface HackathonInfoSectionProps {
  content: HackathonInfoSectionContentType
  className?: string
}

const HackathonInfoSection = ({ content, className }: HackathonInfoSectionProps) => (
  <div className={className}>
    <HackathonSectionContainer>
      <HackathonSectionTitle
        title="The Hackathon"
        subtitle="What you need to know"
        sticky
        bigSubtitle
        backgroundColor="bgTertiary"
      />
      <H3 divider>{content.participantsInfo.title}</H3>
      <Paragraph>{content.participantsInfo.description}</Paragraph>
      <StyledArrowedLink url={content.participantsInfo.link.url} newTab>
        {content.participantsInfo.link.text}
      </StyledArrowedLink>
      <br />
      <H3 divider>{content.prerequisites.title}</H3>
      <Paragraph>{content.prerequisites.description}</Paragraph>
      <ul>
        {content.prerequisites.skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <StyledArrowedLink url={content.prerequisites.link.url} newTab>
        {content.prerequisites.link.text}
      </StyledArrowedLink>
      <br />
      <H3 divider>{content.schedule.title}</H3>
      <Paragraph>{content.schedule.description}</Paragraph>
      <br />
      <ScheduleItems>
        {content.schedule.events.map((e) => (
          <ScheduleItem key={e.title}>
            <ScheduleItemDot />
            <ScheduleItemText>
              <h4>{e.title}</h4>
              <p>{e.description}</p>
            </ScheduleItemText>
          </ScheduleItem>
        ))}
      </ScheduleItems>
      <br />
      <H3 divider>{content.ideasAndTracks.title}</H3>
      <Paragraph>{content.ideasAndTracks.subtitle}</Paragraph>
      <br />
      <TrackCards>
        {content.ideasAndTracks.tracks.map((t, i) => (
          <TrackCard
            illustration={animatedTrackIllustrations[i]}
            key={t.title}
            title={t.title}
            description={t.description}
          />
        ))}
      </TrackCards>
      <br />
      <H3 divider>{content.prizes.title}</H3>
      <Paragraph>{content.prizes.description}</Paragraph>
      <br />
      <PrizeList>
        {content.prizes.prizeList.map((p) => (
          <div key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </PrizeList>
    </HackathonSectionContainer>
  </div>
)

const animatedTrackIllustrations = [
  <DeFi key="DeFi" />,
  <AI key="AI" />,
  <Tooling key="tooling" />,
  <NFTs key="NFTs" />,
  <Gaming key="Gaming" />,
  <Interoperability key="Interoperability" />
]

export default styled(HackathonInfoSection)`
  background-color: ${({ theme }) => theme.bgTertiary};
`

const StyledArrowedLink = styled(ArrowedLink)`
  color: ${({ theme }) => theme.highlightComplementary};

  * {
    fill: ${({ theme }) => theme.highlightComplementary};
  }
`

const ScheduleItems = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: var(--spacing-2);
`

const ScheduleItem = styled.div`
  display: flex;
  align-items: center;
  padding: var(--spacing-2);
  border-left: 1px solid ${({ theme }) => theme.highlight};
`

const ScheduleItemDot = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 20px;
  margin-right: var(--spacing-1);
  background-color: ${({ theme }) => theme.highlight};
  transform: translateX(-20px);

  @media ${deviceBreakPoints.tablet} {
    transform: translateX(-18px);
  }
`

const ScheduleItemText = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    margin: 0;
  }

  p {
    margin: var(--spacing-2) 0 0 0;
    opacity: 0.8;
  }
`

const TrackCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;

  @media ${deviceBreakPoints.mobile} {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`

const PrizeList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 20px;
  text-align: center;

  div {
    &:nth-child(1) {
      border: 1px solid ${({ theme }) => theme.highlight};
      background-color: ${({ theme }) => colord(theme.highlight).alpha(0.2).toHex()};
    }
    &:nth-child(2) {
      border: 1px solid ${({ theme }) => colord(theme.highlight).darken(0.2).toHex()};
      background-color: ${({ theme }) => colord(theme.highlight).darken(0.2).alpha(0.2).toHex()};
    }
    &:nth-child(3) {
      border: 1px solid ${({ theme }) => colord(theme.highlight).darken(0.3).toHex()};
      background-color: ${({ theme }) => colord(theme.highlight).darken(0.3).alpha(0.2).toHex()};
    }
    &:nth-child(4) {
      border: 1px solid #333333;
      background-color: ${colord('#333333').alpha(0.2).toHex()};
      grid-column: 1 / span 3;
    }
  }

  @media ${deviceBreakPoints.tablet} {
    display: flex;
    flex-direction: column;
  }
`
