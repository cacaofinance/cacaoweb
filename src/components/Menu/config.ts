import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange CACAO',
        href: 'https://exchange.cacaodefi.finance/#/swap?outputCurrency=0x93af74C2DBD8C6bb2D2914C243e0271781A5F465',
      },
      {
        label: 'Liquidity CACAO',
        href: 'https://exchange.cacaodefi.finance/#/add/0x93af74c2dbd8c6bb2d2914c243e0271781a5f465/BNB',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  }
]

export default config
