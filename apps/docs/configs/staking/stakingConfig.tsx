import { FieldConfig } from '@core/types'
import { textValidated } from '@core/types/FieldConfig'

const stakingConfig: { [key: string]: FieldConfig[] } = {
  Avalanche: [
    {
      type: 'DATE',
      name: 'End Date',
      label: 'End Date',
      required: true,
      validated: textValidated,
      hint: (
        <>
          Start date will be the date this delegation request gets approved and executed. Please
          select an end date and note that you will not be able to move your staked AVAX before the
          selected end date.
        </>
      ),
    },
  ],
}

export default stakingConfig
