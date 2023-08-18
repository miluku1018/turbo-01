import { gql } from '@apollo/client'
import {
  ASSET_TYPE_FIELDS,
  CUSTODY_BANK_FIELDS,
  NETWORK_INFO_FIELDS,
  OPERATION_FIELDS,
  POLICY_FIELDS,
  WALLET_FIELDS,
  WHITELISTED_BANK_FIELDS,
  WHITELISTED_WALLET_FIELDS,
} from '../fragment'

export const OPERATIONS = gql`
  ${OPERATION_FIELDS}
  ${CUSTODY_BANK_FIELDS}
  ${ASSET_TYPE_FIELDS}
  ${NETWORK_INFO_FIELDS}
  ${POLICY_FIELDS}
  ${WHITELISTED_WALLET_FIELDS}
  ${WHITELISTED_BANK_FIELDS}
  ${WALLET_FIELDS}
  query operations(
    $custodyEntity: CustodyEntity
    $operationTypes: [OperationType!]!
    $clientType: ClientType
    $clientId: UUID
    $walletId: UUID
    $bankId: UUID
    $states: [OperationState!]
    $startsAt: DateTime
    $endsAt: DateTime
    $waitingForViewer: Boolean
    $offset: Int = 0
    $limit: Int = 10
  ) {
    operations(
      custodyEntity: $custodyEntity
      operationTypes: $operationTypes
      clientType: $clientType
      clientId: $clientId
      walletId: $walletId
      bankId: $bankId
      states: $states
      startsAt: $startsAt
      endsAt: $endsAt
      waitingForViewer: $waitingForViewer
      offset: $offset
      limit: $limit
    ) {
      total
      list {
        id
        state
        ...operationFields

        ... on UserCreateCommand {
          args {
            role
            email
            mobile
            lastName
            firstName
          }
        }

        ... on UserRemoveCommand {
          args {
            reason
            user {
              role
              email
              mobile
              lastName
              firstName
            }
          }
        }

        ... on WalletUpdateCommand {
          wallet {
            ...walletFields
          }

          newDatas {
            policy {
              ...policyFields
            }

            whitelistedWallets {
              ...whitelistedWalletFields
            }
          }
        }

        ... on WalletCreateCommand {
          args {
            name
            usage
            policy {
              ...policyFields
            }

            networkInfo {
              ...networkInfoFields
            }

            whitelistedWallets {
              ...whitelistedWalletFields
            }
          }
        }

        ... on BankCreateOperation {
          usage
          custodyBank {
            ...custodyBankFields
          }

          policy {
            ...policyFields
          }
        }

        ... on BankUpdateCommand {
          bank {
            usage
            custodyBank {
              ...custodyBankFields
            }
          }

          newDatas {
            policy {
              ...policyFields
            }

            whitelistedBanks {
              ...whitelistedBankFields
            }
          }
        }

        ... on LiquidStakeLidoCommand {
          amount
          wallet {
            ...walletFields
          }

          protocolInfo {
            icon
            name
          }

          assetType {
            ...assetTypeFields
          }
        }

        ... on WalletWithdrawalCommand {
          amount
          description
          wallet {
            ...walletFields
          }

          assetType {
            ...assetTypeFields
          }

          whitelistedWallet {
            name
            address
          }
        }

        ... on BankWithdrawalOperation {
          amount
          usage
          wiringFee
          wiringType
          bank {
            custodyBank {
              ...custodyBankFields
            }
          }
          whitelistedBank {
            ...whitelistedBankFields
          }
        }

        ... on PolicyCreateCommand {
          args {
            name
            description
            viewers {
              lastName
              firstName
            }

            requesters {
              dailyLimit
              user {
                lastName
                firstName
              }
            }

            approverGroups {
              required
              triggerCondition
              users {
                lastName
                firstName
              }
            }
          }
        }

        ... on PolicyUpdateCommand {
          policy {
            ...policyFields
          }
          newValues {
            viewers {
              lastName
              firstName
            }

            requesters {
              dailyLimit
              user {
                lastName
                firstName
              }
            }

            approverGroups {
              required
              triggerCondition
              users {
                lastName
                firstName
              }
            }
          }
        }

        ... on WhitelistedWalletCreateCommand {
          args {
            name
            owner
            address
            filesDriveFolder
            networkInfo {
              ...networkInfoFields
            }
          }
        }

        ... on WhitelistedBankCreateCommand {
          bankInfo {
            name
            country
            address
            city
            state
            zip
            alias
            icon
          }
          ownerType
          accountName
          account
          routingType
          routingCode
          notes
          filesFolderLink
          domesticCode
        }

        ... on EthStakingCommand {
          depositDataRoot
          wallet {
            ...walletFields
          }

          assetType {
            ...assetTypeFields
          }

          depositData {
            amount
            signature
            validatorPubkey
            withdrawalCredentials
          }
        }

        ... on FiatToCryptoCommand {
          args {
            bps
            usage
            amount
            unitPrice
            amountInUsd
            bank {
              custodyBank {
                ...custodyBankFields
              }
            }

            wallet {
              ...walletFields
            }

            provider {
              name
            }

            assetType {
              ...assetTypeFields
            }
          }

          fiatToCrypto {
            price
            amount
            assetType {
              ... on CoinAssetType {
                symbol
              }

              ... on TokenAssetType {
                symbol
              }
            }
          }
        }

        ... on CryptoToFiatCommand {
          args {
            bps
            usage
            amount
            unitPrice
            amountInUsd
            bank {
              custodyBank {
                ...custodyBankFields
              }
            }

            wallet {
              ...walletFields
            }

            provider {
              name
            }

            assetType {
              ...assetTypeFields
            }
          }

          cryptoToFiat {
            price
            amountInUsd
            walletTransaction {
              txHash
            }
          }
        }

        ... on BankDepositOperation {
          reportedAmount
          filesDriveFolder
          bank {
            custodyBank {
              ...custodyBankFields
            }
          }
          whitelistedBank {
            ...whitelistedBankFields
          }
        }

        ... on WalletDepositConfirmation {
          reportedTxHash
          reportedAmount
          txHash
          wallet {
            ...walletFields
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
  }
`
