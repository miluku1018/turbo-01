import { gql } from '@apollo/client'

export const CLIENT_STAKING_NODE_CONFIGS = gql`
  query clientStakingNodeConfigs(
    $limit: Int = 10
    $offset: Int = 0
    $network: Network
    $clientId: UUID
  ) {
    clientStakingNodeConfigs(
      limit: $limit
      offset: $offset
      network: $network
      clientId: $clientId
    ) {
      total
      list {
        node {
          id
          name
        }
      }
    }
  }
`
