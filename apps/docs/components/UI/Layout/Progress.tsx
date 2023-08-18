import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const style = {
  container: {
    position: 'fixed',
    zIndex: '200',
    width: '100%',
  },
}

const Progress = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleStart = () => {
    setLoading(true)
  }

  const handleStop = () => {
    setLoading(false)
  }

  useEffect(() => {
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
    }
  }, [router.events])

  return (
    <Box sx={[style.container, { display: loading ? 'block' : 'none' }]}>
      <LinearProgress />
    </Box>
  )
}

export default Progress
