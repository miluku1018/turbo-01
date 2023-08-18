import { MenuConfig } from "@core/types";
import { MenuName } from "@core/types/MenuConfig";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import BalanceIcon from "@mui/icons-material/Balance";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import HistoryIcon from "@mui/icons-material/History";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SwipeLeftAltIcon from "@mui/icons-material/SwipeLeftAlt";
import SwipeRightAltIcon from "@mui/icons-material/SwipeRightAlt";

const menuSidebarConfigs: MenuConfig[] = [
  {
    type: "CUSTODY",
    menus: [
      {
        icon: AccountBalanceWalletIcon,
        name: MenuName.WALLET_ADDRESS,
        path: "/walletAddress",
      },
      {
        icon: AccountBalanceIcon,
        name: MenuName.BANK_ACCOUNT,
        path: "/bankAccount",
      },
      {
        icon: FactCheckIcon,
        name: MenuName.WHITELIST,
        path: "/whitelist",
      },
      {
        icon: BorderColorIcon,
        name: MenuName.PENDING_APPROVAL,
        path: "/pendingApproval",
        // viewOnlyRole: Role.UserViewer,
      },
      {
        icon: HistoryIcon,
        name: MenuName.HISTORY,
        path: "/history",
      },
    ],
  },
  {
    type: "TRANSACTIONS",
    menus: [
      {
        icon: LoginIcon,
        name: MenuName.DEPOSIT,
        path: "/deposit",
        // viewOnlyRole: Role.UserViewer,
      },
      {
        icon: LogoutIcon,
        name: MenuName.WITHDRAWAL,
        path: "/withdrawal",
        // viewOnlyRole: Role.UserViewer,
      },
    ],
  },
  {
    type: "CUSTODIAL STAKING",
    menus: [
      {
        icon: HowToVoteIcon,
        name: MenuName.DELEGATION,
        path: "/delegation",
      },
      // {
      //   icon: SwapHorizIcon,
      //   name: MenuName.CONVERSION,
      //   path: '/conversion',
      // },
      {
        icon: BalanceIcon,
        name: MenuName.LIQUID_STAKING,
        path: "/liquidStaking",
      },
    ],
  },
  {
    type: "EXECUTION",
    menus: [
      {
        icon: RocketLaunchIcon,
        name: MenuName.EXECUTION_PROVIDER,
        path: "/executionProvider",
      },
      {
        icon: SwipeLeftAltIcon,
        name: MenuName.FIAT_ON_RAMP,
        path: "/fiatOnRamp",
        // viewOnlyRole: Role.UserViewer,
      },
      // {
      //   icon: SwapHorizIcon,
      //   name: MenuName.CRYPTO_TO_CRYPTO,
      //   path: '/cryptoToCrypto',
      // },
      {
        icon: SwipeRightAltIcon,
        name: MenuName.FIAT_OFF_RAMP,
        path: "/fiatOffRamp",
        // viewOnlyRole: Role.UserViewer,
      },
    ],
  },
  {
    type: "AEGIS SERVICES",
    menus: [
      {
        icon: ListAltIcon,
        name: MenuName.STATEMENT,
        path: "/statement",
      },
      // {
      //   icon: MarkAsUnreadIcon,
      //   name: MenuName.INVOICE,
      //   path: '/invoice',
      // },
      {
        icon: AutoFixHighIcon,
        name: MenuName.OTHER_PRODUCTS,
        path: "/otherProducts",
      },
    ],
  },
];

export default menuSidebarConfigs;
