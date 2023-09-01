import { Button, FormBox, Link, OnboardingLayout, StatusIcon } from '@components/UI'
import CheckIcon from '@mui/icons-material/Check'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { ReactElement } from 'react'

const OnboardingCompleted = () => {
  return (
    <FormBox>
      <Stack gap="10px">
        <Typography variant="h1">Successfully Submitted</Typography>
        <Typography variant="subtitle1" color="text.primary">
          Materials are now under review.
        </Typography>
      </Stack>

      <Typography variant="body2" color="text.primary">
        Aegis Custody will contact you via email if additional documents are required. The due
        diligence process takes 3-5 business days, and you will be notified via email once your
        account is approved.
      </Typography>

      <StatusIcon icon={<CheckIcon color="success" />} />

      <Link href="https://www.aegiscustody.com">
        <Button variant="contained">Visit Aegis Custody</Button>
      </Link>
    </FormBox>
  )
}

OnboardingCompleted.getLayout = (page: ReactElement) => {
  return <OnboardingLayout>{page}</OnboardingLayout>
}

export default OnboardingCompleted
