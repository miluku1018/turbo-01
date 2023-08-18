import { gql } from '@apollo/client'

export const WALLET_WITHDRAWAL_FEE_ESTIMATE = gql`
  query walletWithdrawalFeeEstimate(
    $amount: String!
    $assetTypeId: ID!
    $walletId: ID!
    $whitelistedWalletId: ID!
  ) {
    walletWithdrawalFeeEstimate(
      amount: $amount
      assetTypeId: $assetTypeId
      walletId: $walletId
      whitelistedWalletId: $whitelistedWalletId
    ) {
      fee
      maxFee
      failureReason
    }
  }
`
