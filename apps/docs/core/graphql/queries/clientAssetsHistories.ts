import { gql } from '@apollo/client'

export const CLIENT_ASSETS_HISTORIES = gql`
  query clientAssetsHistories($startsAt: DateTime!, $endsAt: DateTime!) {
    clientAssetsHistories(startsAt: $startsAt, endsAt: $endsAt) {
      auc
      createdAt
    }
  }
`
