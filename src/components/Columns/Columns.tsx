import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { motion, HTMLMotionProps, Variants } from 'framer-motion'

import { deviceBreakPoints } from '../../styles/global-style'

interface ColumnsProps {
  className?: string
  gap?: string
  reverse?: boolean
  animateEntry?: boolean
  children: ReactNode
}

const Columns: FC<ColumnsProps> = ({ className, animateEntry = false, children, ...props }, ref) => {
  // Removing props that should not go to the motion.div
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { gap, reverse, ...remainingProps } = props

  return (
    <motion.div ref={() => ref} className={className} {...remainingProps} {...getAnimationProps(animateEntry)}>
      {children}
    </motion.div>
  )
}

const columnsVariants: Variants = {
  hidden: {
    opacity: 0,
    y: '5%'
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      delay: 0.15
    }
  }
}

const getAnimationProps = (animateEntry: boolean): Omit<HTMLMotionProps<'div'>, 'animateEntry'> =>
  animateEntry
    ? {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true },
        variants: columnsVariants
      }
    : {}

export default styled(Columns)`
  display: flex;
  gap: ${({ gap }) => gap || '0'};

  @media ${deviceBreakPoints.tablet} {
    flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};
  }
`
