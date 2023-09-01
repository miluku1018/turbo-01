import { UPDATE_ONBOARDING } from '@core/graphql/mutations'
import { Onboarding } from '@core/graphql/types'
import useMutation from '../useMutation'

export const useUpdateOnboarding = () => {
  return useMutation<{ updateOnboarding: Onboarding }, { id: string; field: any; stepNum: number }>(
    UPDATE_ONBOARDING,
  )
}
