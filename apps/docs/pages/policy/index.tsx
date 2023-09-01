import { PolicyAddBtn, PolicyTable } from '@components/Policy'
import { ActionBar, AuthLayout, Paper, SearchField, TooltipIcon } from '@components/UI'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { usePolicies } from '@utils/hooks'
import Head from 'next/head'
import { ReactElement } from 'react'

const Policy = () => {
  const { data, loading, refetch } = usePolicies()

  return (
    <>
      <Head>
        <title>Policy</title>
        <meta name="description" content="Policy" />
      </Head>

      <Stack direction="row" alignItems="center" gap="10px">
        <Typography variant="h1">Policy</Typography>
        <TooltipIcon
          sx={{ fontSize: '16px' }}
          icon={HelpOutlineIcon}
          title="Transactional requests (e.g. withdrawals) follow the policy assigned to the wallet/bank used to initiate the request. Non-transactional requests (e.g. wallet creation, policy creation) follow Global Policy which requires approval from >50% of active users."
        />
      </Stack>

      <ActionBar>
        <PolicyAddBtn />
        <SearchField />
      </ActionBar>

      <Paper>
        <PolicyTable data={data} loading={loading} refetch={refetch} />
      </Paper>
    </>
  )
}

Policy.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default Policy
