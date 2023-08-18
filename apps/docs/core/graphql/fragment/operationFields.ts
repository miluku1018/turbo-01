import { gql } from '@apollo/client'

export const OPERATION_FIELDS = gql`
  fragment operationFields on Operation {
    requestedAt
    requester {
      lastName
      firstName
    }

    reviewRecords {
      role
      state
      comment
      reviewedAt
      reviewer {
        lastName
        firstName
      }
    }

    executionRecord {
      endedAt
      succeeded
      message
    }
  }
`
