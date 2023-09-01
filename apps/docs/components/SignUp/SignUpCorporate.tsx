import { FieldsController, MobileController } from '@components/Controller'
import { Button, FormBox, Link } from '@components/UI'
import { FieldConfig, Phone } from '@core/types'
import { checkboxValidated, mobileValidated, textValidated } from '@core/types/FieldConfig'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useSignUpCompanyUser, useValidatedForm } from '@utils/hooks'
import { parsePhoneNumber } from 'libphonenumber-js'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

type FormData = {
  email: string
  mobile: Phone
  position: string
  lastName: string
  firstName: string
  companyName: string
  incorporationNo: string
}

const configs: FieldConfig[] = [
  {
    type: 'TEXT',
    name: 'companyName',
    label: 'Company Full Name (in English)',
    required: true,
    validated: textValidated,
  },
  {
    type: 'TEXT',
    name: 'incorporationNo',
    label: 'Business Tax ID',
    required: true,
    validated: textValidated,
    hint: <>or Registration Number used to identify a business entity</>,
  },
  {
    type: 'TEXT',
    name: 'firstName',
    label: 'First Name',
    required: true,
    validated: textValidated,
  },
  {
    type: 'TEXT',
    name: 'lastName',
    label: 'Last Name',
    required: true,
    validated: textValidated,
  },
  {
    type: 'TEXT',
    name: 'position',
    label: 'Position / Title',
    required: true,
    validated: textValidated,
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
    label: 'User Account (Corporate Email)',
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

const SignUpCorporate = () => {
  const router = useRouter()

  const [signUpCompanyUser, { loading }] = useSignUpCompanyUser()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useValidatedForm<FormData>(configs)

  const onSubmit = async (formData: FormData) => {
    const { data } = await signUpCompanyUser({
      variables: {
        onboardingId: router.query.onboardingId as string,
        input: {
          email: formData.email,
          mobile: parsePhoneNumber(formData.mobile.number, formData.mobile.code.value).number,
          position: formData.position,
          lastName: formData.lastName,
          firstName: formData.firstName,
          companyName: formData.companyName,
          incorporationNo: formData.incorporationNo,
        },
      },
    })

    const typename = data?.signUpCompanyUser.__typename
    typename === 'CompanyUser' ? router.push('/logIn') : toast.error(typename)
  }

  return (
    <FormBox>
      <Stack gap="10px">
        <Typography variant="h1">Create Account</Typography>
        <Typography variant="subtitle1" color="text.primary">
          as a corporate client
        </Typography>
      </Stack>

      <Typography variant="body2" color="text.primary">
        Being the first contact person of your corporation creating an account, you will be
        responsible for submitting required due diligence materials to complete the client
        onboarding process for your corporation.
      </Typography>

      <FieldsController configs={configs} form={{ control, errors }} />

      <Button variant="contained" loading={loading} onClick={handleSubmit(onSubmit)}>
        Create Account
      </Button>
    </FormBox>
  )
}

export default SignUpCorporate
