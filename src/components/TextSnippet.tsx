import { HTMLMotionProps, motion } from 'framer-motion'
import { Link } from 'gatsby'
import { createElement, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { RiLink } from 'react-icons/ri'

import { deviceBreakPoints } from '../styles/global-style'
import { toId } from '../utils/misc'

interface TextSnippetProps extends HTMLMotionProps<'div'> {
  title?: string
  titleHierarchy?: 'h2' | 'h3'
  bigTitle?: boolean
  subtitle?: string
  bigSubtitle?: boolean
  smallSubtitle?: boolean
  bigText?: boolean
  className?: string
  narrowHeaderMobile?: boolean
  anchor?: string
  children?: ReactNode
}

const TextSnippet = ({
  className,
  title,
  titleHierarchy = 'h2',
  subtitle,
  anchor,
  children,
  ...props
}: TextSnippetProps) => {
  // Removing props that should not go to the motion.div
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { bigSubtitle, smallSubtitle, bigText, narrowHeaderMobile, bigTitle, ...remainingProps } = props

  const TitleComponent = ({ children }: { children: ReactNode }) =>
    titleHierarchy === 'h2' ? <h2>{children}</h2> : <h3>{children}</h3>

  return (
    <motion.div className={className} {...remainingProps}>
      {title && (
        <>
          <TitleComponent>
            {title}
            {anchor && (
              <AnchorIcon to={`#${toId(anchor)}`}>
                <RiLink size={25} color="white" />
              </AnchorIcon>
            )}
          </TitleComponent>
        </>
      )}
      {subtitle && <div className="text-subtitle">{subtitle}</div>}
      {children && <div className="text-content">{children}</div>}
    </motion.div>
  )
}

export default styled(TextSnippet)`
  > h2,
  > h3 {
    font-size: ${({ bigTitle }) => (bigTitle ? 'var(--fontSize-56)' : 'var(--fontSize-28)')};
    line-height: ${({ bigTitle }) => (bigTitle ? 'var(--fontSize-56)' : 'var(--lineHeight-36)')};
    margin: 0;
  }

  > h3 + .text-subtitle {
    padding-top: 12px;
  }

  .text-subtitle {
    font-size: ${({ smallSubtitle, bigSubtitle }) =>
      smallSubtitle ? 'var(--fontSize-14)' : bigSubtitle ? 'var(--fontSize-24)' : 'var(--fontSize-18)'};
    line-height: ${({ smallSubtitle }) => (smallSubtitle ? 'var(--lineHeight-22)' : 'var(--lineHeight-28)')};
    color: var(--color-grey-200);
  }

  .text-content {
    font-size: ${({ bigText }) => (bigText ? 'var(--fontSize-18)' : 'inherit')};
    line-height: ${({ bigText }) => (bigText ? 'var(--lineHeight-28)' : 'var(--lineHeight-22)')};
    font-weight: var(--fontWeight-normal);
    color: var(--color-grey-200);
  }

  @media ${deviceBreakPoints.tablet} {
    h2,
    h3,
    .text-subtitle {
      ${({ narrowHeaderMobile }) =>
        narrowHeaderMobile &&
        css`
          width: 65%;
        `}
    }
  }
`

const AnchorIcon = styled(Link)`
  position: absolute;
  opacity: 0.4;
  cursor: pointer;
  margin-left: 15px;

  &:hover {
    opacity: 1;
  }
`
