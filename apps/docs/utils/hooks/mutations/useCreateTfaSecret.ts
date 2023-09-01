import { CREATE_TFA_SECRET } from '@core/graphql/mutations'
import { CreateTfaSecretResponse } from '@core/graphql/types'
import useMutation from '../useMutation'

export const useCreateTfaSecret = () => {
  return useMutation<{ createTfaSecret: CreateTfaSecretResponse }>(CREATE_TFA_SECRET)
}
