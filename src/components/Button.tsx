import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

import Arrow from '../images/svgs/arrow-right.svg'

interface ButtonProps {
  onClick?: () => void
  url?: string
  newTab?: boolean
  className?: string
  trackingName?: string
  children?: ReactNode
}

const Button = ({ onClick, className, children, url, newTab, trackingName }: ButtonProps) =>
  url ? (
    <a
      href={url}
      className={`${className} button`}
      target={(newTab && '_blank') || undefined}
      rel={(newTab && 'noopener') || undefined}
      data-goatcounter-click={trackingName}
    >
      {children}
      <Arrow className="arrow" />
    </a>
  ) : (
    <button className={`${className} button`} onClick={onClick} data-goatcounter-click={trackingName}>
      {children}
      <Arrow className="arrow" />
    </button>
  )

export default styled(Button)`
  background-color: ${({ theme }) => theme.textPrimary};
  color: var(--color-white);
  padding: var(--spacing-2) var(--spacing-3);
  border: 0 solid;
  text-decoration: none;
  display: inline-flex;
  width: fit-content;

  /* The following rules are the same as in the ArrowedLink, maybe extract? */
  align-items: center;
  font-weight: var(--fontWeight-semiBold);
  font-size: var(--fontSize-18);
  transition: all 0.1s ease-out;

  .arrow {
    width: 11px;
    margin-left: var(--spacing-1);
    fill: var(--color-white);
    transition: all 0.1s ease-out;

    ${(props) =>
      props.newTab &&
      css`
        transform: rotate(-45deg);
      `}
  }

  &:hover {
    cursor: pointer;
    .arrow {
      transform: translateX(5px);
      fill: ${({ theme }) => theme.highlight};
    }
  }
`
