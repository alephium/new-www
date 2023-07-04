import { colord } from 'colord'
import { motion } from 'framer-motion'
import { useState } from 'react'
import styled from 'styled-components'
import AmbassadorsSectionContainer from './AmbassadorsSectionContainer'
import { H3, Paragraph } from './Texts'

interface TierContent {
  title: string
  tasks: string
  targets: string
}

const TiersSlider = () => (
  <SliderContainer>
    <AmbassadorsSectionContainer noVerticalMargin>
      <SlidingContent>
        <CategoryCard title="Community" color="#4294f3" content={communityTiers} />
        <CategoryCard title="Content" color="#4ba371" content={contentTiers} />
        <CategoryCard title="Outreach" color="#f38977" content={outreachTiers} />
      </SlidingContent>
    </AmbassadorsSectionContainer>
  </SliderContainer>
)

interface CardProps {
  title: string
  color: string
  content: TierContent[]
}

const CategoryCard = ({ title, color, content }: CardProps) => (
  <CategoryCardStyled>
    <CardHeader style={{ backgroundColor: color }}>
      <H3>{title}</H3>
    </CardHeader>
    <TierContent content={content} color={color} />
  </CategoryCardStyled>
)

const TierContent = ({ content, color }: Omit<CardProps, 'title'>) => (
  <TierContentStyled>
    {content.map((c, i) => (
      <TierElement key={c.title}>
        <TierContentLabel style={{ backgroundColor: colord(color).alpha(0.1).toHex(), color }}>
          TIER {i + 1}
        </TierContentLabel>
        <TierTitle style={{ color: colord(color).darken(0.1).toHex() }}>{c.title}</TierTitle>
        <Paragraph>{c.tasks}</Paragraph>
        <ExpandableTargets targetsContent={c.targets} />
      </TierElement>
    ))}
  </TierContentStyled>
)

const ExpandableTargets = ({ targetsContent }: { targetsContent: TierContent['targets'] }) => {
  const [targetsOpen, setTargetsOpen] = useState(false)

  return (
    <>
      <TargetsOpenButton onClick={() => setTargetsOpen((p) => !p)}>
        {targetsOpen ? 'Hide' : 'See'} targets <Sign>{targetsOpen ? '-' : '+'}</Sign>
      </TargetsOpenButton>
      <ExpandableTargetsContent animate={{ height: targetsOpen ? 'auto' : 0 }}>
        <TargetsText>{targetsContent}</TargetsText>
      </ExpandableTargetsContent>
    </>
  )
}

export default TiersSlider

const communityTiers: TierContent[] = [
  {
    title: 'Community Animator',
    tasks: `Participate in the community by directing other community members with questions to our FAQ like and share our posts, promoting Alephium on social media and other groups.`,
    targets: `Regular Engagement. Guide other community members by answering known questions and escalating when necessary; i.e tagging the right person to answer it.`
  },
  {
    title: 'Community Moderator',
    tasks:
      'Thoroughly answers questions on the various channels, assists in the moderation of conversations, promotes our events and assists on content distribution.',
    targets:
      'Answers more complex questions, ban users, enforce the server rules, approve posts and content. Promote community engagement by requesting them to like our posts, share it and comment on it. Encourage quality “shilling” from the community.'
  },
  {
    title: 'Community Creator',
    tasks:
      'To start growing a community outside the internal Alephium community. Manage this community, engage it, discuss Alephium related topics and promote topics from the internal community.',
    targets:
      'Builds a community that lives on its own minimum 50 people. An independent sub-community which discusses Alephium and its tech.'
  }
]

const contentTiers: TierContent[] = [
  {
    title: 'Translations',
    tasks: 'Translate articles/docs to different languages.',
    targets: 'At least 5 translations of existing content. Or one app translation.'
  },
  {
    title: 'Content Creator',
    tasks:
      'Creation of original articles, videos, reviews, tutorials, images or any content that will showcase Alephium.',
    targets: `At least a total of 2 monthly contributions:
      - Articles
      - Reviews
      - Tutorials
      - Images/visual content
      - Active contribution on socials
      - Hosting a space
      - Doing a Podcast`
  },
  {
    title: 'Super Content Creator',
    tasks: 'Tier 2 but Supercharged',
    targets: `At least a total of 4 monthly contributions: 
      - Articles
      - Reviews
      - Tutorials
      - Images/visual content
      - Active contribution on socials
      - Hosting a space
      - Doing a Podcast`
  }
]

const outreachTiers: TierContent[] = [
  {
    title: 'Meet-up Coordinator',
    tasks: 'Organize a meet-up live or online to discuss topics around Alephium and spread the word about the project.',
    targets: `1 meet up per month.
Introduce developers to the ecosystem.`
  },
  {
    title: 'Alephium Networker',
    tasks: `Connect the Alephium team with various podcast/twitter hosts or other projects which might be interesting for the grow of the ecosystem.    `,
    targets: `2 to 3 qualified connections a month.`
  },
  {
    title: 'Events Organizer',
    tasks: `Organize and promote online and live events in order to spread the word about the project and grow the ecosystem. 
    Introduce developers to the ecosystem
    `,
    targets: `1 event per month.
Introduce developers to the ecosystem.`
  }
]

const SliderContainer = styled.div`
  overflow: auto;
  width: 100%;
  padding-bottom: var(--spacing-4);

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`

const SlidingContent = styled.div`
  flex: 1;
  display: flex;
  gap: var(--spacing-4);
`

const CategoryCardStyled = styled.div`
  flex: 1;
  width: 20vw;
  min-width: 300px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.borderPrimary};
`

const CardHeader = styled.header`
  padding: var(--spacing-2);
  display: flex;
  align-items: center;
  color: white;

  > h3 {
    margin: 0;
  }
`

const TierContentStyled = styled.div`
  padding: var(--spacing-2);
`

const TierElement = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.borderPrimary};
    margin-bottom: var(--spacing-2);
    padding-bottom: var(--spacing-2);
  }
`

const TierContentLabel = styled.label`
  font-size: 12px;
  font-weight: 600;
  border-radius: 4px;
  padding: 2px 4px;
  color: white;
  margin-bottom: var(--spacing-4);
`

const TierTitle = styled.h4`
  font-size: 19px;
  font-weight: 500;
  margin-top: var(--spacing-1);
  margin-bottom: var(--spacing-1);
`

const TargetsOpenButton = styled.span`
  cursor: pointer;
  opacity: 0.8;
  user-select: none;
  font-size: 15px;

  &:hover {
    opacity: 1;
  }
`

const ExpandableTargetsContent = styled(motion.div)`
  overflow: hidden;
`

const TargetsText = styled.div`
  font-size: 15px;
  white-space: pre-wrap;
  background: ${({ theme }) => theme.bgSecondary};
  opacity: 0.7;
  padding: var(--spacing-2);
`

const Sign = styled.span`
  color: ${({ theme }) => theme.highlight};
`
