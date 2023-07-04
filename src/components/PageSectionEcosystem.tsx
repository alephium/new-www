import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import { deviceBreakPoints } from '../styles/global-style'

import SectionTextHeader from './SectionTextHeader'
import PageSectionContainer from './PageSectionContainer'
import SubsectionTextHeader from './SubsectionTextHeader'
import SimpleLink from './SimpleLink'
import Columns from './Columns/Columns'
import { motion } from 'framer-motion'

type SubsectionType = {
  title: string
  description: string
  image?: { publicURL: string }
  items: {
    title: string
    logo?: { publicURL: string }
    url?: string
  }[]
}

const PageSectionEcosystem = ({ className }: { className?: string }) => {
  const { homepage } = useStaticQuery(query)

  const {
    ecosystemSection: { title, subtitle, subsections }
  } = homepage.nodes[0].frontmatter

  return (
    <section className={className}>
      <SectionTextHeader title={title} subtitle={subtitle} bigSubtitle bigText sticky />
      <SectionContainer>
        <Subsections>
          {subsections.map(({ title, description, image, items }: SubsectionType) => (
            <Subsection key={title} animateEntry>
              <SubsectionImageContainer>{image && <img src={image.publicURL} alt={title} />}</SubsectionImageContainer>
              <SubsectionTextContent>
                <SubsectionTextHeader title={title} subtitle={description} />
                <SubsectionItems variants={containerVariants}>
                  {items &&
                    items.map(({ title, logo, url }) =>
                      url ? (
                        <SimpleLink
                          url={url}
                          text={title}
                          key={url}
                          newTab
                          trackingName={`ecosystem-section:${title.replaceAll(' ', '-')}-link`}
                        >
                          <SubsectionItem key={title} variants={itemVariants}>
                            {logo ? (
                              <>
                                <SubsectionItemTitle className="with-logo">{title}</SubsectionItemTitle>
                                <SubsectionItemLogoContainer>
                                  <SubsectionItemLogo src={logo.publicURL} alt={title} />
                                </SubsectionItemLogoContainer>
                              </>
                            ) : (
                              <SubsectionItemTitle>{title}</SubsectionItemTitle>
                            )}
                          </SubsectionItem>
                        </SimpleLink>
                      ) : (
                        <SubsectionItem key={title}>
                          <SubsectionItemTitle>{title}</SubsectionItemTitle>
                        </SubsectionItem>
                      )
                    )}
                </SubsectionItems>
              </SubsectionTextContent>
            </Subsection>
          ))}
        </Subsections>
      </SectionContainer>
    </section>
  )
}

export default styled(PageSectionEcosystem)`
  padding-top: var(--spacing-16);
  padding-bottom: var(--spacing-20);
  position: relative;
`

const SectionContainer = styled(PageSectionContainer)`
  margin-top: var(--spacing-12);
`

const Subsections = styled.div`
  margin-top: var(--spacing-5);
`

const SubsectionImageContainer = styled.div`
  flex-grow: 1;

  @media ${deviceBreakPoints.tablet} {
    display: flex;
    justify-content: center;
    margin-bottom: var(--spacing-6);
    height: 250px;
  }

  img {
    width: 60%;
  }
`

const SubsectionTextContent = styled.div`
  max-width: 50%;

  @media ${deviceBreakPoints.tablet} {
    max-width: 100%;
  }
`

const Subsection = styled(Columns)`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);

  @media ${deviceBreakPoints.tablet} {
    flex-direction: column;
    gap: var(--spacing-4);
    align-items: stretch;
  }

  &:nth-child(odd) {
    ${SubsectionImageContainer} {
      order: 2;
      text-align: right;

      @media ${deviceBreakPoints.tablet} {
        order: 0;
      }
    }
  }

  &:not(:last-child) {
    margin-bottom: var(--spacing-20);

    @media ${deviceBreakPoints.tablet} {
      margin-bottom: var(--spacing-10);
    }
  }
`

const SubsectionItems = styled(motion.div)`
  margin-top: var(--spacing-4);
  gap: 30px;
  display: flex;
  flex-wrap: wrap;
`

const SubsectionItemTitle = styled.div`
  font-weight: var(--fontWeight-semiBold);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-out;
  text-align: center;
  padding: var(--spacing-1);
`

const SubsectionItemLogoContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 0;
  transition: all 0.2s ease-out;
  transform: translateY(-5px);
  padding: var(--spacing-2);
  display: flex;
`

const SubsectionItemLogo = styled.img`
  flex: 1;
  transition: all 0.2s ease-out;
  max-width: 100%;
  max-width: 100%;
`

const SubsectionItem = styled(motion.div)`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.bgPrimary};
  box-shadow: 0px 22px 30px rgba(0, 0, 0, 0.47);
  box-sizing: border-box;
  border-radius: 9px;
  font-size: 13px;
  border: 1px solid ${({ theme }) => theme.borderPrimary};

  &:hover {
    ${SubsectionItemTitle}.with-logo {
      opacity: 0;
      transform: translateY(-5px);
    }

    ${SubsectionItemLogoContainer} {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const query = graphql`
  query {
    homepage: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/homepage.md/" } }) {
      nodes {
        frontmatter {
          ecosystemSection {
            title
            subtitle
            subsections {
              title
              description
              image {
                publicURL
              }
              items {
                title
                logo {
                  publicURL
                }
                url
              }
            }
          }
        }
      }
    }
  }
`
