import { OnboardingPended, OnboardingPending } from '@components/Onboarding'
import { ReviewingLayout } from '@components/UI'
import { useAuth } from '@core/context/auth'
import { OnboardingState } from '@core/graphql/types'
import Head from 'next/head'
import { ReactElement } from 'react'

const OnboardingStatus = () => {
  const { me } = useAuth()
  const onboardingState = me?.client.onboarding.state

  return (
    <>
      <Head>
        <title>Onboarding Status</title>
        <meta name="description" content="Onboarding Status" />
      </Head>

      {onboardingState === OnboardingState.Pended && <OnboardingPended />}

      {onboardingState === OnboardingState.Reviewing && <OnboardingPending />}
    </>
  )
}

OnboardingStatus.getLayout = (page: ReactElement) => {
  return <ReviewingLayout>{page}</ReviewingLayout>
}

export default OnboardingStatus
