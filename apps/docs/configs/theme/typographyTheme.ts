import { createTheme } from '@mui/material/styles'
import paletteTheme from './paletteTheme'

const breakpoints = createTheme().breakpoints

const typographyTheme = createTheme({
  typography: {
    h1: {
      color: 'black',
      fontSize: '32px',
      fontWeight: 'bold',
      [breakpoints.down('md')]: {
        fontSize: '24px',
      },
    },
    title: {
      color: 'black',
      fontSize: '32px',
      fontWeight: 'bold',
      [breakpoints.down('md')]: {
        fontSize: '24px',
      },
    },
    subtitle1: {
      fontSize: '16px',
      fontWeight: 'bold',
      [breakpoints.down('md')]: {
        fontSize: '14px',
      },
    },
    subtitle2: {
      fontSize: '14px',
      fontWeight: 700,
    },
    body1: {
      fontSize: '14px',
    },
    body2: {
      fontSize: '16px',
      textAlign: 'justify',
    },
    button: {
      fontWeight: 'bold',
      textTransform: 'none',
    },
    note: {
      fontSize: '10px',
      lineHeight: 1.4,
    },
    hint: {
      display: 'block',
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: 1.5,
      textAlign: 'justify',
    },
    link: {
      fontWeight: 'bold',
      color: paletteTheme.palette.primary.main,
    },
    menuType: {
      fontSize: '10px',
      fontWeight: 700,
      letterSpacing: '0.1rem',
    },
    menuItem: {
      fontSize: '14px',
      fontWeight: 'bold',
      lineHeight: '1.5',
    },
  },
})

declare module '@mui/material/styles' {
  interface TypographyVariants {
    title: React.CSSProperties
    note: React.CSSProperties
    hint: React.CSSProperties
    link: React.CSSProperties
    menuType: React.CSSProperties
    menuItem: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    title?: React.CSSProperties
    note?: React.CSSProperties
    hint?: React.CSSProperties
    link?: React.CSSProperties
    menuType?: React.CSSProperties
    menuItem?: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true
    note: true
    hint: true
    link: true
    menuType: true
    menuItem: true
  }
}

export default typographyTheme
