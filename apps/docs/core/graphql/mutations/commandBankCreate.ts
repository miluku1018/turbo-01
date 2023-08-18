import { gql } from '@apollo/client'

export const COMMAND_BANK_CREATE = gql`
  mutation commandBankCreate($input: BankCreateInput!) {
    commandBankCreate(input: $input) {
      __typename
    }
  }
`
