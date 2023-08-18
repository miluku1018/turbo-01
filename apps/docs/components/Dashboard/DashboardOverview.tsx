import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

interface DashboardOverviewProps {
  name: string
  num?: number
  sum?: number
}

const DashboardOverview: React.FC<DashboardOverviewProps> = ({ name, num, sum }) => {
  return (
    <>
      <Stack direction="row" alignItems="flex-end" gap="5px">
        {typeof num === 'number' ? (
          <Typography variant="title">{num}</Typography>
        ) : (
          <Skeleton variant="text" width={38} height={38} />
        )}

        {typeof sum === 'number' && (
          <Typography variant="subtitle1" color="text.secondary">
            / {sum}
          </Typography>
        )}
      </Stack>
      <Typography variant="note" color="text.secondary">
        {name}
      </Typography>
    </>
  )
}

export default DashboardOverview
