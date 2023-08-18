import { gql } from '@apollo/client'

export const NETWORK_INFO_FIELDS = gql`
  fragment networkInfoFields on NetworkInfo {
    id
    name
    coin
  }
`
