import { gql } from '@apollo/client'

export const ONBOARDING_FIELDS = gql`
  fragment onboardingFields on Onboarding {
    id
    clientType
    custodyEntity
    form {
      stepNum
      fields {
        ... on GroupField {
          type
          label
          value {
            ... on TextField {
              type
              label
              value
            }

            ... on FileField {
              type
              label
              value
            }

            ... on MobileField {
              type
              label
              mobile: value {
                code
                number
              }
            }

            ... on CountryField {
              type
              label
              country: value {
                countryCode
                countryName
              }
            }

            ... on AddressField {
              type
              label
              address: value {
                city
                state
                zipCode
              }
            }

            ... on GroupField {
              type
              label
              values: value {
                ... on TextField {
                  type
                  label
                  value
                }

                ... on FileField {
                  type
                  label
                  value
                }
              }
            }
          }
        }
      }
    }

    additionalInfos {
      note
      fields {
        ... on TextField {
          type
          label
          value
          hint
        }

        ... on FileField {
          type
          label
          value
          hint
        }
      }
    }
  }
`
