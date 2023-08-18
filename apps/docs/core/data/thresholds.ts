import { DailyLimitBreakpoint } from '@core/graphql/types'

export const thresholds = [
  {
    label: '25% of total daily limit',
    value: DailyLimitBreakpoint.Quarter,
  },
  {
    label: '50% of total daily limit',
    value: DailyLimitBreakpoint.Half,
  },
  {
    label: '75% of total daily limit',
    value: DailyLimitBreakpoint.ThreeQuarters,
  },
  {
    label: '100% of total daily limit',
    value: DailyLimitBreakpoint.Full,
  },
]
