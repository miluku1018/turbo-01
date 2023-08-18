import { gql } from '@apollo/client'

export const ETH_STAKING_FEE_ESTIMATE = gql`
  query ethStakingFeeEstimate($input: EthStakingFeeEstimateInput!, $walletId: UUID!) {
    ethStakingFeeEstimate(input: $input, walletId: $walletId) {
      fee
      maxFee
      failureReason
    }
  }
`
