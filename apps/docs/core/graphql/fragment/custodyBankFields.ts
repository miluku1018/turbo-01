import { gql } from '@apollo/client'

export const CUSTODY_BANK_FIELDS = gql`
  fragment custodyBankFields on CustodyBank {
    id
    custodyEntity
    currencies
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
    accountName
    account
    routingType
    routingCode
    domesticCode
    notes
  }
`
