import { gql } from '@apollo/client'
import { NETWORK_INFO_FIELDS } from './networkInfoFields'

export const WHITELISTED_WALLET_FIELDS = gql`
  ${NETWORK_INFO_FIELDS}
  fragment whitelistedWalletFields on WhitelistedWallet {
    id
    name
    owner
    address
    networkInfo {
      ...networkInfoFields
    }
  }
`
