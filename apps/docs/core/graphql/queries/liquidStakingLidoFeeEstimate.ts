import { gql } from '@apollo/client'

export const LIQUID_STAKING_LIDO_FEE_ESTIMATE = gql`
  query liquidStakingLidoFeeEstimate($amount: String!, $walletId: ID!) {
    liquidStakingLidoFeeEstimate(amount: $amount, walletId: $walletId) {
      fee
      maxFee
      failureReason
    }
  }
`
