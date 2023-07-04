import styled from 'styled-components'
import { Link } from 'gatsby'

import { deviceBreakPoints } from '../styles/global-style'

import SimpleLink from './SimpleLink'
import LogoText from '../images/svgs/logo-text.svg'
import GitHubIcon from '../images/svgs/brand-icon-github.svg'
import SocialMediaIcon from './SocialMediaIcon'

interface NavigationMenuProps {
  className?: string
}

const NavigationMenu = ({ className }: NavigationMenuProps) => (
  <div className={className}>
    <div className="nav-start">
      <div className="nav-item">
        <LinkStyled to="/" title="Go to homepage">
          <LogoTextStyled />
        </LinkStyled>
      </div>
    </div>
    <div className="nav-end">
      <NavLink className="nav-item" url="https://explorer.alephium.org/" newTab trackingName="main-nav:explorer-link">
        Explorer
      </NavLink>
      <NavLink
        className="nav-item"
        url="https://github.com/alephium/desktop-wallet/releases/latest/"
        newTab
        trackingName="main-nav:download-wallet-link"
      >
        Get the wallet
      </NavLink>
      <NavLink
        className="nav-item"
        url="https://docs.alephium.org/dapps/getting-started/"
        newTab
        trackingName="main-nav:build-dapp-link"
        isNew
      >
        Build a dApp
      </NavLink>
      <NavLink className="nav-item" url="/#community" trackingName="main-nav:community">
        Community
      </NavLink>

      <GithubButton
        name="Github"
        ImageComponent={GitHubIcon}
        url="https://github.com/alephium"
        trackingName="main-nav:github-link"
      />
    </div>
  </div>
)

const LinkStyled = styled(Link)`
  display: flex;
`

export default styled(NavigationMenu)`
  display: flex;
  justify-content: space-between;
  font-weight: var(--fontWeight-semiBold);

  .nav-end {
    display: flex;
    margin-left: var(--spacing-3);
    gap: var(--spacing-5);
    align-items: center;

    & > :last-child {
      margin-top: 5px; // Github button
    }

    @media ${deviceBreakPoints.smallMobile} {
      flex-direction: column;
      gap: 0;
      align-items: flex-end;

      & > :last-child {
        margin-top: 12px; // Github button
      }
    }
  }

  .nav-item {
    padding: var(--spacing-3) 0;
    display: flex;
    align-items: center;
    line-height: var(--lineHeight-26);
    text-align: right;

    @media ${deviceBreakPoints.smallMobile} {
      padding: var(--spacing-2) 0;
    }
  }
`

const LogoTextStyled = styled(LogoText)`
  height: 1.625rem;
  fill: ${({ theme }) => theme.textPrimary};
  width: auto;
`

const GithubButton = styled(SocialMediaIcon)`
  svg {
    width: 30px;
    height: 30px;
  }
`

const NavLink = styled(SimpleLink)`
  font-size: var(--fontSize-18);
  color: ${({ theme }) => theme.textPrimary};

  &:hover {
    color: ${({ theme }) => theme.textSecondary};
  }
`
