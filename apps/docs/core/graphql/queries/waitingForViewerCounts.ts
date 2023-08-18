import { gql } from '@apollo/client'

export const WAITING_FOR_VIEWER_COUNTS = gql`
  query waitingForViewerCounts {
    waitingForViewerCounts {
      onboardings
      operations {
        type
        count
      }
    }
  }
`
