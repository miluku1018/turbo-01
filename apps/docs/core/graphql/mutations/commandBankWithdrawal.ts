import { gql } from '@apollo/client'

export const COMMAND_BANK_WITHDRAWAL = gql`
  mutation commandBankWithdrawal($bankId: UUID!, $input: CommandBankWithdrawalInput!) {
    commandBankWithdrawal(bankId: $bankId, input: $input) {
      __typename
    }
  }
`
