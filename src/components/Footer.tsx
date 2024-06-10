import { FC, useState } from 'react'
import styled, { useTheme } from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'

import SimpleLink, { SimpleLinkProps } from './SimpleLink'
import PageSectionContainer from './PageSectionContainer'
import Columns from './Columns/Columns'
import Column from './Columns/Column'
import ModalTeam from './ModalTeam'
import ModalContact from './ModalContact'

import Logo from '../images/svgs/logo.svg'
import { graphql, useStaticQuery } from 'gatsby'

export interface FooterContentType {
  footer: {
    nodes: {
      frontmatter: {
        columns: {
          title: string
          links: SimpleLinkProps[]
        }[]
      }
    }[]
  }
}

interface FooterProps {
  openPrivacyPolicyModal?: boolean
  className?: string
}

const Footer = ({ className }: FooterProps) => {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const data = useStaticQuery<FooterContentType>(footerQuery)

  const content = data.footer.nodes[0].frontmatter

  const columnsContent = content.columns
  columnsContent[2].links[0] = { ...columnsContent[2].links[0], openModal: setIsTeamModalOpen }
  columnsContent[2].links[2] = { ...columnsContent[2].links[2], openModal: setIsContactModalOpen }

  return (
    <div className={className}>
      <PageSectionContainerStyled>
        <LogosSection>
          <LogoStyled />
        </LogosSection>
        <Separator />
        <FooterColumnsSection gap="var(--spacing-4)">
          {columnsContent.map((column) => (
            <Column key={column.title}>
              <FooterColumn {...column} />
            </Column>
          ))}
        </FooterColumnsSection>
      </PageSectionContainerStyled>
      <ModalTeam isOpen={isTeamModalOpen} setIsOpen={setIsTeamModalOpen} />
      <ModalContact isOpen={isContactModalOpen} setIsOpen={setIsContactModalOpen} />
    </div>
  )
}

interface FooterColumnProps {
  className?: string
  title: string
  links: Array<SimpleLinkProps>
}

let FooterColumn: FC<FooterColumnProps> = ({ className, title, links }) => {
  const theme = useTheme()

  return (
    <div className={className}>
      <div className="title">{title}</div>
      <ul>
        {links.map((link) => (
          <li key={link.text}>
            <SimpleLink
              {...link}
              color={theme.textTertiary}
              trackingName={`footer:${link.text?.replaceAll(' ', '-')}-link`}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export const footerQuery = graphql`
  query {
    footer: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/footer.md/" } }) {
      nodes {
        frontmatter {
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
`

export default styled(Footer)`
  padding: var(--spacing-12) 0;
  background-color: ${({ theme }) => theme.bgTertiary};
  color: ${({ theme }) => theme.textPrimary};
  font-size: var(--fontSize-18);
  border-top: 1px solid ${({ theme }) => theme.separator};
`

const LogosSection = styled.div`
  display: flex;
  flex-direction: column;
`

const Separator = styled.div`
  width: 2px;
  height: 5rem;
  background-color: ${({ theme }) => theme.separator};
  margin: auto 0;

  @media ${deviceBreakPoints.mobile} {
    display: none;
  }
`

FooterColumn = styled(FooterColumn)`
  ul {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
    list-style: none;
    padding-left: 0;
  }

  .title {
    font-weight: var(--fontWeight-semiBold);
    margin-bottom: var(--spacing-2);
  }
`

const FooterColumnsSection = styled(Columns)`
  flex-grow: 1;
`

const PageSectionContainerStyled = styled(PageSectionContainer)`
  display: flex;
  gap: var(--spacing-10);
  justify-content: space-between;

  @media ${deviceBreakPoints.mobile} {
    flex-direction: column;
    gap: var(--spacing-10);
    align-items: center;
    text-align: center;
  }
`

const LogoStyled = styled(Logo)`
  max-width: var(--width-82);

  .dark {
    fill: var(--color-logo-black-dark);
  }

  .light {
    fill: var(--color-logo-black-light);
  }
`
