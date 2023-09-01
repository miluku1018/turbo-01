import { Button, FormBox, Link, StatusIcon } from '@components/UI'
import { useAuth } from '@core/context/auth'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh'
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

const OnboardingPending = () => {
  const { logOut } = useAuth()

  return (
    <FormBox>
      <Stack gap="10px">
        <Typography variant="h1">Pending Approval</Typography>
        <Typography variant="subtitle1" color="text.primary">
          Your account is currently under review.
        </Typography>
      </Stack>

      <Typography variant="body2" color="text.primary">
        You will be contacted via email if additional documents are required. The due diligence
        process takes 3-5 business days, and you will be notified via email once your account is
        approved. Please contact <b>kyc@aegiscustody.com</b> for further assistance regarding
        progress of client onboarding.
      </Typography>

      <StatusIcon icon={<PriorityHighIcon color="reject" />} />

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

export default OnboardingPending
