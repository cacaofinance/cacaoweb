import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import CakeStats from 'views/Home/components/CakeStats'
import EmbebedTwitter from 'views/Home/components/EmbebedTwitter'
import TotalValueLockedCard from './components/TotalValueLockedCard'

const ImageStyle = styled.div`
position: absolute;
  right: 70px; 
  top: 70px;
  @media only screen and (max-width: 620px) and (min-width: 501px) {  
    right: -55px !important;
    width: 135px;
  }  
  @media only screen and (max-width: 500px) and (min-width: 341px) {  
    right: -55px !important;
    width: 135px;
  }  
  @media only screen and (max-width: 340px) and (min-width: 5px)  {  
    right: -55px !important;
    width: 135px;
  } 

`

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/pan-bg-mobile.svg');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  margin-top: 64px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/pan-bg2.svg'), url('/images/pan-bg.svg');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
      background: white;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <ImageStyle>
          <img src="/images/logoT.png" className="imgLogo" alt="" width="300" />
        </ImageStyle>
        
        <Heading as="h1" size="xl" color="primary">
          {TranslateString(576, 'CACAO Finance')}
        </Heading>
        <Text color="primary">{TranslateString(578, 'Smart agriculture for smart people')}</Text>
<Text color="primary">{TranslateString(578, 'The before and after of passive earnings on the Binance Smart Chain.')}</Text>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <EmbebedTwitter />
        </Cards>
        <Cards>
          <CakeStats />
          <TotalValueLockedCard />
          </Cards>
      </div>
    </Page>
  )
}

export default Home
