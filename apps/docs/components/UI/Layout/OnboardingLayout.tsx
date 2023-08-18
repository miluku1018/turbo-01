import { useAuth } from '@core/context/auth'
import CircularProgress from '@mui/material/CircularProgress'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Container from './Container'

interface OnboardingLayoutProps {
  children: React.ReactNode
}

const OnboardingLayout: React.FC<OnboardingLayoutProps> = ({ children }) => {
  const router = useRouter()
  const { status } = useAuth()

  useEffect(() => {
    if (status === 'reviewing') router.push('/onboarding/status')

    if (status === 'authenticated') router.push('/')

    if (status === 'unauthenticated') router.push('/logIn')
  }, [router, status])

  return (
    <Container>
      {status === 'loading' && <CircularProgress />}

      {status === 'onboarding' && children}
    </Container>
  )
}

export default OnboardingLayout
