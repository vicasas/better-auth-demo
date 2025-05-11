'use client'

import { createTheme } from '@mui/material/styles'

const defaultTheme = createTheme()

const systemFont = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
]

const theme = createTheme({
  typography: {
    fontFamily: ['var(--font-geist-sans)', ...systemFont].join(', '),
    h1: {
      fontSize: defaultTheme.typography.pxToRem(32),
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontSize: defaultTheme.typography.pxToRem(28),
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontSize: defaultTheme.typography.pxToRem(24),
      letterSpacing: '0em',
    },
    h4: {
      fontSize: defaultTheme.typography.pxToRem(20),
      letterSpacing: '0.00735em',
    },
    h5: {
      fontSize: defaultTheme.typography.pxToRem(18),
      letterSpacing: '0em',
    },
    h6: {
      fontSize: defaultTheme.typography.pxToRem(16),
      letterSpacing: '0.0075em',
    },
  },
})

export default theme
