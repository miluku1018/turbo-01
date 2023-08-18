import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Collapse from '@mui/material/Collapse'
import Skeleton from '@mui/material/Skeleton'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import React, { useState } from 'react'
import { IconBtn } from '../Button'
import { Config } from './Table'
import TableCollapseCell from './TableCollapseCell'

interface TableRowExpansionProps<T = any> {
  configs: Config[]
  rowData?: T
  loading?: boolean
  rowExpansion?: React.ComponentType<T>
}

const TablerowExpansion: React.FC<TableRowExpansionProps> = ({
  configs,
  rowData,
  loading,
  rowExpansion: RowExpansion,
}) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <TableRow>
        {RowExpansion && (
          <TableCell width="32px" padding="none">
            <IconBtn size="small" disabled={loading} onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconBtn>
          </TableCell>
        )}
        {configs.map(({ header, alignment, render: Cell }) => (
          <TableCell key={header} align={alignment}>
            {loading ? <Skeleton variant="text" /> : Cell ? <Cell {...rowData} /> : '--'}
          </TableCell>
        ))}
      </TableRow>

      {RowExpansion && (
        <TableRow>
          <TableCollapseCell colSpan={configs.length + 1}>
            <Collapse unmountOnExit timeout="auto" in={open}>
              <RowExpansion rowData={rowData} />
            </Collapse>
          </TableCollapseCell>
        </TableRow>
      )}
    </>
  )
}

export type { TableRowExpansionProps }

export default TablerowExpansion
