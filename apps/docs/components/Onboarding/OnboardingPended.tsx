import { Button, FormBox, Link, StatusIcon } from '@components/UI'
import { useAuth } from '@core/context/auth'
import CloseIcon from '@mui/icons-material/Close'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const style = {
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
  },
}

const OnboardingPended = () => {
  const { logOut } = useAuth()

  return (
    <FormBox>
      <Stack gap="10px">
        <Typography variant="h1">Access Denied</Typography>
        <Typography variant="subtitle1" color="text.primary">
          Your account did not pass KYB/KYC screening.
        </Typography>
      </Stack>

      <Typography variant="body2" color="text.primary">
        Unfortunately, your access is denied because your account did not pass our KYB/KYC screening
        upon sign-up. You should have received a notification via email regarding the KYB/KYC
        reslut. Kindly reach out to <b>kyc@aegiscustody.com</b> if you think the result is mistaken
        and wish to be re-assessed.
      </Typography>

      <StatusIcon icon={<CloseIcon color="reject" />} />

      <Box sx={style.wrapper}>
        <Link href="https://www.aegiscustody.com">
          <Button fullWidth variant="outlined">
            Visit Aegis Custody
          </Button>
        </Link>

        <Button fullWidth variant="contained" onClick={logOut}>
          Back To Home
        </Button>
      </Box>
    </FormBox>
  )
}

export default OnboardingPended
