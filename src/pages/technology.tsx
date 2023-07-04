import { ThemeProvider } from 'styled-components'
import { graphql, PageProps } from 'gatsby'

import GlobalStyle from '../styles/global-style'
import { darkTheme } from '../styles/themes'

import Seo from '../components/Seo'
import PageSectionTechnology, { PageSectionTechnologyContentType } from '../components/PageSectionTechnology'
import PageSectionSunOverTheMountains from '../components/PageSectionSunOverTheMountains'
import PageSectionFollowUs, { PageSectionFollowUsContentType } from '../components/PageSectionFollowUs'
import Footer, { FooterContentType } from '../components/Footer'

interface TechnologyPageProps extends PageProps {
  data: {
    technology: {
      nodes: {
        frontmatter: {
          technologySection: PageSectionTechnologyContentType
        }
      }[]
    }
    homepage: {
      nodes: {
        frontmatter: {
          followUsSection: PageSectionFollowUsContentType
          footer: FooterContentType
        }
      }[]
    }
  }
}

const TechnologyPage = (props: TechnologyPageProps) => {
  const content = {
    page: props.data.technology.nodes[0].frontmatter,
    general: props.data.homepage.nodes[0].frontmatter
  }

  return (
    <>
      <Seo />
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
      </ThemeProvider>
      <main>
        <ThemeProvider theme={darkTheme}>
          <PageSectionTechnology content={content.page.technologySection} />
          <PageSectionSunOverTheMountains />
          <PageSectionFollowUs content={content.general.followUsSection} />
          <Footer location={props.location} />
        </ThemeProvider>
      </main>
    </>
  )
}

export default TechnologyPage

export const pageQuery = graphql`
  query {
    technology: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/technology.md/" } }) {
      nodes {
        frontmatter {
          technologySection {
            title
            subtitle
            blockFlowSection {
              title
              description
              cardText
              links {
                text
                url
                newTab
              }
            }
            polwSection {
              title
              description
              cardText
              links {
                text
                url
                newTab
              }
            }
            smartContractSection {
              title
              description
              cardText
              links {
                text
                url
                newTab
              }
            }
            vmsSection {
              title
              description
              cardText
              links {
                text
                newTab
              }
            }
          }
        }
      }
    }
    homepage: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/homepage.md/" } }) {
      nodes {
        frontmatter {
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
              }
            }
          }
        }
      }
    }
  }
`
