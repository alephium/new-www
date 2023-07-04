import { colord } from 'colord'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import styled from 'styled-components'
import TeamMember from '../../TeamMember'
import { deviceBreakPoints } from '../../../styles/global-style'
import HackathonSectionContainer from './HackathonSectionContainer'
import HackathonSectionTitle from './HackathonSectionTitle'
import { H3, Paragraph } from './Texts'

export type HackathonJudgingSectionContentType = {
  title: string
  subtitle: string
  rules: {
    title: string
    description: string
  }
  criteria: {
    title: string
    description: string
    criteriumList: {
      title: string
      description: string
    }[]
  }
  jury: {
    title: string
    description: string
    people: {
      name: string
      role: string
      picture: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }[]
  }
}

interface HackathonJudgingSectionProps {
  content: HackathonJudgingSectionContentType
  className?: string
}

const HackathonJudgingSection = ({ content }: HackathonJudgingSectionProps) => (
  <HackathonSectionContainer>
    <HackathonSectionTitle title={content.title} subtitle={content.subtitle} sticky bigSubtitle />
    <HighlightedBox>
      <H3>{content.rules.title}</H3>
      <Paragraph>{content.rules.description}</Paragraph>
    </HighlightedBox>
    <br />
    <H3 divider>{content.criteria.title}</H3>
    <Paragraph>{content.criteria.description}</Paragraph>
    <br />
    <CriteriumList>
      {content.criteria.criteriumList.map((c) => (
        <CriteriumCard key={c.title}>
          <H3>{c.title}</H3>
          <Paragraph>{c.description}</Paragraph>
        </CriteriumCard>
      ))}
    </CriteriumList>
    <H3 divider>{content.jury.title}</H3>
    <Paragraph>{content.jury.description}</Paragraph>
    <br />
    <Jury>
      {content.jury.people.map((p) => (
        <PersonCard key={p.name}>
          <TeamMember name={p.name} image={p.picture} role={p.role} />
        </PersonCard>
      ))}
    </Jury>
    <br />
  </HackathonSectionContainer>
)

export default HackathonJudgingSection

const HighlightedBox = styled.div`
  margin-bottom: var(--spacing-4);
  padding: var(--spacing-4);
  border: 1px solid ${({ theme }) => theme.highlight};
  color: ${({ theme }) => theme.highlight};
  background-color: ${({ theme }) => colord(theme.highlight).alpha(0.05).toHex()};

  h3 {
    margin-top: 0 !important;
  }

  p {
    margin-bottom: 0 !important;
    opacity: 1 !important;
  }
`

const CriteriumList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;

  @media ${deviceBreakPoints.tablet} {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`

const CriteriumCard = styled.div`
  padding: var(--spacing-4);
  border: 1px solid ${({ theme }) => theme.borderPrimary};
  background-color: ${({ theme }) => theme.bgPrimary};

  h3 {
    margin-top: var(--spacing-2);
  }
`

const Jury = styled.div`
  display: flex;
  gap: 25px;

  @media ${deviceBreakPoints.tablet} {
    flex-wrap: wrap;
    justify-content: center;
  }
`

const PersonCard = styled.div`
  padding-bottom: var(--spacing-2);
  text-align: center;
  max-width: 170px;

  display: flex;
  align-items: center;
  justify-content: center;
`
