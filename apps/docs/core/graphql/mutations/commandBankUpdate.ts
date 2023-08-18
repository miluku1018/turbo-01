import { gql } from '@apollo/client'

export const COMMAND_BANK_UPDATE = gql`
  mutation commandBankUpdate($bankId: UUID!, $input: CommandBankUpdateInput!) {
    commandBankUpdate(bankId: $bankId, input: $input) {
      __typename
    }
  }
`
