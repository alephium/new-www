import styled, { ThemeProvider, useTheme } from 'styled-components'
import { graphql, navigate, PageProps } from 'gatsby'

import GlobalStyle from '../styles/global-style'
import { ambassadorsTheme } from '../styles/themes'

import Seo from '../components/Seo'
import AmbassadorsIntroSection, {
  AmbassadorsIntroSectionContentType
} from '../components/pages/ambassadors/AmbassadorsIntroSection'
import AmbassadorsInfoSection, {
  AmbassadorsInfoSectionContentType
} from '../components/pages/ambassadors/AmbassadorsInfoSection'
import AmbassadorsLandingSection, {
  AmbassadorsLandingSectionContentType
} from '../components/pages/ambassadors/AmbassadorsLandingSection'
import NavigationMenu from '../components/NavigationMenu'
import Footer from '../components/Footer'
import SimpleLink from '../components/SimpleLink'
import ModalTermsAndConditions from '../components/pages/ambassadors/ModalTermsAndConditions'

interface AmbassadorsPageProps extends PageProps {
  data: {
    ambassadors: {
      nodes: {
        frontmatter: {
          headerLandingSection: AmbassadorsLandingSectionContentType
          introSection: AmbassadorsIntroSectionContentType
          informations: AmbassadorsInfoSectionContentType
        }
        html: string
      }[]
    }
  }
}

const IndexPage = ({ location, ...props }: AmbassadorsPageProps) => {
  const pageContent = props.data.ambassadors.nodes[0].frontmatter

  const params = new URLSearchParams(location.search)

  const setIsModalTermsOpen = (shouldOpen: boolean) => {
    if (shouldOpen) {
      params.set('modal', 'terms')
      const newSearch = params.toString()
      navigate(location.pathname + '?' + newSearch + location.hash)
    }
  }

  return (
    <ThemeProvider theme={ambassadorsTheme}>
      <Wrapper>
        <Seo />
        <GlobalStyle />
        <NavigationMenuStyled />
        <AmbassadorsLandingSection content={pageContent.headerLandingSection} />
        <AmbassadorsIntroSection content={pageContent.introSection} />
        <AmbassadorsInfoSection content={pageContent.informations} />
      </Wrapper>
      <TermsAndConditionsRibbon>
        <SimpleLink openModal={setIsModalTermsOpen}>{"Program's terms and conditions"}</SimpleLink>
      </TermsAndConditionsRibbon>
      <ModalTermsAndConditions location={location} />
      <Footer location={location} />
    </ThemeProvider>
  )
}

export default IndexPage

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  // Some simple specific styles for text focused pages like the hackathon one.
  * {
    box-sizing: border-box;
  }
  font-size: 16px; // Slighty increase base font size for marketing content
  line-height: 24px;
  font-family: 'Switzer', 'Helvetica Neue', 'Inter'; // Trial.
  background-color: ${({ theme }) => theme.bgPrimary};

  a {
    font-weight: 500;
    font-size: inherit;
  }

  b {
    font-weight: 500 !important;
  }

  button {
    font-size: inherit;
  }

  h3 {
    font-weight: 400;
  }

  .text-subtitle {
    color: var(--color-grey-300);
    font-size: var(--fontSize-24);
    margin: 0;
    font-weight: 400;
  }

  b {
    font-weight: 600;
  }
`

const NavigationMenuStyled = styled(NavigationMenu)`
  margin: 0 10vw;

  a {
    font-weight: 300;
    color: ${({ theme }) => theme.textPrimary};
  }
`

const TermsAndConditionsRibbon = styled.div`
  display: flex;
  justify-content: center;
  padding: var(--spacing-4);
  background-color: ${({ theme }) => theme.bgSecondary};
  border-bottom: 1px solid ${({ theme }) => theme.borderPrimary};
`

export const pageQuery = graphql`
  query {
    ambassadors: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/ambassadors.md/" } }) {
      nodes {
        frontmatter {
          headerLandingSection {
            tagline
            title
            date
          }
          introSection {
            title
            subtitle
            description
          }
        }
        html
      }
    }
  }
`
