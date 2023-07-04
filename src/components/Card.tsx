import { HTMLMotionProps, motion } from 'framer-motion'
import styled from 'styled-components'

interface CardProps extends HTMLMotionProps<'div'> {
  className?: string
  borderColor?: string
  thickBorders?: boolean
  bgColor?: string
  shadow?: boolean
  children: React.ReactNode
}

const Card = ({ className, children, ...props }: CardProps) => {
  // Removing props that should not go to the motion.div
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { borderColor, thickBorders, bgColor, shadow, ...remainingProps } = props

  return (
    <motion.div className={className} {...remainingProps}>
      {children}
    </motion.div>
  )
}

export default styled(Card)`
  padding: 41px 30px 25px 34px;
  border-radius: 12px;
  border: ${(props) => (props.thickBorders && '2px') || '1px'} solid ${(props) => props.borderColor || 'transparent'};
  background-color: ${(props) => props.bgColor || 'transparent'};
  background-clip: padding-box;
  text-decoration: none;
  ${({ shadow }) => shadow && 'box-shadow: 0px 22px 30px rgba(0, 0, 0, 0.47);'}

  transition: all 0.1s ease-out;
`
