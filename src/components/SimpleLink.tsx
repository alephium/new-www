import { MouseEvent, ReactNode } from 'react'
import styled from 'styled-components'

export interface SimpleLinkProps {
  className?: string
  url?: string | undefined
  text?: string
  newTab?: boolean
  isNew?: boolean
  color?: string
  openModal?: (x: boolean) => void
  trackingName?: string
  children?: ReactNode
}

const SimpleLink = ({ className, children, url, newTab, isNew, text, openModal, trackingName }: SimpleLinkProps) => {
  const handleOnClick = (event: MouseEvent) => {
    if (openModal) {
      event.preventDefault()
      openModal(true)
    }
  }

  return openModal ? (
    <span className={className} onClick={handleOnClick} data-goatcounter-click={trackingName}>
      {children || text}
      {isNew && <IsNewBadge>New</IsNewBadge>}
    </span>
  ) : (
    <a
      className={className}
      href={url}
      target={(newTab && '_blank') || undefined}
      rel={(newTab && 'noopener noreferrer') || undefined}
      data-goatcounter-click={trackingName}
    >
      {children || text}
      {isNew && <IsNewBadge>New</IsNewBadge>}
    </a>
  )
}

export default styled(SimpleLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme, color }) => (color ? color : theme.link)};

  svg {
    fill: ${({ theme, color }) => (color ? color : theme.link)};
  }

  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }
`

const IsNewBadge = styled.span`
  padding: 3px 4px;
  max-height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.textPrimary};
  color: ${({ theme }) => theme.bgPrimary};
  margin-left: 7px;
  box-sizing: border-box;
`
