import { Dialog, IconBtn, Table } from '@components/UI'
import { WhitelistedWallet } from '@core/graphql/types'
import FactCheckIcon from '@mui/icons-material/FactCheck'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { formatAddress } from '@utils/format'
import React, { useState } from 'react'

const configs = [
  {
    header: 'Name',
    render: (data: WhitelistedWallet) => <>{data.name}</>,
  },
  {
    header: 'Address',
    render: (data: WhitelistedWallet) => <>{formatAddress(data.address)}</>,
  },
]

interface WhitelistBtnProps {
  name: string
  list?: WhitelistedWallet[] | null
}

const WhitelistBtn: React.FC<WhitelistBtnProps> = ({ name, list }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <IconBtn onClick={() => setOpen(true)}>
        <FactCheckIcon />
      </IconBtn>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <Stack gap="10px">
          <Typography variant="title">Whitelist</Typography>
          <Typography variant="subtitle1">Whitelist(s) Available For {name}</Typography>
        </Stack>

        <Table configs={configs} list={list || []} pagination={false} />
      </Dialog>
    </>
  )
}

export default WhitelistBtn
