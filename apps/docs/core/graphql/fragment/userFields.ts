import { gql } from '@apollo/client'
import { ONBOARDING_FIELDS } from './onboardingFields'

export const USER_FIELDS = gql`
  ${ONBOARDING_FIELDS}
  fragment userFields on User {
    role
    seqNo
    email
    mobile
    position
    lastName
    firstName
    hasSetTfa
    hasSetPassword
    onboarding {
      ...onboardingFields
    }
  }
`
