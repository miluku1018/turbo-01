import Typography from '@mui/material/Typography'

const stakingRule: { [key: string]: React.ReactNode } = {
  Avalanche: (
    <Typography component="ul" color="primary">
      Staking rules of Avalanche (AVAX)
      <li>Minimum delegation amount: 25 AVAX</li>
      <li>
        Maximum delegation amount: 5 times the amount the validator staked to activate the validator
        node so it varies depending on the node you select to make delegation to.
      </li>
      <li>Lock-up period: min 2 weeks / max 1 year</li>
    </Typography>
  ),
  Cosmos: (
    <Typography component="ul" color="primary">
      Staking rules of Cosmos (ATOM)
      <li>
        There is a 21-day unbonding process where the staked ATOMs do not earn rewards and cannot be
        transferred, exchanged or spent.
      </li>
      <li>Rewards are distributed automatically every block.</li>
      <li>New delegation is required for compounding.</li>
    </Typography>
  ),
}

export default stakingRule
