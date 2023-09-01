import { AutocompleteField, AutocompleteListField } from '@components/UI'
import { thresholds } from '@core/data'
import { FieldController } from '@core/types'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useUsers } from '@utils/hooks'
import { get } from 'lodash'
import { Controller } from 'react-hook-form'

const RequesterController: React.FC<FieldController> = ({ form, name, value, ...props }) => {
  const { control, errors } = form
  const error = get(errors, name)

  const { getOptions } = useUsers({ variables: { limit: 1000 } })
  const userOptions = getOptions({ isEditor: true })

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
            label="Requester(s)"
            options={userOptions}
            helperText={error?.users?.message}
            placeholder="Select User"
          />
        )}
      />

      <Box>
        <Controller
          name={`${name}.threshold`}
          control={control}
          defaultValue={value?.threshold}
          render={({ field }) => (
            <AutocompleteField
              {...props}
              {...field}
              label="Threshold"
              options={thresholds}
              helperText={error?.threshold?.message}
              placeholder="Select Max Amount Per Transaction"
            />
          )}
        />
        <Typography variant="hint" color="text.secondary" mt="5px">
          Threshold does NOT apply to NFT transactions. All requesters within the policy assigned to
          a custody wallet with NFTs can freely initiate NFT transactional requests.
        </Typography>
      </Box>
    </Stack>
  )
}

export default RequesterController
