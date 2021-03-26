import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'

const StyledCountdown = styled('div')`
  iframe .demo img{
      display:none;
  }
`

const Countdown = () => {
  
  return (
  <StyledCountdown>
      <iframe title="count" src="https://free.timeanddate.com/countdown/i7qi0n5l/cf111/cm0/cu4/ct0/cs1/ca0/co1/cr0/ss0/cacfff/cpc000/pct/tc6d423c/fs150/szw448/szh189/tatTime%20left%20to%20Launch/tacfff/tptTime%20since%20Event%20started%20in/tpcfff/iso2021-03-30T00:00:00" width="450" height="191" />

      </StyledCountdown>
  )
}

export default Countdown
