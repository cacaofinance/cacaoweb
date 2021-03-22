import styled, { DefaultTheme } from 'styled-components'
import { CardHeader as UIKitCardHeader } from '@pancakeswap-libs/uikit'

const getBackground = (theme: DefaultTheme) => {
  if (theme.isDark) {
    return 'linear-gradient(139.73deg, #142339 0%, #24243D 47.4%, #37273F 100%)'
  }

  return 'transparent'
}

const CardHeader = styled(UIKitCardHeader)`
  background: ${({ theme }) => getBackground(theme)};
  position: relative;
  text-align: center;
`

export default CardHeader
