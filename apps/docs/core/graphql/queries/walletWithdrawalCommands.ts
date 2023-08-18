import { gql } from '@apollo/client'
import { ASSET_TYPE_FIELDS, NETWORK_INFO_FIELDS, OPERATION_FIELDS } from '../fragment'

export const WALLET_WITHDRAWAL_COMMANDS = gql`
  ${OPERATION_FIELDS}
  ${ASSET_TYPE_FIELDS}
  ${NETWORK_INFO_FIELDS}
  query walletWithdrawalCommands(
    $limit: Int = 10
    $offset: Int = 0
    $clientId: UUID
    $walletId: UUID
    $whitelistedWalletId: UUID
  ) {
    walletWithdrawalCommands(
      limit: $limit
      offset: $offset
      clientId: $clientId
      walletId: $walletId
      whitelistedWalletId: $whitelistedWalletId
    ) {
      total
      list {
        state
        amount
        description
        ...operationFields

        wallet {
          name
          address
          networkInfo {
            ...networkInfoFields
          }
        }

        assetType {
          ...assetTypeFields
        }

        whitelistedWallet {
          name
          address
        }
      }
    }
  }
`
