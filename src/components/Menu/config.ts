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
        label: 'Exchange',
        href: 'https://exchange.cacaodefi.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.cacaodefi.finance/#/add',
        // /bnb
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
  },
  {
    label: "CacaoPaper",
    icon: "PaperIcon",
    href: "/paper"
  },
  {
    label: "Roadmap",
    icon: "RoadmapIcon",
    href: "/roadmap"
  },
]

export default config
