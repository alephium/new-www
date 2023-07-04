import styled from 'styled-components'
import PageSectionContainer from '../../PageSectionContainer'
import { deviceBreakPoints } from '../../../styles/global-style'

export default styled(PageSectionContainer)`
  padding: var(--spacing-10);

  @media ${deviceBreakPoints.tablet} {
    padding: var(--spacing-12) var(--spacing-4);
  }
`
