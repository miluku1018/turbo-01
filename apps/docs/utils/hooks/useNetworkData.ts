import { Coin, Network } from '@core/graphql/types'

interface NetworkData {
  coin: Coin
  name: string
  network: Network
  netType: 'Mainnet' | 'Testnet'
}

const netType = process.env.NEXT_PUBLIC_NET_TYPE || 'Testnet'

const networks: NetworkData[] = [
  {
    coin: Coin.Eth,
    name: 'Ethereum',
    network: Network.EthereumMainnet,
    netType: 'Mainnet',
  },
  {
    coin: Coin.Eth,
    name: 'Goerli',
    network: Network.EthereumGoerli,
    netType: 'Testnet',
  },
]

const networksWithNetType = networks.filter(item => item.netType === netType)

const useNetworkData = () => {
  const data = {} as { [key: string]: NetworkData }

  networksWithNetType.forEach(item => {
    data[item.coin] = item
  })

  return { data }
}

export { netType, networksWithNetType }
export type { NetworkData }
export default useNetworkData
