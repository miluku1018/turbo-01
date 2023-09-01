import { AutocompleteField, AutocompleteListField, NumberField, TextField } from '@components/UI'
import { triggerConditions } from '@core/data'
import { FieldController } from '@core/types'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useUsers } from '@utils/hooks'
import { get } from 'lodash'
import { Controller, useWatch } from 'react-hook-form'

const style = {
  wrapper: {
    display: 'flex',
    gap: '10px',
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100px',
    height: '52px',
  },
}

const ApproverController: React.FC<FieldController> = ({ form, name, value, ...props }) => {
  const { control, errors } = form
  const users = useWatch({ control, name: `${name}.users` })
  const error = get(errors, name)

  const { getOptions } = useUsers({ variables: { limit: 1000 } })
  const options = getOptions({ isEditor: true })

  return (
    <Stack gap="30px">
      <Controller
        name={`${name}.users`}
        control={control}
        defaultValue={value?.users}
        render={({ field }) => (
          <AutocompleteListField
            {...props}
            {...field}
            label="Approver(s)"
            options={options}
            helperText={error?.users?.message}
            placeholder="Select User"
          />
        )}
      />

      <Controller
        name={`${name}.triggerCondition`}
        control={control}
        defaultValue={value?.triggerCondition}
        render={({ field }) => (
          <AutocompleteField
            {...props}
            {...field}
            label="Trigger Condition"
            options={triggerConditions}
            helperText={error?.triggerCondition?.message}
            placeholder="Select Threshold"
          />
        )}
      />

      <Box sx={style.wrapper}>
        <Controller
          name={`${name}.requiredSignature`}
          control={control}
          defaultValue={value?.requiredSignature}
          render={({ field }) => (
            <NumberField
              {...props}
              {...field}
              min={1}
              max={users?.length}
              label="Required Signature"
              helperText={error?.requiredSignature?.message}
              placeholder="Enter Whole Number"
            />
          )}
        />
        <Typography sx={style.text}>out of</Typography>
        <TextField disabled label="Total" value={users?.length} />
      </Box>
    </Stack>
  )
}

export default ApproverController
