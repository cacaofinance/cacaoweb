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
      <iframe title="count" src="https://free.timeanddate.com/countdown/i7qih05n/n1079/cf12/cm0/cu4/ct0/cs0/ca0/co1/cr0/ss0/cac000/cpc000/pct/tcfff/fs100/szw448/szh189/tatTime%20left%20to%20launch/tac000/tptTime%20since%20Event%20started%20in/tpc000/iso2021-03-30T12:00:00/pa20" width="273" height="107" />

      </StyledCountdown>
  )
}

export default Countdown
