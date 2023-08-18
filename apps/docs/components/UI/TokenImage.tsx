import { Coin } from '@core/graphql/types'
import Image from 'next/image'
import React from 'react'

interface TokenImageProps {
  name?: string
  size?: number
}

const dirPath = '/images/tokens'

const imgData: { [key: string]: string } = {
  [Coin.Eth]: 'ether.svg',
}

const TokenImage: React.FC<TokenImageProps> = ({ name = '', size = 20 }) => {
  const imgName = imgData[name] || name
  const imgPath = `${dirPath}/${imgName}`

  return (
    <Image priority={true} src={imgPath} alt={name} width={size} height={size} layout="fixed" />
  )
}

export default TokenImage
