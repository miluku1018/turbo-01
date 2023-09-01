import { FieldsController, MoreFieldsController } from '@components/Controller'
import { fieldConfigs as accountTypeFieldConfigs } from '@components/Controller/AccountTypeController'
import { fieldConfigs as jobStatusFieldConfigs } from '@components/Controller/JobStatusController'
import { Button, FormBox, OnboardingLayout } from '@components/UI'
import hkCorporateConfigs from '@configs/onboarding/hk/corporateConfigs'
import hkIndividualConfigs from '@configs/onboarding/hk/individualConfigs'
import sgCorporateConfigs from '@configs/onboarding/sg/corporateConfigs'
import sgIndividualConfigs from '@configs/onboarding/sg/individualConfigs'
import usCorporateConfigs from '@configs/onboarding/us/corporateConfigs'
import usIndividualConfigs from '@configs/onboarding/us/individualConfigs'
import theme from '@configs/theme'
import { useAuth } from '@core/context/auth'
import { countryCodes, phoneCodes } from '@core/data'
import { ClientType, CustodyEntity } from '@core/graphql/types'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import MobileStepper from '@mui/material/MobileStepper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { formatDateTime } from '@utils/format'
import { useSubmitOnboarding, useUpdateOnboarding, useValidatedForm } from '@utils/hooks'
import { parsePhoneNumber } from 'libphonenumber-js'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Fragment, ReactElement, useState } from 'react'

const config = {
  [CustodyEntity.Hk + ClientType.Company]: hkCorporateConfigs,
  [CustodyEntity.Sg + ClientType.Company]: sgCorporateConfigs,
  [CustodyEntity.Sd + ClientType.Company]: usCorporateConfigs,
  [CustodyEntity.Hk + ClientType.Individual]: hkIndividualConfigs,
  [CustodyEntity.Sg + ClientType.Individual]: sgIndividualConfigs,
  [CustodyEntity.Sd + ClientType.Individual]: usIndividualConfigs,
}

const setFieldValue = (type: string, label: string, value: any) => {
  const field = { type, label, value }

  switch (type) {
    case 'DATE': {
      field.type = 'TEXT'
      field.value = formatDateTime(value)
      return field
    }

    case 'DATE_TEXTFILE': {
      field.type = 'TEXTFILE'
      field.value = formatDateTime(value)
      return field
    }

    case 'NUMBER':
    case 'TEXTAREA': {
      field.type = 'TEXT'
      return field
    }

    case 'NUMBER_TEXTFILE':
    case 'TEXTAREA_TEXTFILE': {
      field.type = 'TEXTFILE'
      return field
    }

    case 'SINGLE_SELECT':
    case 'SINGLE_SELECT_TEXTFILE': {
      field.value = value?.value
      return field
    }

    case 'FILE': {
      field.value = value?.id
      return field
    }

    case 'MOBILE': {
      field.value = {
        code: field.value?.code?.value || '',
        number:
          field.value?.number && field.value?.code?.value
            ? parsePhoneNumber(field.value.number, field.value.code.value).number
            : '',
      }

      return field
    }

    case 'COUNTRY': {
      field.value = {
        countryCode: field.value?.value || '',
        countryName: field.value?.label || '',
      }

      return field
    }

    case 'ADDRESS': {
      field.value = {
        city: field.value.city || '',
        state: field.value.state || '',
        zipCode: field.value.zipCode || '',
      }

      return field
    }

    default:
      return field
  }
}

const setDefaultValue = ({ type, value, values, mobile, country, address }: any) => {
  switch (type) {
    case 'FILE': {
      return { id: value }
    }

    case 'GROUP': {
      return values?.map((item: any) => ({
        type: item.type,
        label: item.label,
        value: setDefaultValue({ type: item.type, value: item.value }),
      }))
    }

    case 'MOBILE': {
      const data = phoneCodes.find(item => item.countryCode === mobile?.code)
      return {
        code: data
          ? { label: `${data.countryName} (${data.phoneCode})`, value: mobile?.code }
          : undefined,
        number: mobile?.number,
      }
    }

    case 'COUNTRY': {
      const data = countryCodes.find(item => item.countryCode === country?.countryCode)
      return {
        label: data?.countryName,
        value: data?.countryCode,
      }
    }

    case 'ADDRESS': {
      return address
    }

    case 'SINGLE_SELECT':
    case 'SINGLE_SELECT_TEXTFILE': {
      return { label: value, value: value }
    }

    default:
      return value
  }
}

