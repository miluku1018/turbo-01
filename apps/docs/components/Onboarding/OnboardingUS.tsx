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

const OnboardingUS = () => {
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
              this application. I am fully aware that Aegis Trust Company is authorized to supply
              any or all of such information to the regulators for due diligence purposes.
            </>
          )}

          {me?.__typename === 'IndividualUser' && (
            <>
              I hereby declare that the following information provided for client onboarding will be
              true and accurate to the best of my knowledge. I also understand that any willful
              dishonesty may render for refusal of this application. I am fully aware that Aegis
              Trust Company is authorized to supply any or all of such information to the regulators
              for due diligence purposes.
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
        'https://drive.google.com/file/d/1lm6byg3eLAWC8Mr6arazFTpAFrKK5tEB/view?usp=sharing',
        '_blank',
      )

    me?.__typename === 'IndividualUser' &&
      window.open(
        'https://drive.google.com/file/d/1cl831X7bELRfEksYzS76xB2prnc2EiqD/view?usp=sharing',
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
        Aegis Trust Company needs to seek and keep a certified copy (if applicable) of the required
        documents in <b>.jpg, .png, .gif or .pdf format with each file size under 10MB</b>.
        Additional supporting documents may be requested via email. All submitted informaiton will
        only be used for onboarding purposes. If you have any questions, kindly reach out to{' '}
        <b>kyc@aegiscustody.com</b>.
      </Typography>

      <Button variant="outlined" onClick={handleViewChecklist}>
        View Checklist
      </Button>

      <FieldsController configs={configs} form={{ control, errors }} />

      <Button variant="contained" endIcon={<ArrowRightAltIcon />} onClick={handleSubmit(onSubmit)}>
        Start
      </Button>
    </FormBox>
  )
}

export default OnboardingUS
