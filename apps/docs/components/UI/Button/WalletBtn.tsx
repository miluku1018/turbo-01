import { Dialog, IconBtn, Table, TokenImage } from '@components/UI'
import { Wallet } from '@core/graphql/types'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { formatAddress } from '@utils/format'
import React, { useState } from 'react'

interface WalletBtnProps {
  subtitle?: string
  list: Wallet[]
}

const configs = [
  {
    header: 'Name',
    render: (data: Wallet) => (
      <Stack direction="row" alignItems="center" gap="5px">
        <TokenImage name={data.networkInfo.coin} />
        {data.name}
      </Stack>
    ),
  },
  {
    header: 'Address',
    render: (data: Wallet) => <>{formatAddress(data.address)}</>,
  },
]

const WalletBtn: React.FC<WalletBtnProps> = ({ subtitle, list }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <IconBtn onClick={() => setOpen(true)}>
        <AccountBalanceWalletIcon />
      </IconBtn>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <Stack gap="10px">
          <Typography variant="title">Associated Wallets</Typography>
          {subtitle && <Typography variant="subtitle1">{subtitle}</Typography>}
        </Stack>

        <Table configs={configs} list={list} pagination={false} />
      </Dialog>
    </>
  )
}

export default WalletBtn
