import { CopyField, Dialog, TokenImage } from '@components/UI'
import { NetworkInfo } from '@core/graphql/types'
import QrCodeIcon from '@mui/icons-material/QrCode'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import QRCode from 'qrcode'
import React, { useState } from 'react'
import IconBtn from './IconBtn'

interface QrCodeBtnProps {
  name: string
  value: string
  networkInfo: NetworkInfo
}

const style = {
  network: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',
  },
  imgWrapper: {
    position: 'relative',
    width: '200px',
    height: '200px',
    m: 'auto',
  },
}

const QrCodeBtn: React.FC<QrCodeBtnProps> = ({ name, value, networkInfo }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [data, setData] = useState<string>()

  const handleOpen = async () => {
    const qrCode = await QRCode.toDataURL(value)
    setOpen(true)
    setData(qrCode)
  }

  return (
    <>
      <IconBtn onClick={handleOpen}>
        <QrCodeIcon />
      </IconBtn>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <Stack gap="8px">
          <Typography variant="title">{name}</Typography>

          <Box sx={style.network}>
            <TokenImage name={networkInfo.coin} />
            <Typography variant="subtitle1">{networkInfo.name}</Typography>
          </Box>

          <Box sx={style.imgWrapper}>{data && <Image src={data} alt="qrCode" layout="fill" />}</Box>
        </Stack>

        <CopyField label="Your Custody Wallet Address" value={value} />

        <Typography variant="body2">
          Avoid typing addresses, tap the icon to copy instead. Note that funds sent to the wrong
          address might be lost permanently and it is your responsibility to ensure the correct
          currency is sent through the correct blockchain network. Sending any token other than the
          tokens this address is supposed to hold will result in it being lost forever.
        </Typography>
      </Dialog>
    </>
  )
}

export default QrCodeBtn
