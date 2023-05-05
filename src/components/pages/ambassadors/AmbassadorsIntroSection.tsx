import styled from 'styled-components'
import Column from '../../Columns/Column'
import Columns from '../../Columns/Columns'
import SectionTextHeader from '../../SectionTextHeader'
import { deviceBreakPoints } from '../../../styles/global-style'
import GenevaWaterJet from './AnimatedIllustrations/GenevaWaterJet'
import HackathonSectionContainer from './AmbassadorsSectionContainer'

export type AmbassadorsIntroSectionContentType = {
  title: string
  subtitle: string
  description: string
}

interface AmbassadorsIntroSectionProps {
  content: AmbassadorsIntroSectionContentType
  className?: string
}

const AmbassadorsIntroSection = ({
  content: { title, subtitle, description },
  className
}: AmbassadorsIntroSectionProps) => (
  <HackathonSectionContainer className={className}>
    <Columns gap={'5vw'}>
      <IllustrationBox>
        <GenevaWaterJet />
      </IllustrationBox>
      <Column>
        <StyledSectionTextHeader bigSubtitle title={title} subtitle={subtitle} />
      </Column>
    </Columns>
    <Description>{description}</Description>
  </HackathonSectionContainer>
)

export default styled(AmbassadorsIntroSection)`
  margin-top: var(--spacing-14);
`

const StyledSectionTextHeader = styled(SectionTextHeader)`
  min-width: 450px;
  padding: 0;

  @media ${deviceBreakPoints.tablet} {
    min-width: auto;
  }
`

const IllustrationBox = styled(Column)`
  background-color: ${({ theme }) => theme.bgTertiary};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Description = styled.p`
  margin-top: var(--spacing-10);
  color: ${({ theme }) => theme.textPrimary};
  border-left: 2px solid ${({ theme }) => theme.highlight};
  padding-left: 20px;
  text-align: justify;

  @media ${deviceBreakPoints.tablet} {
    margin: var(--spacing-10) var(--spacing-2) 0 0;
    padding-left: 15px;
  }
`