import { Role } from '@core/graphql/types'

interface Menu {
  icon?: React.ComponentType<any>
  name?: MenuName
  path?: string
  component?: React.ComponentType<any>
  viewOnlyRole?: Role
}

interface MenuConfig {
  icon?: React.ComponentType<any>
  type?: string
  path?: string
  menus?: Menu[]
}

export enum MenuName {
  'ACCOUNT' = 'Account',
  'AUTHORIZATION' = 'Authorization',
  'SETTING' = 'Setting',
  'LOG_OUT' = 'Log Out',
  'WALLET_ADDRESS' = 'Wallet Address',
  'BANK_ACCOUNT' = 'Bank Account',
  'WHITELIST' = 'Whitelist',
  'PENDING_APPROVAL' = 'Pending Approval',
  'HISTORY' = 'History',
  'DEPOSIT' = 'Deposit',
  'WITHDRAWAL' = 'Withdrawal',
  'DELEGATION' = 'Delegation',
  'CONVERSION' = 'Conversion',
  'LIQUID_STAKING' = 'Liquid Staking',
  'EXECUTION_PROVIDER' = 'Execution Provider',
  'FIAT_ON_RAMP' = 'Fiat On-Ramp',
  'CRYPTO_TO_CRYPTO' = 'Crypto To Crypto',
  'FIAT_OFF_RAMP' = 'Fiat Off-Ramp',
  'STATEMENT' = 'Statement',
  'INVOICE' = 'Invoice',
  'OTHER_PRODUCTS' = 'Other Products',
}

export default MenuConfig
