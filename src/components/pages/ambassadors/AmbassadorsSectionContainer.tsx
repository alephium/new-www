import styled from 'styled-components'

export default styled.section<{ doubleMargin?: boolean; noVerticalMargin?: boolean }>`
  width: auto;
  margin: ${({ doubleMargin, noVerticalMargin }) =>
      noVerticalMargin ? '0' : doubleMargin ? 'var(--spacing-6)' : 'var(--spacing-4)'}
    10vw;

  @media (min-width: 1600px) {
    width: 100%;
    margin: ${({ doubleMargin, noVerticalMargin }) =>
        noVerticalMargin ? '0' : doubleMargin ? 'var(--spacing-10)' : 'var(--spacing-6)'}
      auto;
    max-width: 1200px;
  }
`
