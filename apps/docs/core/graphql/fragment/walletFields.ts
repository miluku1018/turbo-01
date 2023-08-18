import { gql } from '@apollo/client'
import { NETWORK_INFO_FIELDS } from './networkInfoFields'

export const WALLET_FIELDS = gql`
  ${NETWORK_INFO_FIELDS}
  fragment walletFields on Wallet {
    name
    usage
    address
    networkInfo {
      ...networkInfoFields
    }
  }
`
