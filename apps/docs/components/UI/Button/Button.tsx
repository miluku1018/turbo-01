import LoadingButton from '@mui/lab/LoadingButton'
import { styled } from '@mui/material/styles'

const Button = styled(LoadingButton)(({ theme }) => ({
  minWidth: 'auto',
  minHeight: '40px',
  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none',
  },
  '&.Mui-disabled': {
    cursor: 'not-allowed',
    pointerEvents: 'auto',
  },
  '&.MuiButton-text': {
    minWidth: 'fit-content',
    minHeight: 'fit-content',
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  '&.MuiButton-containedPrimary': {
    color: 'white',
    '&.MuiLoadingButton-loading': {
      color: 'transparent',
    },
  },
  '&.MuiButton-containedSuccess': {
    color: 'white',
    '&.MuiLoadingButton-loading': {
      color: 'transparent',
    },
  },
  '&.MuiButton-outlinedSecondary': {
    border: `1px solid ${theme.palette.secondary.main}`,
    '&.MuiLoadingButton-loading': {
      border: '1px solid rgba(0, 0, 0, 0.12)',
    },
  },
}))

export default Button
