import { createTheme } from '@mui/material/styles'

const paletteTheme = createTheme({
  palette: {
    primary: {
      main: '#4BADD8',
    },
    secondary: {
      main: '#005E85',
    },
    success: {
      main: '#31D0AA',
    },
    error: {
      main: '#FF0000',
    },
    text: {
      primary: '#414141',
      secondary: '#A1A1A1',
    },
    tertiary: {
      main: '#9DD0F0',
    },
    stroke: {
      main: '#DCDEDF',
    },
    reject: {
      main: '#E1125E',
    },
    menu: {
      main: '#818181',
    },
    bg: {
      main: '#FAFCFE',
    },
    background: {
      default: '#FAFCFE',
    },
  },
})

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary']
    stroke: Palette['primary']
    reject: Palette['primary']
    menu: Palette['primary']
    bg: Palette['primary']
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions['primary']
    stroke?: PaletteOptions['primary']
    reject?: PaletteOptions['primary']
    menu?: PaletteOptions['primary']
    bg?: PaletteOptions['primary']
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true
    stroke: true
    reject: true
    menu: true
    bg: true
  }
}

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    tertiary: true
    stroke: true
    reject: true
    menu: true
    bg: true
  }
}

export default paletteTheme
