import { gql } from '@apollo/client'

export const TOKEN_QUOTES = gql`
  query tokenQuotes($symbols: [String!]!) {
    tokenQuotes(symbols: $symbols) {
      symbol
      priceInUsd
    }
  }
`
