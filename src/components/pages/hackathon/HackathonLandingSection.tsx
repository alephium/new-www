import { colord } from 'colord'
import styled from 'styled-components'
import AlephiumLogo from '../../AlephiumLogo'
import ParallaxWrapper from '../../ParallaxWrapper'
import backgroundImage from '../../../images/alephium-hackathon-lake.jpg'
import { deviceBreakPoints } from '../../../styles/global-style'
import HackathonSectionContainer from './HackathonSectionContainer'

export type HackathonLandingSectionContentType = {
  tagline: string
  title: string
  date: string
}

interface HackathonLandingSectionProps {
  content: HackathonLandingSectionContentType
}

const HackathonLandingSection = ({ content: { tagline, title, date } }: HackathonLandingSectionProps) => (
  <SectionWrapper>
    <ParallaxWrapper speed={5}>
      <HackathonSectionContainer>
        <Content>
          <FirstContentBox>
            <AlephiumLogoStyled gradientIndex={2} />
            <Date>{date}</Date>
            <Title>{title}</Title>
          </FirstContentBox>
          <SecondContentBox>
            <TagLine>{tagline}</TagLine>
          </SecondContentBox>
        </Content>
      </HackathonSectionContainer>
    </ParallaxWrapper>
  </SectionWrapper>
)

export default HackathonLandingSection

const SectionWrapper = styled.div`
  position: relative;
  height: calc(max(60vh, 300px));
  max-height: 400px;
  background-color: black;
`

const AlephiumLogoStyled = styled(AlephiumLogo)`
  height: 10vh;
  min-height: 80px;
  max-height: 110px;
  width: auto;
`

const Content = styled.div`
  margin-bottom: -100px;
  box-shadow: 0 0 60px rgba(0, 255, 94, 0.444);
  border: 1px solid ${({ theme }) => theme.highlight};
  overflow: hidden;

  @media ${deviceBreakPoints.tablet} {
    margin-left: var(--spacing-4);
    margin-right: var(--spacing-4);
  }
`

const FirstContentBox = styled.div`
  padding: var(--spacing-6) calc(max(3vw, 30px));
  background-color: ${colord('#1111111').alpha(0.1).toRgbString()};
  backdrop-filter: blur(20px);
  max-height: 300px;
  background: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`

const SecondContentBox = styled.div`
  background-color: ${({ theme }) => theme.highlight};
  color: white;
  backdrop-filter: blur(20px);
  padding: 2vh 3vw;
  max-height: 150px;
`

const TagLine = styled.h2`
  color: ${({ theme }) => theme.textPrimary};
  font-size: var(--fontSize-24);
  max-width: 500px;
  font-weight: 400;
`
const Title = styled.h1`
  color: ${({ theme }) => theme.textPrimary};
  font-size: var(--fontSize-50);
  margin-top: 10px;
  font-weight: 500;
`
const Date = styled.h1`
  color: ${({ theme }) => theme.highlight};
  font-size: var(--fontSize-28);
  font-family: 'courier';
  font-weight: 200;
`
