import { COMMAND_POLICY_UPDATE } from '@core/graphql/mutations'
import { CommandPolicyUpdateInput, CommandPolicyUpdateResponse } from '@core/graphql/types'
import useMutation from '../useMutation'

export const useCommandPolicyUpdate = () => {
  return useMutation<
    { commandPolicyUpdate: CommandPolicyUpdateResponse },
    { policyId: string; input: CommandPolicyUpdateInput }
  >(COMMAND_POLICY_UPDATE)
}
