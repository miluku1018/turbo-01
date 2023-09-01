import { AuthLayout, AutocompleteField, Paper } from '@components/UI'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import { ReactElement } from 'react'

const options = [
  {
    label: 'English',
    value: 'English',
  },
]

const Setting = () => {
  const onChange = (value?: any) => {
    console.log(value)
  }

  return (
    <>
      <Head>
        <title>Setting</title>
        <meta name="description" content="Setting" />
      </Head>

      <Typography variant="h1">Setting</Typography>

      <Paper>
        <Box maxWidth="500px">
          <AutocompleteField
            disabled
            label="System Language"
            value={options[0]}
            options={options}
            onChange={onChange}
          />
        </Box>
      </Paper>
    </>
  )
}

Setting.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default Setting
