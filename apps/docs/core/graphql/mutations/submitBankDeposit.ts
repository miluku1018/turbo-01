import { gql } from '@apollo/client'

export const SUBMIT_BANK_DEPOSIT = gql`
  mutation submitBankDeposit($bankId: UUID!, $input: SubmitBankDepositInput!) {
    submitBankDeposit(bankId: $bankId, input: $input) {
      __typename
    }
  }
`
