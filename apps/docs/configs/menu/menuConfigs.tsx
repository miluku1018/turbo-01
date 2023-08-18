import { MenuQuestion } from '@components/Menu'
import { MenuConfig } from '@core/types'
import { MenuName } from '@core/types/MenuConfig'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import PersonIcon from '@mui/icons-material/Person'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'

const menuConfigs: MenuConfig[] = [
  {
    icon: ReceiptLongIcon,
    type: 'POLICY',
    path: '/policy',
  },
  {
    icon: QuestionMarkIcon,
    type: 'SUPPORT',
    menus: [
      {
        component: MenuQuestion,
      },
    ],
  },
  {
    type: 'email',
    menus: [
      {
        icon: PersonIcon,
        name: MenuName.ACCOUNT,
        path: '/account',
      },
      {
        icon: BusinessCenterIcon,
        name: MenuName.AUTHORIZATION,
        path: '/authorization',
      },
      // {
      //   icon: SettingsIcon,
      //   name: MenuName.SETTING,
      //   path: '/setting',
      // },
      {
        icon: PowerSettingsNewIcon,
        name: MenuName.LOG_OUT,
      },
    ],
  },
]

export default menuConfigs
