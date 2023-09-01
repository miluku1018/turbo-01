import { FieldsController } from '@components/Controller'
import { Button, FormBox, OnboardingLayout } from '@components/UI'
import { useAuth } from '@core/context/auth'
import FieldConfig, { objectValidated, textValidated } from '@core/types/FieldConfig'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useSubmitAdditionalInfo, useValidatedForm } from '@utils/hooks'
import { ReactElement } from 'react'
import { toast } from 'react-toastify'

const validatedType: { [key: string]: any } = {
  FILE: objectValidated,
  DATE: textValidated,
  TEXT: textValidated,
  TEXTAREA: textValidated,
}

const OnboardingMaterials = () => {
  const { me, logIn } = useAuth()

  const [submitAdditionalInfo, { loading }] = useSubmitAdditionalInfo()

  const additionalInfos = me?.onboarding?.additionalInfos
  const fields = (
    additionalInfos?.length
      ? additionalInfos[additionalInfos.length - 1].fields.map((item, index) => ({
          hint: item.hint,
          type: item.type,
          name: item.label + index,
          label: item.label,
          require: true,
          validated: validatedType[item.type],
        }))
      : []
  ) as FieldConfig[]

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useValidatedForm(Object.values(fields))

  const onSubmit = async (formData: any) => {
    const { data } = await submitAdditionalInfo({
      variables: {
        id: me?.onboarding?.id || '',
        fields: fields.map(item => {
          const value = formData[item.name]
          return {
            ...item,
            value: item.type === 'FILE' ? value?.id : value,
          }
        }),
      },
    })

    if (data?.submitAdditionalInfo.__typename === 'Onboarding') {
      toast.success('Success')
      logIn()
    }
  }

  return (
    <FormBox>
      <Stack gap="10px">
        <Typography variant="h1">Info Required</Typography>
        <Typography variant="subtitle1" color="text.primary">
          Submit additional info required to proceed.
        </Typography>
      </Stack>

      <Typography variant="body2" color="text.primary">
        {additionalInfos?.length ? additionalInfos[0].note : ''}
      </Typography>

      <FieldsController configs={fields} form={{ control, errors }} />

      <Button variant="contained" loading={loading} onClick={handleSubmit(onSubmit)}>
        Submit
      </Button>
    </FormBox>
  )
}

OnboardingMaterials.getLayout = (page: ReactElement) => {
  return <OnboardingLayout>{page}</OnboardingLayout>
}

export default OnboardingMaterials
