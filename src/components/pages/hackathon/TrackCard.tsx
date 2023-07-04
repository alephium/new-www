import { ReactNode } from 'react'
import styled, { useTheme } from 'styled-components'
import Card from '../../Card'
import { Paragraph } from './Texts'

interface TrackCardProp {
  illustration: ReactNode
  title: string
  description: string
  className?: string
}

const TrackCard = ({ illustration, title, description, className }: TrackCardProp) => {
  const theme = useTheme()
  return (
    <TrackCardStyled className={className} borderColor={theme.bgPrimary} thickBorders bgColor={theme.bgSecondary}>
      <Illustration>{illustration}</Illustration>
      <TextContent>
        <h3>{title}</h3>
        <Paragraph>{description}</Paragraph>
      </TextContent>
    </TrackCardStyled>
  )
}

export default TrackCard

const TrackCardStyled = styled(Card)`
  padding: 0;
  border-color: ${({ theme }) => theme.borderPrimary};
  background-color: ${({ theme }) => theme.bgPrimary};
  border-radius: 0;

  h3 {
    font-weight: 400;
    font-size: 23px;
  }
`

const Illustration = styled.div`
  background-color: ${({ theme }) => theme.bgSecondary};
`

const TextContent = styled.div`
  padding: var(--spacing-2) var(--spacing-4);
  border-top: 1px solid ${({ theme }) => theme.borderPrimary};
`
