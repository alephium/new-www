import { FC, ReactNode, PointerEvent } from 'react'
import styled, { css, useTheme } from 'styled-components'

import Card from './Card'
import CardTextTeaser from './CardTextTeaser'
import SimpleLink, { SimpleLinkProps } from './SimpleLink'

import { deviceBreakPoints } from '../styles/global-style'
import { motion, useMotionValue, useTransform, Variants } from 'framer-motion'
import CursorHighlight from './CursorHighlight'
import { getPointerRelativePositionInElement } from '../utils/pointer'

interface CardEngagementProps {
  title: string
  link?: SimpleLinkProps
  image: { publicURL: string }
  children: ReactNode
  className?: string
  trackingName?: string
  variants?: Variants
}

const CardEngagement: FC<CardEngagementProps> = ({
  title,
  link,
  image,
  children,
  className,
  trackingName,
  ...props
}) => {
  const theme = useTheme()

  const angle = 1

  const y = useMotionValue(0.5)
  const x = useMotionValue(0.5)

  const rotateY = useTransform(x, [0, 1], [-angle, angle], {
    clamp: true
  })
  const rotateX = useTransform(y, [0, 1], [angle, -angle], {
    clamp: true
  })

  const onMove = (e: PointerEvent) => {
    const { x: positionX, y: positionY } = getPointerRelativePositionInElement(e)

    x.set(positionX, true)
    y.set(positionY, true)
  }

  return (
    <MotionContainer {...props} className={className}>
      <SimpleLinkStyled {...link} trackingName={trackingName}>
        <CardContainer
          className={className}
          borderColor={theme.bgPrimary}
          thickBorders
          bgColor={theme.bgTertiary}
          shadow
          whileHover={{ translateZ: 5, zIndex: 10 }}
          onPointerMove={onMove}
          onPointerLeave={() => {
            x.set(0.5, true)
            y.set(0.5, true)
          }}
          style={{
            rotateY,
            rotateX
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="card-contents">
            <Iconic src={image.publicURL} alt={title} />
            <CardTextTeaser title={title}>{children}</CardTextTeaser>
          </div>
          <CursorHighlight />
        </CardContainer>
      </SimpleLinkStyled>
    </MotionContainer>
  )
}

const MotionContainer = styled(motion.div)`
  display: flex;
  position: relative;
`

const SimpleLinkStyled = styled(SimpleLink)`
  display: flex;
  flex: 1;
  perspective: 200px;

  ${({ url }) =>
    !url &&
    css`
      cursor: default !important;
    `}
`

const CardContainer = styled(Card)`
  min-height: 11rem;
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
  border: var(--border-primary-dark);
  background-color: ${({ theme }) => theme.bgPrimary};

  @media ${deviceBreakPoints.tablet} {
    & + & {
      margin-top: var(--spacing-4);
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.bgPrimary};
    transform: translateZ(10px);
    box-shadow: 0 50px 50px rgba(0, 0, 0, 0.4);
    z-index: 1;

    h3 {
      ::after {
        content: '  →';
      }
    }
  }

  .card-contents {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
  }
`

const Iconic = styled.img`
  width: 82px;
  height: 82px;
  padding-bottom: 30px;
`

export default CardEngagement
