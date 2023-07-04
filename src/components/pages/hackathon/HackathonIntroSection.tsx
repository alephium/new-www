import styled from 'styled-components'
import Column from '../../Columns/Column'
import Columns from '../../Columns/Columns'
import { deviceBreakPoints } from '../../../styles/global-style'
import HackathonSectionContainer from './HackathonSectionContainer'
import HackathonSectionTitle from './HackathonSectionTitle'

export type HackathonIntroSectionContentType = {
  title: string
  subtitle: string
  description: string
}

interface HackathonIntroSectionProps {
  content: HackathonIntroSectionContentType
  className?: string
}

const HackathonIntroSection = ({
  content: { title, subtitle, description },
  className
}: HackathonIntroSectionProps) => (
  <HackathonSectionContainer className={className}>
    <Columns gap="50px">
      <Column>
        <StyledSectionTextHeader bigSubtitle title={title} subtitle={subtitle} />
      </Column>
    </Columns>
    <Description>{description}</Description>
  </HackathonSectionContainer>
)

export default styled(HackathonIntroSection)`
  margin-top: var(--spacing-14);
`

const StyledSectionTextHeader = styled(HackathonSectionTitle)`
  max-width: 550px;
  padding: 0;

  h2 {
    font-weight: 500 !important;
    font-size: 48px;
  }

  @media ${deviceBreakPoints.tablet} {
    min-width: auto;
  }
`

const Description = styled.p`
  color: ${({ theme }) => theme.textPrimary};
  border-left: 2px solid ${({ theme }) => theme.highlight};
  padding-left: 20px;
  text-align: justify;

  @media ${deviceBreakPoints.tablet} {
    margin: var(--spacing-2) var(--spacing-2) 0 0;
    padding-left: 15px;
  }
`
