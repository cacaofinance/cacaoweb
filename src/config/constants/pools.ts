import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'SPC',
    tokenAddress: '0x82D62d4073eCDcfB650752D73f42834474CaF0cE',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x82D62d4073eCDcfB650752D73f42834474CaF0cE',
    contractAddress: {
      97: '0xEA0884521490Ad7aE457300eab59F85D4C53BF5C',
      56: '0x3EF9E4821B35Aba65cdA7247C55696bCBF5e6DA7',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://svy.finance/',
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  // {
  //   sousId: 7,
  //   tokenName: 'BUSD',
  //   tokenAddress: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  //   stakingTokenName: QuoteToken.CAKE,
  //   stakingTokenAddress: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  //   contractAddress: {
  //     97: '0xEA0884521490Ad7aE457300eab59F85D4C53BF5C',
  //     56: '0x3EF9E4821B35Aba65cdA7247C55696bCBF5e6DA7',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://svy.finance/',
  //   harvest: true,
  //   tokenPerBlock: '1',
  //   sortOrder: 1,
  //   isFinished: false,
  //   tokenDecimals: 18,
  // },
]

export default pools
