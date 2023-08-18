import { useAuth } from '@core/context/auth'
import CircularProgress from '@mui/material/CircularProgress'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Container from './Container'

interface ReviewingLayoutProps {
  children: React.ReactNode
}

const ReviewingLayout: React.FC<ReviewingLayoutProps> = ({ children }) => {
  const router = useRouter()
  const { status } = useAuth()

  useEffect(() => {
    if (status === 'onboarding') router.push('/onboarding')

    if (status === 'authenticated') router.push('/')

    if (status === 'unauthenticated') router.push('/logIn')
  }, [router, status])

  return (
    <Container>
      {status === 'loading' && <CircularProgress />}

      {status === 'reviewing' && children}
    </Container>
  )
}

export default ReviewingLayout
