import { gql } from '@apollo/client'
import { CUSTODY_BANK_FIELDS } from './custodyBankFields'

export const POLICY_FIELDS = gql`
  ${CUSTODY_BANK_FIELDS}
  fragment policyFields on Policy {
    id
    name
    description
    viewers {
      id
      email
      lastName
      firstName
    }

    requesters {
      dailyLimit
      user {
        id
        email
        lastName
        firstName
      }
    }

    approverGroups {
      required
      triggerCondition
      users {
        id
        email
        lastName
        firstName
      }
    }

    associatedWallets {
      name
      address
      networkInfo {
        coin
      }
    }

    associatedBanks {
      custodyBank {
        ...custodyBankFields
      }
    }
  }
`
