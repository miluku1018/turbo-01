import { ApproverGroupTriggerCondition } from '@core/graphql/types'

export const triggerConditions = [
  {
    label: 'Every Transaction',
    value: ApproverGroupTriggerCondition.EveryTransaction,
  },
  {
    label: '25% of total daily limit',
    value: ApproverGroupTriggerCondition.Quarter,
  },
  {
    label: '50% of total daily limit',
    value: ApproverGroupTriggerCondition.Half,
  },
  {
    label: '75% of total daily limit',
    value: ApproverGroupTriggerCondition.ThreeQuarters,
  },
  {
    label: '100% of total daily limit',
    value: ApproverGroupTriggerCondition.Full,
  },
]
