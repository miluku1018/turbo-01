import menuConfigs from '@configs/menu/menuConfigs'
import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import Menu from './Menu'

const style = {
  container: (theme: Theme) => ({
    display: 'flex',
    gap: '20px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  }),
}

const MenuDesktop = () => {
  return (
    <Box sx={style.container}>
      {menuConfigs.map((item, index) => {
        const { icon, type, path, menus } = item
        return <Menu key={index} icon={icon} type={type} path={path} menus={menus} />
      })}
    </Box>
  )
}

export default MenuDesktop
