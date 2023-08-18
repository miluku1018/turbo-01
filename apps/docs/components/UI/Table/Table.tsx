import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import MuiTable, { TableProps as MuiTableProps } from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import { styled } from '@mui/material/styles'
import React, { useEffect, useState } from 'react'
import { TooltipIcon } from '../Icon'
import TableHeadCell from './TableHeadCell'
import TablerowExpansion from './TableRowExpansion'

enum Alignment {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
  JUSTIFY = 'justify',
}

interface Page {
  rows: number
  index: number
}

interface Config {
  header: string
  hidden?: boolean
  tooltip?: string
  alignment?: Alignment
  render?: React.ComponentType<any>
}

interface TableProps extends MuiTableProps {
  configs: Config[]
  list?: any[]
  total?: number
  loading?: boolean
  pagination?: boolean
  rowExpansion?: React.ComponentType<any>
  onPageChange?: (page: Page) => void
}

const StyledTable = styled('div')({
  '& .MuiTableCell-root': {
    fontSize: '14px',
    whiteSpace: 'nowrap',
  },
  '& .MuiCollapse-wrapper': {
    padding: '16px 0',
  },
  '& .MuiTablePagination-selectLabel': {
    fontSize: '14px',
  },
  '& .MuiTablePagination-displayedRows': {
    fontSize: '14px',
  },
})

const Table: React.FC<TableProps> = ({
  configs,
  list = [],
  total = 0,
  loading = false,
  pagination = true,
  rowExpansion: RowExpansion,
  onPageChange,
  ...props
}) => {
  const [rows, setRows] = useState(10)
  const [page, setPage] = useState(0)
  const [count, setCount] = useState(total)

  const visibleConfigs = configs.filter(config => !config.hidden)

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage)
    onPageChange?.({ rows: rows, index: newPage })
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0)
    setRows(+event.target.value)
    onPageChange?.({ rows: +event.target.value, index: 0 })
  }

  useEffect(() => {
    if (total) setCount(total)
  }, [total])

  return (
    <StyledTable>
      <TableContainer>
        <MuiTable {...props}>
          <TableHead>
            <TableRow>
              {RowExpansion && <TableHeadCell />}
              {visibleConfigs.map(({ header, tooltip, alignment }) => (
                <TableHeadCell key={header} align={alignment}>
                  {header} {tooltip && <TooltipIcon icon={HelpOutlineIcon} title={tooltip} />}
                </TableHeadCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {(loading ? [0, 1, 2, 3, 4] : list).map((rowData, index) => (
              <TablerowExpansion
                key={index}
                configs={visibleConfigs}
                rowData={rowData}
                loading={loading}
                rowExpansion={RowExpansion}
              />
            ))}

            {!loading && list.length === 0 && (
              <TableRow>
                <TableCell colSpan={visibleConfigs.length} align="center">
                  No Data.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </MuiTable>
      </TableContainer>

      {pagination && (
        <TablePagination
          component="div"
          size="small"
          page={page}
          count={count}
          rowsPerPage={rows}
          rowsPerPageOptions={[10, 25, 100]}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </StyledTable>
  )
}

export { Alignment }
export type { Config }
export default Table
