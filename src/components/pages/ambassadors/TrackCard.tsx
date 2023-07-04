import { ReactNode } from 'react'
import styled, { useTheme } from 'styled-components'
import Card from '../../Card'

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
      {illustration}
      <TextContent>
        <h3>{title}</h3>
        <p>{description}</p>
      </TextContent>
    </TrackCardStyled>
  )
}

export default TrackCard

const TrackCardStyled = styled(Card)`
  padding: var(--spacing-2) var(--spacing-4);
  border-color: ${({ theme }) => theme.textTertiary};
`

const TextContent = styled.div`
  border-top: 1px solid ${({ theme }) => theme.borderPrimary};
`
