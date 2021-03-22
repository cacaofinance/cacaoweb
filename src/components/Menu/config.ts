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
        label: 'Exchange SVY',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x93af74C2DBD8C6bb2D2914C243e0271781A5F465',
      },
      {
        label: 'Liquidity SVY',
        href: 'https://exchange.pancakeswap.finance/#/add/0x93af74c2dbd8c6bb2d2914c243e0271781a5f465/ETH',
      },
      {
        label: 'Exchange SPC',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x82D62d4073eCDcfB650752D73f42834474CaF0cE',
      },
      {
        label: 'Liquidity SPC',
        href: 'https://exchange.pancakeswap.finance/#/add/0x82D62d4073eCDcfB650752D73f42834474CaF0cE/ETH',
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
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: '/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: '/profile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://pancakeswap.info',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://pancakeswap.info/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://pancakeswap.info/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://pancakeswap.info/accounts',
  //     },
  //   ],
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  // {
  //   label: 'Social Media',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Twitter',
  //       href: 'https://twitter.com/SViolenceToken',
  //     },
  //     {
  //       label: 'Telegram English',
  //       href: 'http://bit.ly/3rCpo0B',
  //     },
  //     {
  //       label: 'Telegram Spanish',
  //       href: 'https://t.me/YViolence',
  //     },
  //     // {
  //     //   label: 'Blog',
  //     //   href: 'https://pancakeswap.medium.com',
  //     // },
  //   ],
  // },
]

export default config
