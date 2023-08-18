import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'

interface LogResultProps {
  result: boolean
  reason?: string
}

const LogResult: React.FC<LogResultProps> = ({ result, reason }) => {
  return (
    <Stack direction="row" alignItems="center">
      {result === true && <CheckIcon color="success" />}

      {result === false && <CloseIcon color="error" />}

      {result === undefined && <HistoryToggleOffIcon />}

      {reason && (
        <Tooltip arrow title={reason}>
          <ErrorOutlineIcon fontSize="small" />
        </Tooltip>
      )}
    </Stack>
  )
}

export default LogResult
