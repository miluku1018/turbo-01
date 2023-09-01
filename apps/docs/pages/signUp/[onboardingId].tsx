import SignUpCorporate from '@components/SignUp/SignUpCorporate'
import SignUpIndividual from '@components/SignUp/SignUpIndividual'
import { Layout } from '@components/UI'
import { ClientType } from '@core/graphql/types'
import CircularProgress from '@mui/material/CircularProgress'
import { useOnboarding } from '@utils/hooks'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'

const SignUp = () => {
  const router = useRouter()
  const onboardingId = router.query.onboardingId as string

  const { data, loading } = useOnboarding({ variables: { id: onboardingId } })

  if (loading) return <CircularProgress />

  return (
    <>
      <Head>
        <title>Create Account</title>
        <meta name="description" content="Create Account" />
      </Head>

      {data?.onboarding.clientType === ClientType.Company && <SignUpCorporate />}

      {data?.onboarding.clientType === ClientType.Individual && <SignUpIndividual />}
    </>
  )
}

SignUp.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default SignUp
