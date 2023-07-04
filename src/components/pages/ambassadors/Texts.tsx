import styled, { css } from 'styled-components'

export const Paragraph = styled.p`
  opacity: 0.8;
  margin-top: 0;
`

export const H2 = styled.h2<{ divider?: boolean; verticalMargin?: boolean; matchSectionHorizontalMargin?: boolean }>`
  font-size: var(--fontSize-36);
  font-weight: 400;
  margin-top: 0;
  margin-bottom: var(--spacing-2);

  ${({ verticalMargin: margin }) =>
    margin &&
    css`
      margin-bottom: var(--spacing-6);
      margin-top: var(--spacing-12);
    `};

  ${({ matchSectionHorizontalMargin }) =>
    matchSectionHorizontalMargin &&
    css`
      width: auto;
      margin-right: 10vw;
      margin-left: 10vw;

      @media (min-width: 1600px) {
        width: 100%;
        margin-right: auto;
        margin-left: auto;
        max-width: 1400px;
      }
    `}

  ${({ divider }) =>
    divider &&
    css`
      padding-bottom: var(--spacing-2);
      border-bottom: 1px solid ${({ theme }) => theme.textTertiary};
    `}
`

export const H3 = styled.h3<{ divider?: boolean; secondary?: boolean }>`
  font-size: 23px;
  margin-top: 0;
  font-weight: 300;

  ${({ divider }) =>
    divider &&
    css`
      padding-bottom: var(--spacing-2);
      border-bottom: 1px solid ${({ theme }) => theme.textTertiary};
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      color: ${({ theme }) => theme.textSecondary};
    `}
`
