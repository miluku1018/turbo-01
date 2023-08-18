import { gql } from '@apollo/client'

export const DASHBOARD_COUNTS = gql`
  query dashboardCounts {
    dashboardCounts {
      users
      wallets
      deposits
      withdrawals
      wallets
      activeUsers
      users
      banks
      cryptoToFiats
      delegations
      fiatToCryptos
      liquidStakings
      policies
      whitelistedBanks
      whitelistedWallets
    }
  }
`
