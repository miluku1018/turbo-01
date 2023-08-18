import { styled } from '@mui/material/styles'
import TableCell from '@mui/material/TableCell'

const TableHeadCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.background.default,
}))

export default TableHeadCell
