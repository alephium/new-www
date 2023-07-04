import styled from 'styled-components'

import AmbassadorsSectionContainer from './AmbassadorsSectionContainer'
import { H2, H3, Paragraph } from './Texts'

import Columns from '../../Columns/Columns'
import Column from '../../Columns/Column'
import ArrowedLink from '../../ArrowedLink'
import List from './List'
import TiersSlider from './TiersSlider'

export type AmbassadorsInfoSectionContentType = {
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

interface AmbassadorsInfoSectionProps {
  content: AmbassadorsInfoSectionContentType
  className?: string
}

const AmbassadorsInfoSection = ({ className }: AmbassadorsInfoSectionProps) => (
  <div className={className}>
    <AmbassadorsSectionContainer>
      <Columns gap="50px">
        <Column>
          <H3 divider>Number of participants</H3>
          <Paragraph>
            The 2023 program will onboard a maximum of 16 Alephians. To be eligible to participate in the program, all
            Alephium enthusiasts will need to submit their applications and be willing to commit for at least 6 months.
            Alephium will evaluate the submissions and reach out to the selected parties.
          </Paragraph>
          <Paragraph>
            Once accepted, Alephians will be onboarded into the program. We will re-open the program again once we
            gathered our learnings from the first cohort. If you haven’t been selected this time around, don’t worry!
            Rewards will be paid for once off contributions or extra tasks. All you have to do is to let us know about
            your contribution through the form below.
          </Paragraph>
          <ArrowedLink
            url="https://docs.google.com/forms/d/e/1FAIpQLSeaSouXl-Hwd_lZohwgysqk-8whc9bydHuVpSCr1C6IoDHuoA/viewform"
            trackingName="ambassadors:reward-form-link"
            newTab
            colorArrowOnly
          >
            Reward form
          </ArrowedLink>
        </Column>
        <Column>
          <H3 divider>Who are we looking for?</H3>
          <List>
            <List.Item>
              <List.ItemTitle>Community Builder</List.ItemTitle> -{' '}
              <List.ItemContent>
                Be our Community Builder in your location. Set up meets, build Alephium’s profile, and share ideas on
                how you can get Alephium to your community.
              </List.ItemContent>
            </List.Item>
            <List.Item>
              <List.ItemTitle>Animators/Moderators</List.ItemTitle> -{' '}
              <List.ItemContent>
                Help to keep the conversations going. Alephium needs people in its channels working with and interacting
                with users to ensure knowledge sharing and a good experience for all.
              </List.ItemContent>
            </List.Item>
            <List.Item>
              <List.ItemTitle>Content Creators</List.ItemTitle> -{' '}
              <List.ItemContent>
                Are you a good writer, a videographer, podcast host or know of any other medium to spread the Alephium’s
                story? This is for you.
              </List.ItemContent>
            </List.Item>
            <List.Item>
              <List.ItemTitle>Translators</List.ItemTitle> -{' '}
              <List.ItemContent>
                Alephium’s content and applications should be accessible and inclusive.
              </List.ItemContent>
            </List.Item>
            <List.Item>
              <List.ItemTitle>And more...</List.ItemTitle>
            </List.Item>
          </List>
        </Column>
      </Columns>
    </AmbassadorsSectionContainer>
    <AmbassadorsSectionContainer doubleMargin>
      <H2 verticalMargin divider>
        Program Structure and Perks
      </H2>
      <PerksIntro gap="50px">
        <Column>
          <Paragraph>
            The Alephian program is a three-tier based program. Each tier has specific monthly targets attached to it
            and meeting these targets is a requirement for getting the reward. When applying for the program make sure
            to consider this information in combination with the time you are willing to dedicate to the project.
          </Paragraph>
        </Column>
        <Column>
          <List>
            <List.Item>
              <List.ItemTitle>Rewards</List.ItemTitle>
              <List.ItemContent>- Each tier comes with remuneration and requires formal agreements.</List.ItemContent>
            </List.Item>
            <List.Item>
              <List.ItemTitle>Swag</List.ItemTitle>
              <List.ItemContent>
                - Vouchers to our Alephium online store will allow you to represent the project in style, or treat your
                local community.
              </List.ItemContent>
            </List.Item>
            <List.Item>
              <List.ItemTitle>In house collaboration</List.ItemTitle>
              <List.ItemContent>- A direct line of communication to the Alephium core contributors!</List.ItemContent>
            </List.Item>
          </List>
        </Column>
      </PerksIntro>
    </AmbassadorsSectionContainer>
    <TiersSlider />
    <AmbassadorsSectionContainer doubleMargin>
      <H2 verticalMargin divider>
        FAQs
      </H2>
      <FAQContent>
        <QABox>
          <Question>Are participants in the Alephian Program paid?</Question>
          <Answer>All participants who are selected for the Alephian Program will be receiving ALPH rewards.</Answer>
        </QABox>
        <QABox>
          <Question>I have an existing community, can I still work with Alephium?</Question>
          <Answer>Yes! Community is about bringing people together and knowledge sharing.</Answer>
        </QABox>
        <QABox>
          <Question>How do I find out if I’ve been accepted?</Question>
          <Answer>All applicants will be contacted via email with feedback on their application.</Answer>
        </QABox>
        <QABox>
          <Question>Can I continue in the program after the initial 6 months?</Question>
          <Answer>
            Yes. If selected, Ambassadors agree that the contractual relationship between them and Alephium is a 6
            months duration contractual relationship that renews itself tacitly. The contractual relationship may be
            terminated by either party at any time upon written notice.
          </Answer>
        </QABox>
        <QABox>
          <Question>What if I have more questions?</Question>
          <Answer>If you have any questions about the program, please email: community@alephium.org.</Answer>
        </QABox>
      </FAQContent>
    </AmbassadorsSectionContainer>
  </div>
)

export default AmbassadorsInfoSection

const PerksIntro = styled(Columns)``

const FAQContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
`

const QABox = styled.div`
  padding: var(--spacing-4);
  background-color: ${({ theme }) => theme.bgSecondary};
  border: 1px solid ${({ theme }) => theme.borderPrimary};
`

const Question = styled.div`
  font-weight: 500;
  font-size: 17px;
  margin-bottom: var(--spacing-2);
`

const Answer = styled.div`
  opacity: 0.8;
`
