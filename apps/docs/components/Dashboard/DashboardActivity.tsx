import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

interface DashboardActivityProps {
  name: string
  num?: number
}

const DashboardActivity: React.FC<DashboardActivityProps> = ({ name, num }) => {
  return (
    <Stack>
      {typeof num === 'number' ? (
        <Typography variant="title">{num}</Typography>
      ) : (
        <Skeleton variant="text" width={38} height={38} />
      )}

      <Typography variant="note" color="text.secondary">
        {name}
      </Typography>
    </Stack>
  )
}

export default DashboardActivity
