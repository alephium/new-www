import { DefaultTheme } from 'styled-components'

export type ThemeType = 'light' | 'dark' | 'hackathon' | 'ambassadors'

export const darkTheme: DefaultTheme = {
  name: 'dark',

  textPrimary: 'var(--color-white)',
  textPrimaryVariation: 'var(--color-grey-100)',
  textSecondary: 'var(--color-grey-200)',
  textTertiary: 'var(--color-grey-300)',

  bgPrimary: 'var(--color-grey-800)',
  bgSecondary: 'var(--color-grey-900)',
  bgTertiary: 'var(--color-grey-950)',
  bgSurface: 'var(--color-grey-700)',

  borderPrimary: 'var(--color-grey-700)',

  link: 'var(--color-grey-100)',
  linkAlt: 'var(--color-white)',

  separator: 'var(--color-grey-800)',

  highlight: '#22eb5e',
  highlightComplementary: '#00dbff'
}

export const lightTheme: DefaultTheme = {
  name: 'light',

  textPrimary: 'var(--color-black)',
  textPrimaryVariation: 'var(--color-grey-600)',
  textSecondary: 'var(--color-grey-500)',
  textTertiary: 'var(--color-grey-400)',

  bgPrimary: 'var(--color-white)',
  bgSecondary: 'var(--color-grey)',
  bgTertiary: 'var(--color-grey)',
  bgSurface: 'var(--color-white)',

  borderPrimary: 'var(--border-primary-light)',

  link: 'var(--color-blue)',
  linkAlt: 'var(--color-black)',

  separator: 'var(--color-grey-100)',

  highlight: '#22eb5e',
  highlightComplementary: '#00dbff'
}

export const hackathonTheme: DefaultTheme = {
  name: 'hackathon',

  textPrimary: 'var(--color-white)',
  textPrimaryVariation: 'var(--color-grey-100)',
  textSecondary: 'var(--color-grey-200)',
  textTertiary: 'var(--color-grey-300)',

  bgPrimary: 'var(--color-grey-700)',
  bgSecondary: 'var(--color-grey-800)',
  bgTertiary: 'var(--color-grey-900)',
  bgSurface: 'var(--color-grey-700)',

  borderPrimary: 'var(--color-grey-700)',

  link: 'var(--color-grey-100)',
  linkAlt: 'var(--color-white)',

  separator: 'var(--color-grey-800)',

  highlight: '#0ddc33',
  highlightComplementary: '#00dbff'
}

export const ambassadorsTheme: DefaultTheme = {
  name: 'ambassadors',

  textPrimary: 'var(--color-black)',
  textPrimaryVariation: 'var(--color-grey-600)',
  textSecondary: 'var(--color-grey-500)',
  textTertiary: 'var(--color-grey-400)',

  bgPrimary: 'var(--color-white)',
  bgSecondary: 'var(--color-grey)',
  bgTertiary: 'var(--color-grey-100)',
  bgSurface: 'var(--color-white)',

  borderPrimary: 'var(--color-grey-100)',

  link: '#e7902c',
  linkAlt: '#00aeff',

  separator: 'var(--color-grey-100)',

  highlight: '#e7902c',
  highlightComplementary: '#00aeff'
}
