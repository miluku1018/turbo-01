import { FieldsController, MobileController } from '@components/Controller'
import { Button, FormBox, Link } from '@components/UI'
import { countryCodes } from '@core/data'
import { FieldConfig, Option, Phone } from '@core/types'
import {
  checkboxValidated,
  mobileValidated,
  objectValidated,
  textValidated,
} from '@core/types/FieldConfig'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { formatDateTime } from '@utils/format'
import { useSignUpIndividualUser, useValidatedForm } from '@utils/hooks'
import { parsePhoneNumber } from 'libphonenumber-js'
import { useRouter } from 'next/router'

type FormData = {
  email: string
  mobile: Phone
  birthday: string
  lastName: string
  firstName: string
  countryOfCitizenship: Option
}

const configs: FieldConfig[] = [
  {
    type: 'TEXT',
    name: 'firstName',
    label: 'First Name (English)',
    required: true,
    validated: textValidated,
    hint: <>The provided first name should match the displayed name on your passport.</>,
  },
  {
    type: 'TEXT',
    name: 'lastName',
    label: 'Last Name (English)',
    required: true,
    validated: textValidated,
    hint: <>The provided last name should match the displayed name on your passport.</>,
  },
  {
    type: 'DATE',
    name: 'birthday',
    label: 'Date Of Birth',
    required: true,
    validated: textValidated,
  },
  {
    type: 'SINGLE_SELECT',
    name: 'countryOfCitizenship',
    label: 'Country Of Citizenship',
    options: countryCodes.map(({ countryName }) => ({
      label: countryName,
      value: countryName,
    })),
    required: true,
    validated: objectValidated,
    hint: (
      <>
        {`If your country of citizenship isn't listed in the above options you are currently
        ineligible for client onboarding due to compliance reasons.`}
      </>
    ),
  },
  {
    type: 'COMPONENT',
    name: 'mobile',
    label: 'Mobile',
    required: true,
    validated: mobileValidated,
    component: MobileController,
  },
  {
    type: 'TEXT',
    name: 'email',
    label: 'User Account (Email)',
    required: true,
    validated: textValidated.email(),
    hint: <>This will be set as your user account for logging into Aegis Vault.</>,
  },
  {
    type: 'CHECKBOX',
    name: 'agreement',
    label: (
      <>
        I have read and agreed to the{' '}
        <Link target="_blank" href="https://www.aegiscustody.com/termsConditions">
          Terms & Conditions
        </Link>{' '}
        of Aegis Custody.
      </>
    ),
    required: true,
    validated: checkboxValidated,
  },
]

const SignUpIndividual = () => {
  const router = useRouter()

  const [signUpIndividualUser, { loading }] = useSignUpIndividualUser()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useValidatedForm<FormData>(configs)

  const onSubmit = async (formData: FormData) => {
    const { data } = await signUpIndividualUser({
      variables: {
        onboardingId: router.query.onboardingId as string,
        input: {
          email: formData.email,
          mobile: parsePhoneNumber(formData.mobile.number, formData.mobile.code.value).number,
          birthday: formatDateTime(formData.birthday),
          lastName: formData.lastName,
          firstName: formData.firstName,
          countryOfCitizenship: formData.countryOfCitizenship.value,
        },
      },
    })

    if (data?.signUpIndividualUser.__typename === 'IndividualUser') {
      router.push('/logIn')
    }
  }

  return (
    <FormBox>
      <Stack gap="10px">
        <Typography variant="h1">Create Account</Typography>
        <Typography variant="subtitle1" color="text.primary">
          as an individual client
        </Typography>
      </Stack>

      <Typography variant="body2" color="text.primary">
        After account creation, you will need to submit required due diligence materials to complete
        the client onboarding process.
      </Typography>

      <FieldsController configs={configs} form={{ control, errors }} />

      <Button variant="contained" loading={loading} onClick={handleSubmit(onSubmit)}>
        Create Account
      </Button>
    </FormBox>
  )
}

export default SignUpIndividual
