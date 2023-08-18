import MenuDesktop from '@components/Menu/MenuDesktop'
import MenuMobile from '@components/Menu/MenuMobile'
import { Link } from '@components/UI'
import Box from '@mui/material/Box'
import aegisVaultSvg from '@public/images/aegis-vault.svg'
import Image from 'next/image'

const style = {
  container: (theme: any) => ({
    position: 'relative',
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    height: '80px',
    backgroundSize: 'contain',
    backgroundColor: theme.palette.tertiary.main,
    backgroundImage: 'url("/images/network.png")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    [theme.breakpoints.down('md')]: {
      height: '60px',
    },
  }),
  wrapper: (theme: any) => ({
    display: 'grid',
    gridTemplateColumns: 'minmax(auto, 220px) auto',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    px: '30px',
    [theme.breakpoints.down('md')]: {
      px: '20px',
    },
  }),
}

const Navbar = () => {
  return (
    <Box component="header" sx={style.container}>
      <Box sx={style.wrapper}>
        <Link href="/">
          <Image priority={true} src={aegisVaultSvg} alt="aegis-custody" layout="responsive" />
        </Link>

        <MenuMobile />

        <MenuDesktop />
      </Box>
    </Box>
  )
}

export default Navbar
