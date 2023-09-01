import { OnboardingHK, OnboardingSG, OnboardingUS } from '@components/Onboarding'
import { OnboardingLayout } from '@components/UI'
import { useAuth } from '@core/context/auth'
import { CustodyEntity } from '@core/graphql/types'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'

const Onboarding = () => {
  const { me } = useAuth()
  const router = useRouter()

  const custodyEntity = me?.onboarding?.custodyEntity
  const onboardingForm = me?.onboarding?.form
  const additionalInfos = me?.onboarding?.additionalInfos

  if (additionalInfos?.length) {
    router.push('/onboarding/materials')
    return <></>
  }

  if (onboardingForm) {
    router.push('/onboarding/information')
    return <></>
  }

  return (
    <>
      <Head>
        <title>Onboarding Client</title>
        <meta name="description" content="Onboarding Client" />
      </Head>

      {custodyEntity === CustodyEntity.Hk && <OnboardingHK />}

      {custodyEntity === CustodyEntity.Sd && <OnboardingUS />}

      {custodyEntity === CustodyEntity.Sg && <OnboardingSG />}
    </>
  )
}

Onboarding.getLayout = (page: ReactElement) => {
  return <OnboardingLayout>{page}</OnboardingLayout>
}

export default Onboarding
