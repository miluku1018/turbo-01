import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { createClient } from 'graphql-ws'
import possibleTypesResult from './possibleTypes'

const wsEndpoint = process.env.NEXT_PUBLIC_WS_ENDPOINT || ''

const wsLink = () => {
  return new GraphQLWsLink(
    createClient({
      url: `${wsEndpoint}/graphql`,
    }),
  )
}

const httpLink = new HttpLink({
  uri: '/graphql',
  credentials: 'include',
})

const link =
  typeof window === 'undefined'
    ? httpLink
    : split(
        ({ query }) => {
          const definition = getMainDefinition(query)
          return (
            definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
          )
        },
        wsLink(),
        httpLink,
      )

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache({ possibleTypes: possibleTypesResult.possibleTypes }),
})

export default client
