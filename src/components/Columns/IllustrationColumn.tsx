import { ReactNode } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../../styles/global-style'

interface IllustrationColumnProps {
  children: ReactNode
  className?: string
}

const IllustrationColumn = ({ className, children }: IllustrationColumnProps) => (
  <div className={className}>{children}</div>
)

export default styled(IllustrationColumn)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 350px;

  img {
    width: 70%;
    height: auto;

    @media ${deviceBreakPoints.tablet} {
      width: 100%;
      max-width: var(--width-368);
      object-fit: contain;
    }
  }

  @media ${deviceBreakPoints.tablet} {
    min-height: 200px;
  }
`
