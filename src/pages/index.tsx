import { ThemeProvider } from 'styled-components'
import { graphql, PageProps } from 'gatsby'

import GlobalStyle from '../styles/global-style'
import { darkTheme } from '../styles/themes'

import Seo from '../components/Seo'
import PageSectionHero, { PageSectionHeroContentType } from '../components/PageSectionHero'
import PageSectionIntro, { PageSectionIntroContentType } from '../components/PageSectionIntro'
import PageSectionEcosystem from '../components/PageSectionEcosystem'
import PageSectionTechnology, { PageSectionTechnologyContentType } from '../components/PageSectionTechnology'
import PageSectionNumbers, { PageSectionNumbersContentType } from '../components/PageSectionNumbers'
import PageSectionMilestones, { PageSectionMilestonesContentType } from '../components/PageSectionMilestones'
import PageSectionTodoList, { PageSectionTodoListContentType } from '../components/PageSectionTodoList'
import PageSectionFollowUs, { PageSectionFollowUsContentType } from '../components/PageSectionFollowUs'
import Footer, { FooterContentType } from '../components/Footer'
import PageSectionShop, { PageSectionShopContentType } from '../components/PageSectionShop'
import SectionDivider from '../components/SectionDivider'

interface IndexPageProps extends PageProps {
  data: {
    homepage: {
      nodes: {
        frontmatter: {
          headerSection: PageSectionHeroContentType
          introSection: PageSectionIntroContentType
          technologySection: PageSectionTechnologyContentType
          numbersSection: PageSectionNumbersContentType
          milestonesSection: PageSectionMilestonesContentType
          todoListSection: PageSectionTodoListContentType
          shopSection: PageSectionShopContentType
          followUsSection: PageSectionFollowUsContentType
          footer: FooterContentType
        }
      }[]
    }
  }
}

const IndexPage = (props: IndexPageProps) => {
  const pageContent = props.data.homepage.nodes[0].frontmatter

  return (
    <>
      <Seo />
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
      </ThemeProvider>
      <main>
        <ThemeProvider theme={darkTheme}>
          <PageSectionHero content={pageContent.headerSection} />
          <SectionDivider />
          <PageSectionIntro content={pageContent.introSection} />
          <SectionDivider />
          <PageSectionTechnology content={pageContent.technologySection} minimal />
          <PageSectionNumbers content={pageContent.numbersSection} />
          <SectionDivider />
          <PageSectionEcosystem />
        </ThemeProvider>
        <ThemeProvider theme={darkTheme}>
          <SectionDivider />
          <PageSectionMilestones content={pageContent.milestonesSection} />
          <SectionDivider />
          <PageSectionTodoList content={pageContent.todoListSection} />
          <SectionDivider />
          <PageSectionShop content={pageContent.shopSection} />
          <PageSectionFollowUs content={pageContent.followUsSection} />
          <Footer location={props.location} />
        </ThemeProvider>
      </main>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    homepage: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/homepage.md/" } }) {
      nodes {
        frontmatter {
          headerSection {
            dark {
              title
              subtitle
            }
            light {
              title
              subtitle
            }
          }
          introSection {
            title
            subtitle
            cards {
              title
              description
              image {
                publicURL
              }
              link {
                url
                newTab
              }
            }
          }
          ecosystemSection {
            title
            subtitle
            subsections {
              title
              description
              items {
                title
                url
              }
            }
          }
          technologySection {
            title
            subtitle
            blockFlowSection {
              title
              description
              links {
                text
                url
                newTab
              }
            }
            smartContractSection {
              title
              description
              links {
                text
                url
                newTab
              }
            }
            polwSection {
              title
              description
              links {
                text
                url
                newTab
              }
            }
            vmsSection {
              title
              description
              links {
                text
              }
            }
          }
          numbersSection {
            title
            subtitle
          }
          milestonesSection {
            title
            subtitle
            timelines {
              title
              years {
                year
                entries {
                  order
                  text
                  when
                  isMajor
                }
              }
            }
          }
          todoListSection {
            title
            subtitle
            lists {
              title
              items {
                text
                label
              }
            }
          }
          shopSection {
            title
            subtitle
            description
            link {
              text
              url
            }
          }
          followUsSection {
            title
            subtitle
            description
            socialMediaLinks {
              name
              url
            }
          }
          footer {
            columns {
              title
              links {
                text
                url
                newTab
                isNew
              }
            }
          }
        }
      }
    }
  }
`
