import { FC } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import PageSectionContainer from './PageSectionContainer'
import CardEngagement from './CardEngagement'
import Column from './Columns/Column'
import Columns from './Columns/Columns'
import SectionTextHeader from './SectionTextHeader'
import { ArrowedLinkProps } from './ArrowedLink'

import { deviceBreakPoints } from '../styles/global-style'

export interface PageSectionIntroContentType {
  title: string
  subtitle: string
  cards: {
    title: string
    description: string
    link: ArrowedLinkProps
    image: { publicURL: string }
  }[]
}

interface PageSectionIntroProps {
  className?: string
  content: PageSectionIntroContentType
}

const PageSectionIntro: FC<PageSectionIntroProps> = ({ className, content }) => (
  <SectionContainer className={className} id="intro">
    <SectionTextHeader bigSubtitle title={content.title} subtitle={content.subtitle} sticky />
    <PageSectionContainer>
      <IntroColumns gap="var(--spacing-32)">
        <Column>
          {content.cards && (
            <IntroColumnContent
              variants={cardContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {content.cards.map((card) => (
                <CardEngagement
                  title={card.title}
                  image={card.image}
                  key={card.title}
                  link={card.link}
                  trackingName={`intro-section-card:${card.title}-${card.link.text}-link`}
                  variants={cardVariants}
                >
                  <p>{card.description}</p>
                </CardEngagement>
              ))}
            </IntroColumnContent>
          )}
        </Column>
      </IntroColumns>
    </PageSectionContainer>
  </SectionContainer>
)

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const SectionContainer = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: var(--spacing-8);
`

const IntroColumns = styled(Columns)`
  margin-bottom: var(--spacing-8);
  @media (max-width: 1352px) {
    gap: var(--spacing-20);
  }

  @media (max-width: 1096px) {
    gap: var(--spacing-10);
  }
`

const IntroColumnContent = styled(motion.div)`
  margin-top: var(--spacing-6);
  display: grid;
  grid-template-columns: minmax(150px, 50%) minmax(150px, 50%);
  grid-template-rows: 324px;
  column-gap: 30px;
  row-gap: 30px;

  @media ${deviceBreakPoints.tablet} {
    flex-direction: column;
    grid-template-columns: 100%;
  }
`

export default PageSectionIntro
