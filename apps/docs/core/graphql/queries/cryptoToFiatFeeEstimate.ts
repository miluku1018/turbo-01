import { gql } from '@apollo/client'

export const CRYPTO_TO_FIAT_FEE_ESTIMATE = gql`
  query cryptoToFiatFeeEstimate($amount: String!, $assetTypeId: ID!, $walletId: ID!) {
    cryptoToFiatFeeEstimate(amount: $amount, assetTypeId: $assetTypeId, walletId: $walletId) {
      fee
      maxFee
      failureReason
    }
  }
`
