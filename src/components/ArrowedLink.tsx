import { ElementType, ReactNode } from 'react'
import styled, { css, useTheme } from 'styled-components'

import SimpleLink from './SimpleLink'

import Arrow from '../images/svgs/arrow-right.svg'

export interface ArrowedLinkProps {
  className?: string
  IconComponent?: ElementType
  url?: string
  newTab?: boolean
  openModal?: (x: boolean) => void
  altColor?: boolean
  colorArrowOnly?: boolean
  onlyText?: boolean
  emoji?: string
  trackingName?: string
  children?: ReactNode
}

const ArrowedLink = ({
  className,
  children,
  IconComponent,
  url,
  newTab,
  openModal,
  altColor = false,
  colorArrowOnly = false,
  emoji,
  trackingName
}: ArrowedLinkProps) => {
  const theme = useTheme()
  const color = altColor ? theme.linkAlt : theme.link

  return (
    <SimpleLink
      className={className}
      url={url}
      newTab={newTab}
      openModal={openModal}
      color={color}
      trackingName={trackingName}
    >
      {IconComponent && <IconComponent className="icon" />}
      {children}
      {(emoji && <span className="arrow emoji">{emoji}</span>) || <Arrow className="arrow" />}
    </SimpleLink>
  )
}

export default styled(ArrowedLink)`
  display: flex;
  align-items: center;
  font-weight: var(--fontWeight-semiBold);
  font-size: var(--fontSize-18);
  color: ${({ theme, colorArrowOnly }) => (colorArrowOnly ? theme.textPrimary : theme.link)} !important;

  .icon {
    width: 1rem;
    margin-right: var(--spacing-1);
    fill: ${({ theme, altColor }) => (altColor ? theme.linkAlt : theme.link)};
  }

  .arrow {
    width: 11px;
    margin-left: var(--spacing-1);
    fill: ${({ theme, altColor }) => (altColor ? theme.linkAlt : theme.link)};
    ${({ newTab, emoji }) =>
      newTab &&
      !emoji &&
      css`
        transform: rotate(-45deg);
      `}
    transition: all 0.1s ease-out;
  }

  &:hover {
    .arrow {
      ${(props) =>
        !props.emoji
          ? css`
              transform: translateX(var(--spacing-half)) ${props.newTab && 'rotate(-45deg)'};
            `
          : css`
              transform: translateY(calc(var(--spacing-half) * -1));
            `};
    }

    .emoji {
    }
  }
`
