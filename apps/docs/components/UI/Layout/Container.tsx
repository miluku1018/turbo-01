import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import aegisCustodySvg from '@public/images/aegis-custody.svg'
import aegisVaultSvg from '@public/images/aegis-vault.svg'
import Image from 'next/image'
import React from 'react'

interface ContainerProps {
  children?: React.ReactNode
}

const style = {
  main: (theme: Theme) => ({
    minHeight: 'calc(100vh - 234px)',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      minHeight: 'calc(100vh - 171px)',
    },
  }),
  logo: (theme: Theme) => ({
    width: '100%',
    maxWidth: '330px',
    m: '60px auto',
    [theme.breakpoints.down('md')]: {
      m: '30px auto',
    },
  }),
  footer: {
    display: 'grid',
    gridTemplateColumns: 'auto minmax(auto, 220px)',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    m: '30px',
  },
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Box px="20px">
      <Box sx={style.logo}>
        <Image priority={true} src={aegisVaultSvg} alt="aegis-vault" layout="responsive" />
      </Box>

      <Box component="main" sx={style.main}>
        {children}
      </Box>

      <Box component="footer" sx={style.footer}>
        <Typography color="primary">Powered by</Typography>
        <Image priority={true} src={aegisCustodySvg} alt="aegis-custody" layout="responsive" />
      </Box>
    </Box>
  )
}

export default Container
