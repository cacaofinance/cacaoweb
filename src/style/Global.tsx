import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    background-size: cover;
    background-image: url('/images/background1.jpg');
    img {
      height: auto;
      max-width: 100%;
    }
    @media only screen and (max-width: 620px) and (min-width: 501px) {  
      background-image: none;
      background: rgb(248,206,46);
      background: radial-gradient(circle, rgba(248,206,46,0.9920343137254902) 0%, rgba(122,74,65,1) 62%);
    }  
    @media only screen and (max-width: 500px) and (min-width: 341px) {  
      background-image: none;
      background: rgb(248,206,46);
      background: radial-gradient(circle, rgba(248,206,46,0.9920343137254902) 0%, rgba(122,74,65,1) 62%);
    }  
    @media only screen and (max-width: 340px) and (min-width: 5px)  {  
      background-image: none;
      background: rgb(248,206,46);
      background: radial-gradient(circle, rgba(248,206,46,0.9920343137254902) 0%, rgba(122,74,65,1) 62%);
      
    } 
  }
`

export default GlobalStyle
