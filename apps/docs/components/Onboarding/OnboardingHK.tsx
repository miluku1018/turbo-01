import { FieldsController } from '@components/Controller'
import { Button, FormBox } from '@components/UI'
import { useAuth } from '@core/context/auth'
import { FieldConfig } from '@core/types'
import { checkboxValidated } from '@core/types/FieldConfig'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useValidatedForm } from '@utils/hooks'
import { useRouter } from 'next/router'

const OnboardingHK = () => {
  const { me } = useAuth()
  const router = useRouter()

  const configs: FieldConfig[] = [
    {
      type: 'CHECKBOX',
      name: 'agreement',
      label: (
        <>
          {me?.__typename === 'CompanyUser' && (
            <>
              I, on behalf of the corporation I am representing, hereby declare that the following
              information provided for client onboarding will be true and accurate to the best of my
              knowledge. I also understand that any willful dishonesty may render for refusal of
              this application. I am fully aware that Aegis Custody Company Limited is authorized to
              supply any or all of such information to the regulators for due diligence purposes.
            </>
          )}

          {me?.__typename === 'IndividualUser' && (
            <>
              I hereby declare that the following information provided for client onboarding will be
              true and accurate to the best of my knowledge. I also understand that any willful
              dishonesty may render for refusal of this application. I am fully aware that Aegis
              Custody Company Limited is authorized to supply any or all of such information to the
              regulators for due diligence purposes.
            </>
          )}
        </>
      ),
      validated: checkboxValidated,
    },
  ]

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useValidatedForm<any>(configs)

  const onSubmit = async () => {
    router.push('/onboarding/information')
  }

  const handleViewChecklist = () => {
    me?.__typename === 'CompanyUser' &&
      window.open(
        'https://drive.google.com/file/d/1O4w56ZUXIo9s3LVx0K7-Q1SS9IaWokiA/view?usp=sharing',
        '_blank',
      )

    me?.__typename === 'IndividualUser' &&
      window.open(
        'https://drive.google.com/file/d/1g6fCsiYZuAzW7zWMAzM3MScbRJSwiQoO/view?usp=sharing',
        '_blank',
      )
  }

  const handleCertificationGuidelines = () => {
    me?.__typename === 'CompanyUser' &&
      window.open(
        'https://drive.google.com/file/d/1PPFBmy57H_XOyDGA6RbL49j97C8TGXEg/view?usp=sharing',
        '_blank',
      )

    me?.__typename === 'IndividualUser' &&
      window.open(
        'https://drive.google.com/file/d/1b21dVLVkcoGF65DHg_04TDx5MTbO8Moa/view?usp=sharing',
        '_blank',
      )
  }

  return (
    <FormBox>
      <Stack gap="10px">
        <Typography variant="h1">Client Onboarding</Typography>
        <Typography variant="subtitle1" color="text.primary">
          Submit required information for onboarding.
        </Typography>
      </Stack>

      <Typography variant="body2" color="text.primary">
        Aegis Custody Company Limited needs to seek and keep a certified copy (if applicable) of the
        required documents in <b>.jpg, .png, .gif or .pdf format with each file size under 10MB</b>.
        Additional supporting documents may be requested via email. All submitted informaiton will
        only be used for onboarding purposes. If you have any questions, kindly reach out to{' '}
        <b>kyc@aegiscustody.com</b>.
      </Typography>

      <Stack direction="row" gap="10px">
        <Button fullWidth variant="outlined" onClick={handleViewChecklist}>
          View Checklist
        </Button>
        <Button fullWidth variant="outlined" onClick={handleCertificationGuidelines}>
          Certification Guidelines
        </Button>
      </Stack>

      <FieldsController configs={configs} form={{ control, errors }} />

      <Button variant="contained" endIcon={<ArrowRightAltIcon />} onClick={handleSubmit(onSubmit)}>
        Start
      </Button>
    </FormBox>
  )
}

export default OnboardingHK
