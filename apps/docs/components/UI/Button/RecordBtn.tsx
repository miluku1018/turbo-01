import { Dialog, IconBtn, Table } from '@components/UI'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'

interface RecordBtnProps {
  data?: any[]
}

const configs = [
  {
    header: 'Name',
  },
  {
    header: 'Action',
  },
  {
    header: 'Date',
  },
  {
    header: 'Status',
  },
]

const RecordBtn: React.FC<RecordBtnProps> = ({ data }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <IconBtn onClick={() => setOpen(true)}>
        <AutoStoriesIcon />
      </IconBtn>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <Stack gap="10px">
          <Typography variant="title">Record</Typography>
          <Typography variant="subtitle1">Record Of Approval For This Transaction</Typography>
        </Stack>

        <Table configs={configs} list={data} pagination={false} />
      </Dialog>
    </>
  )
}

export default RecordBtn
