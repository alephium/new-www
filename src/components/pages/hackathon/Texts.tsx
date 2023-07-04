import styled, { css } from 'styled-components'

export const Paragraph = styled.p`
  opacity: 0.8;
`

export const H3 = styled.h3<{ divider?: boolean }>`
  margin-top: var(--spacing-6);
  font-size: 28px !important;
  font-weight: 400;

  ${({ divider }) =>
    divider &&
    css`
      font-size: 32px !important;
      padding-bottom: var(--spacing-2);
      border-bottom: 1px solid ${({ theme }) => theme.textTertiary};
    `}
`
