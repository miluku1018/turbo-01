import { MenuBadge } from '@components/Menu'
import { Button, Link } from '@components/UI'
import menuSidebarConfigs from '@configs/menu/menuSidebarConfigs'
import { useAuth } from '@core/context/auth'
import { Box, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

const style = {
  container: (theme: Theme) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  }),
  menuBtn: (theme: Theme) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '10px',
    textAlign: 'left',
    '&:hover *': {
      color: theme.palette.primary.main,
    },
    '&.active *': {
      color: theme.palette.primary.main,
    },
  }),
}

const Sidebar = () => {
  const router = useRouter()
  const pathname = `/${router.pathname.split('/')[1]}`

  const { me } = useAuth()

  return (
    <Box sx={style.container}>
      {menuSidebarConfigs.map((item, index) => {
        const { type, menus = [] } = item
        return (
          <Fragment key={index}>
            <Typography variant="menuType" color="text.secondary" my="10px">
              {type}
            </Typography>

            {menus.map((item, index) => {
              const { icon: Icon, name, path, viewOnlyRole } = item
              const isActive = pathname === path

              if (viewOnlyRole !== me?.role) {
                return (
                  <Link key={index} href={path || ''}>
                    <Button
                      disableRipple
                      sx={style.menuBtn}
                      className={isActive ? 'active' : undefined}
                      startIcon={Icon ? <Icon color="menu" /> : undefined}
                    >
                      <MenuBadge name={name} />
                    </Button>
                  </Link>
                )
              }
            })}
          </Fragment>
        )
      })}
    </Box>
  )
}

export default Sidebar
