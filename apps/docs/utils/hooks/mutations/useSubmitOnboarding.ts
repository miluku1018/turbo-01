import { SUBMIT_ONBOARDING } from '@core/graphql/mutations'
import { Onboarding } from '@core/graphql/types'
import useMutation from '../useMutation'

export const useSubmitOnboarding = () => {
  return useMutation<{ submitOnboarding: Onboarding }, { id: string }>(SUBMIT_ONBOARDING)
}
