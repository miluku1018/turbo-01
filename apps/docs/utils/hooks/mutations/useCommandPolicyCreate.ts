import { COMMAND_POLICY_CREATE } from '@core/graphql/mutations'
import { CommandPolicyCreateInput, PolicyCreateCommand } from '@core/graphql/types'
import useMutation from '../useMutation'

export const useCommandPolicyCreate = () => {
  return useMutation<
    { commandPolicyCreate: PolicyCreateCommand },
    { input: CommandPolicyCreateInput }
  >(COMMAND_POLICY_CREATE)
}
