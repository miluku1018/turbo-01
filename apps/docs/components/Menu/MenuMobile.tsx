import { Link } from '@components/UI'
import menuConfigs from '@configs/menu/menuConfigs'
import menuSidebarConfigs from '@configs/menu/menuSidebarConfigs'
import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import Typography from '@mui/material/Typography'
import { Theme } from '@mui/material/styles'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import MenuCollapse from './MenuCollapse'

const style = {
  container: (theme: Theme) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  }),
  wrapper: {
    position: 'absolute',
    zIndex: 1,
    top: '60px',
    left: 0,
    width: '100vw',
    height: 0,
    p: '0 20px',
    overflowX: 'hidden',
    transition: 'all 0.3s',
    backgroundColor: 'white',
  },
  open: {
    height: 'calc(100vh - 64px)',
  },
  type: {
    height: '60px',
  },
}

const MenuMobile = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    router.events.on('routeChangeStart', () => setOpen(false))
  }, [router.events])

  return (
    <Box sx={style.container}>
      <IconButton onClick={() => setOpen(prev => !prev)}>
        <MenuIcon color="secondary" />
      </IconButton>

      <Box sx={[style.wrapper, open && style.open]}>
        <List>
          {[...menuConfigs, ...menuSidebarConfigs].map((item, index) => {
            const { icon, type, path, menus } = item
            return (
              <Fragment key={index}>
                {menus ? (
                  <MenuCollapse icon={icon} type={type} menus={menus} />
                ) : (
                  <Link href={path || ''}>
                    <ListItemButton sx={style.type}>
                      <Typography variant="menuType" color="text.secondary">
                        {type}
                      </Typography>
                    </ListItemButton>
                  </Link>
                )}

                <Divider />
              </Fragment>
            )
          })}
        </List>
      </Box>
    </Box>
  )
}

export default MenuMobile
