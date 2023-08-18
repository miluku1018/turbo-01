import { gql } from '@apollo/client'
import {
  ASSET_TYPE_FIELDS,
  NETWORK_INFO_FIELDS,
  OPERATION_LOGS_FIELDS,
  POLICY_FIELDS,
  WALLET_ASSET_FIELDS,
  WHITELISTED_WALLET_FIELDS,
} from '../fragment'

export const WALLETS = gql`
  ${POLICY_FIELDS}
  ${ASSET_TYPE_FIELDS}
  ${NETWORK_INFO_FIELDS}
  ${WALLET_ASSET_FIELDS}
  ${OPERATION_LOGS_FIELDS}
  ${WHITELISTED_WALLET_FIELDS}
  query wallets(
    $clientId: UUID
    $network: Network
    $isRequester: Boolean
    $tokenTypes: [TokenType!]
    $offset: Int = 0
    $limit: Int = 10
  ) {
    wallets(
      clientId: $clientId
      network: $network
      isRequester: $isRequester
      tokenTypes: $tokenTypes
      offset: $offset
      limit: $limit
    ) {
      total
      list {
        id
        name
        usage
        address
        policy {
          ...policyFields
        }

        assets {
          ...walletAssetFields
        }

        networkInfo {
          ...networkInfoFields
        }

        whitelisteds {
          ...whitelistedWalletFields
        }

        operationLogs {
          ...operationLogsFields
        }
      }
    }
  }
`
