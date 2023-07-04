import styled from 'styled-components'
import HackathonSectionContainer from './HackathonSectionContainer'
import HackathonSectionTitle from './HackathonSectionTitle'

export type GettingStartedSectionContentType = {
  title: string
  subtitle: string
  html: string
}

interface GettingStartedSectionProps {
  content: GettingStartedSectionContentType
  className?: string
}

const GettingStartedSection = ({ content: { title, subtitle, html }, className }: GettingStartedSectionProps) => (
  <div className={className}>
    <HackathonSectionContainer className={className}>
      <HackathonSectionTitle title={title} subtitle={subtitle} sticky bigSubtitle backgroundColor="bgTertiary" />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </HackathonSectionContainer>
  </div>
)

export default styled(GettingStartedSection)`
  background-color: ${({ theme }) => theme.bgTertiary};
  color: ${({ theme }) => theme.textPrimary};

  h3 {
    margin-top: var(--spacing-6);
    font-size: 28px;
  }

  p {
    opacity: 0.8;
  }
`
