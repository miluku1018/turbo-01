import { gql } from '@apollo/client'

export const APP_VERSION = gql`
  query appVersion {
    appVersion
  }
`
