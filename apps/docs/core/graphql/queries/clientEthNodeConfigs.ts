import { gql } from '@apollo/client'

export const CLIENT_ETH_NODE_CONFIGS = gql`
  query clientEthNodeConfigs(
    $clientId: UUID
    $isActivate: Boolean
    $offset: Int = 0
    $limit: Int = 10
  ) {
    clientEthNodeConfigs(
      clientId: $clientId
      isActivate: $isActivate
      offset: $offset
      limit: $limit
    ) {
      list {
        id
        ethNode {
          id
          type
          name
        }
      }
    }
  }
`