const OnboardingInformation = () => {
  const { me } = useAuth()
  const onboarding = me?.onboarding

  const stepNum = onboarding?.form?.stepNum || 0
  const clientType = onboarding?.clientType
  const custodyEntity = onboarding?.custodyEntity
  const defaultValues = onboarding?.form?.fields.reduce<{ [key: string]: any }>((prev, curr) => {
    if (curr.__typename !== 'GroupField') return prev

    curr.value?.forEach(({ type, label, ...props }: any) => {
      prev[label] = setDefaultValue({ type, ...props })
    })

    return prev
  }, {})

  const router = useRouter()

  const [step, setStep] = useState(stepNum)
  const onboardingList = clientType && custodyEntity ? config[custodyEntity + clientType] : []
  const onboardingConfig = onboardingList[step] ? onboardingList[step] : undefined

  const [updateOnboarding, { loading: updateLoading }] = useUpdateOnboarding()
  const [submitOnboarding, { loading: submitLoading }] = useSubmitOnboarding()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useValidatedForm<any>(
    [...(onboardingConfig?.formFields || []), ...accountTypeFieldConfigs, ...jobStatusFieldConfigs],
    { defaultValues: defaultValues },
  )

  const handleNext = async (formData: any) => {
    const title = onboardingConfig?.title || ''

    const formFields = (onboardingConfig?.formFields || []).map(({ type, name }) => {
      const data = setFieldValue(type, name, formData[name])

      if (type === 'JOB_STATUS') {
        data.type = 'SINGLE_SELECT'
        data.value = formData[name]?.value
        return [
          data,
          ...jobStatusFieldConfigs.map(fieldConfig =>
            setFieldValue(fieldConfig.type, fieldConfig.name, formData[fieldConfig.name]),
          ),
        ]
      }

      if (type === 'ACCOUNT_TYPE') {
        data.type = 'SINGLE_SELECT'
        data.value = formData[name]?.value
        return [
          data,
          ...accountTypeFieldConfigs.map(fieldConfig =>
            setFieldValue(fieldConfig.type, fieldConfig.name, formData[fieldConfig.name]),
          ),
        ]
      }

      return data
    })

    const moreFields = (formData[title] || []).map((item: any, index: any) => {
      const { type, label } = item
      return setFieldValue(type, label, formData[title]?.[index]?.value)
    })

    const field = {
      type: 'GROUP',
      label: title,
      value: [
        ...formFields,
        {
          type: 'GROUP',
          label: title,
          value: moreFields.length ? moreFields : undefined,
        },
      ]
        .flat()
        .filter((item: any) => item.value),
    }

    const { data } = await updateOnboarding({
      variables: {
        id: onboarding?.id || '',
        field: field,
        stepNum: step,
      },
    })

    if (data?.updateOnboarding.__typename === 'Onboarding' && step !== onboardingList.length - 1) {
      setStep(prev => prev + 1)
    }
  }

  const handleSend = async (formData: any) => {
    await handleNext(formData)

    const { data } = await submitOnboarding({
      variables: {
        id: onboarding?.id || '',
      },
    })

    if (data?.submitOnboarding.__typename === 'Onboarding') {
      router.push('/onboarding/completed')
    }
  }

  const handleBack = () => {
    setStep(prev => prev - 1)
  }

  return (
    <>
      <Head>
        <title>Onboarding Information</title>
        <meta name="description" content="Onboarding Information" />
      </Head>

      <FormBox>
        <Stack gap="10px">
          <Typography variant="h1">{onboardingConfig?.title}</Typography>
          <Typography variant="subtitle1" color="text.primary">
            {onboardingConfig?.subtitle}
          </Typography>
        </Stack>

        {onboardingList.map((item, index) => {
          const { title, formFields = [], moreFields = [] } = item

          return (
            <Fragment key={index}>
              {step === index && formFields.length > 0 && (
                <FieldsController configs={formFields} form={{ control, errors }} />
              )}

              {step === index && moreFields.length > 0 && (
                <MoreFieldsController configs={moreFields} form={{ control }} name={title} />
              )}
            </Fragment>
          )
        })}

        <MobileStepper
          variant="text"
          position="static"
          steps={onboardingList.length}
          activeStep={step}
          nextButton={
            step === onboardingList.length - 1 ? (
              <Button
                size="small"
                loading={updateLoading || submitLoading}
                onClick={handleSubmit(handleSend)}
              >
                SEND
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            ) : (
              <Button size="small" loading={updateLoading} onClick={handleSubmit(handleNext)}>
                NEXT
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            )
          }
          backButton={
            <Button size="small" disabled={step === 0} onClick={handleBack}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              BACK
            </Button>
          }
        />
      </FormBox>
    </>
  )
}

OnboardingInformation.getLayout = (page: ReactElement) => {
  return <OnboardingLayout>{page}</OnboardingLayout>
}

export default OnboardingInformation
