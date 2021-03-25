import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledTotalLiquidity = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  
  background-color: rgba(78, 161, 72, 0.3);
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const TVL = styled.div`
  text-align:center;
  margin-top:10px;
`

const TotalLiquidity = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0

  return (
    <StyledTotalLiquidity>
      <CardBody>        
        <TVL>
          <Heading size="xl" mb="24px">
            {TranslateString(534, 'Total Value Locked')}
          </Heading>
          <Heading size="lg" mb="24px">
            {TranslateString(534, '$1,500,000')}
          </Heading>
        </TVL>
        
      </CardBody>
    </StyledTotalLiquidity>
  )
}

export default TotalLiquidity
