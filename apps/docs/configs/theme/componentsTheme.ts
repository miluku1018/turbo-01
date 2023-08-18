import { createTheme } from '@mui/material/styles'
import paletteTheme from './paletteTheme'

const { palette } = paletteTheme as any

const breakpoints = createTheme().breakpoints

const componentsTheme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          width: 'fit-content',
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            cursor: 'not-allowed',
            pointerEvents: 'auto',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: palette.text.primary,
          '&:hover': {
            color: palette.primary.main,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '& .MuiInputLabel-asterisk': {
            color: 'red',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '.Mui-disabled': {
            cursor: 'not-allowed',
          },
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '60px',
          textAlign: 'center',
          [breakpoints.down('md')]: {
            padding: '30px',
          },
        },
      },
    },
    MuiMobileStepper: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          '& .MuiTablePagination-selectLabel': {
            fontSize: '14px',
          },
          '& .MuiTablePagination-displayedRows': {
            fontSize: '14px',
          },
        },
      },
    },
  },
})

export default componentsTheme
