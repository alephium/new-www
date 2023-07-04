import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

export const deviceSizes = {
  smallMobile: 528,
  mobile: 768,
  tablet: 1024,
  desktop: 1920
}

export const deviceBreakPoints = {
  smallMobile: `(max-width: ${deviceSizes.smallMobile}px)`,
  mobile: `(max-width: ${deviceSizes.mobile}px)`,
  tablet: `(max-width: ${deviceSizes.tablet}px)`,
  desktop: `(max-width: ${deviceSizes.desktop}px)`
}

const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    font-size: 15px;

    @media ${deviceBreakPoints.tablet} {
      font-size: 12px;
    }

    --page-width: 72.5rem;
    --page-width-shrinked: 68rem;

    --width-16: 1rem;
    --width-38: 2.375rem;
    --width-82: 5.125rem;
    --width-120: 7.5rem;
    --width-368: 23rem;
    --width-476: 29.75rem;
    --width-488: 30.5rem;
    --width-564: 35.25rem;
    --width-584: 36.5rem;

    /* Spatial system with 8pt linear scale */
    /* Inspiration: https://www.designsystems.com/space-grids-and-layouts/ */
    --spacing-half: 0.25rem; // 4pt
    --spacing-1: 0.5rem;     // 8pt
    --spacing-2: 1rem;       // 16pt
    --spacing-3: 1.5rem;     // 24pt
    --spacing-4: 2rem;       // 32pt
    --spacing-5: 2.5rem;     // 40pt
    --spacing-6: 3rem;       // 48pt
    --spacing-7: 3.5rem;     // 56pt
    --spacing-8: 4rem;       // 64pt
    --spacing-9: 4.5rem;     // 72pt
    --spacing-10: 5rem;      // 80pt
    --spacing-11: 5.5rem;    // 88pt
    --spacing-12: 6rem;      // 96pt
    --spacing-13: 6.5rem;    // 104pt
    --spacing-14: 7rem;      // 112pt
    --spacing-15: 7.5rem;    // 120pt
    --spacing-16: 8rem;      // 128pt
 /* --spacing-17: 8.5rem;    // 136pt
    --spacing-18: 9rem;      // 144pt
    --spacing-19: 9.5rem;    // 152pt */
    --spacing-20: 10rem;     // 160pt
 /* --spacing-21: 10.5rem;   // 168pt
    --spacing-22: 11rem;     // 176pt
    --spacing-23: 11.5rem;   // 184pt */
    --spacing-24: 12rem;     // 192pt
    --spacing-25: 12.5rem;   // 200pt
 /* --spacing-26: 13rem;     // 208pt
    --spacing-27: 13.5rem;   // 216pt */
    --spacing-28: 14rem;     // 224pt
    --spacing-29: 14.5rem;   // 232pt
    --spacing-30: 15rem;     // 240pt
    --spacing-31: 15.5rem;   // 248pt
    --spacing-32: 16rem;     // 256pt
    --spacing-33: 16.5rem;   // 264pt
    --spacing-34: 17rem;     // 272pt
    --spacing-35: 17.5rem;   // 280pt

    --radius: 1rem;
    --radius-small: 0.4rem;
    --radius-full: 9999px;

    --fontFamily-sans: "Inter", system-ui, -apple-system, BlinkMacSystemFont, Arial, sans-serif;
    --fontFamily-serif: "Times New Roman", Times, serif;
    --font-heading: var(--fontFamily-sans);
    --fontWeight-normal: 400;
    --fontWeight-semiBold: 600;
    --fontWeight-bold: 700;

    /* TODO: Maybe check https://www.designsystems.com/typography-guides/ for
    inspiration in defining a typography system */
    --fontSize-14: 0.875rem;
    --fontSize-18: 1.125rem;
    --fontSize-24: 1.5rem;
    --fontSize-28: 1.75rem;
    --fontSize-32: 2.00rem;
    --fontSize-36: 2.25rem;
    --fontSize-50: 3.125rem;
    --fontSize-56: 3.5rem;
    --fontSize-70: 4.375rem;
    --lineHeight-22: 1.375rem;
    --lineHeight-26: 1.625rem;
    --lineHeight-28: 1.75rem;
    --lineHeight-36: 2.25rem;

    --color-white: #fff;
    --color-grey: #f8f8f8;
    --color-grey-100: #e7e7e7;
    --color-grey-200: #c5c5c5;
    --color-grey-250: #979797;
    --color-grey-300: #808080;
    --color-grey-400: #6E6E6E;
    --color-grey-500: #4C4C4C;
    --color-grey-550: #414141;
    --color-grey-600: #343434;
    --color-grey-700: #262626;
    --color-grey-800: #1B1B1B;
    --color-grey-900: #0f0f0f;
    --color-grey-950: #0a0a0a;
    --color-black: #000;
    --color-salmon: #ff5d51;
    --color-blue: #4899ff;
    --color-blue-100: #4D6DE0;;
    --color-blue-200: #1200da;
    --color-brown: #393535;

    --color-logo-yellow-light: rgb(255, 199, 59);
    --color-logo-yellow-dark: rgb(55, 55, 55);
    --color-logo-black-light: rgb(90, 90, 90);
    --color-logo-black-dark: rgb(43, 43, 43);

    --border-primary-dark: 1px solid rgb(255, 255, 255, 0.1);
    --border-primary-light: 1px solid rgb(0, 0, 0, 0.08);
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.bgSecondary};
    color: ${({ theme }) => theme.textPrimary};
    font-family: var(--fontFamily-sans);

    &.ReactModal__Body--open {
      overflow: hidden;
    }
  }

  // Modals
  
  .ReactModal__Overlay {
    transition: opacity 500ms ease-in-out;
    opacity: 0;
  }

  .ReactModal__Overlay {
    transition: opacity 200ms ease-in-out;
    background: rgba(0, 0, 0, 0.15);
    &--after-open {
        opacity: 1;
    }
    &--before-close {
        opacity: 0;
    }
  }
`

export default GlobalStyle
