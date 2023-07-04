import styled from 'styled-components'
import SectionTextHeader from '../../SectionTextHeader'
import { deviceBreakPoints } from '../../../styles/global-style'

export default styled(SectionTextHeader)`
  backdrop-filter: none;
  background-color: transparent !important;
  padding: 0;

  @media ${deviceBreakPoints.tablet} {
    padding: 0 var(--spacing-2) 0 0;
    margin-bottom: 0;
  }
`
