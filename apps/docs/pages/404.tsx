import { Button, FormBox, Layout, Link, StatusIcon } from '@components/UI'
import CloseIcon from '@mui/icons-material/Close'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { ReactElement } from 'react'

const style = {
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
  },
}

const Error = () => {
  return (
    <FormBox>
      <Stack gap="10px">
        <Typography variant="h1">404 Error</Typography>
        <Typography variant="subtitle1" color="text.primary">
          The page you’re looking for doesn’t exist.
        </Typography>
      </Stack>

      <StatusIcon icon={<CloseIcon color="reject" />} />

      <Box sx={style.wrapper}>
        <Link href="https://www.aegiscustody.com">
          <Button fullWidth variant="outlined">
            Visit Aegis Custody
          </Button>
        </Link>

        <Link href="/">
          <Button fullWidth variant="contained">
            Back To Home
          </Button>
        </Link>
      </Box>
    </FormBox>
  )
}

Error.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Error
