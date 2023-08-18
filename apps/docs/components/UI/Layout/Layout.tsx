import { useAuth } from '@core/context/auth'
import CircularProgress from '@mui/material/CircularProgress'
import { useRouter } from 'next/router'
import React, { ReactNode, useEffect } from 'react'
import Container from './Container'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter()
  const { status } = useAuth()

  useEffect(() => {
    if (status === 'reviewing') router.push('/onboarding/status')

    if (status === 'onboarding') router.push('/onboarding')

    if (status === 'authenticated') router.push('/')
  }, [router, status])

  return (
    <Container>
      {status === 'loading' && <CircularProgress />}

      {status === 'unauthenticated' && children}
    </Container>
  )
}

export default Layout
