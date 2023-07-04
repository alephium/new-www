import { colord } from 'colord'
import { motion } from 'framer-motion'
import { ReactNode, useRef, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import useElementDistanceToTop from '../hooks/useElementDistanceToTop'
import { deviceBreakPoints } from '../styles/global-style'
import { toId } from '../utils/misc'

import TextSnippet from './TextSnippet'

interface SectionTextHeaderProps {
  className?: string
  id?: string
  title: string
  subtitle: string
  bigSubtitle?: boolean
  bigText?: boolean
  centered?: boolean
  sticky?: boolean
  bottomBorder?: boolean
  children?: ReactNode
}

const SectionTextHeader = ({
  className,
  id,
  title,
  subtitle,
  bigSubtitle,
  bigText,
  sticky,
  centered,
  bottomBorder = true,
  children
}: SectionTextHeaderProps) => {
  const headingElementRef = useRef(null)
  const headingDistanceFromTopOfScreen = useElementDistanceToTop(headingElementRef)
  const [headingReachedTopOfScreen, setHeadingReachedTopOfScreen] = useState(false)
  const isHeadingDistanceFromTopOfScreenInitialized = headingDistanceFromTopOfScreen !== undefined
  const theme = useTheme()

  if (sticky && isHeadingDistanceFromTopOfScreenInitialized) {
    if (headingDistanceFromTopOfScreen <= 5 && !headingReachedTopOfScreen) {
      setHeadingReachedTopOfScreen(true)
    } else if (headingDistanceFromTopOfScreen > 5 && headingReachedTopOfScreen) {
      setHeadingReachedTopOfScreen(false)
    }
  }

  const borderBottom = bottomBorder && headingReachedTopOfScreen ? `1px solid rgba(255, 255, 255, 0.1)` : undefined
  const backgroundColor = headingReachedTopOfScreen ? colord(theme.bgTertiary).alpha(0.2).toHex() : 'transparent'

  return (
    <>
      <div ref={headingElementRef} id={toId(id || title)} />
      <motion.header className={className} animate={{ borderBottom, backgroundColor }}>
        <StyledTextSnippet
          title={title}
          subtitle={subtitle}
          anchor={id || title}
          bigTitle
          bigSubtitle={bigSubtitle}
          bigText={bigText}
          animate={{ scale: headingReachedTopOfScreen ? 0.7 : 1 }}
          transition={{ type: 'spring', stiffness: 1000, damping: 50 }}
          style={{ transformOrigin: centered ? 'center' : 'left' }}
        >
          {children}
        </StyledTextSnippet>
      </motion.header>
    </>
  )
}

const StyledTextSnippet = styled(TextSnippet)`
  flex: 1;
  max-width: var(--page-width);
`

export default styled(SectionTextHeader)`
  position: ${({ sticky }) => (sticky ? 'sticky' : 'relative')};
  top: 0;
  right: 0;
  left: 0;
  text-align: ${(props) => (props.centered ? 'center' : 'left')};
  z-index: 2000;
  display: flex;
  justify-content: center;
  padding: 0 var(--spacing-4);
  border-bottom: 1px solid transparent;

  backdrop-filter: blur(40px);

  @media ${deviceBreakPoints.tablet} {
    margin-bottom: var(--spacing-10);
  }

  h2 {
    color: ${({ theme }) => theme.textPrimary};
    font-weight: var(--fontWeight-semiBold);
    margin: 0;

    & + div {
      margin-top: var(--spacing-2);
      color: ${({ theme }) => theme.textSecondary};
    }
  }

  p {
    font-size: var(--fontSize-18);
    margin-top: var(--spacing-5);
    margin-bottom: 0;
    color: ${({ theme }) => theme.textSecondary};
    max-width: var(--width-564);
  }
`
