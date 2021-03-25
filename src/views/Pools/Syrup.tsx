import React, { useState, useMemo } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import { Heading } from '@pancakeswap-libs/uikit'
import orderBy from 'lodash/orderBy'
import partition from 'lodash/partition'
import useI18n from 'hooks/useI18n'
import { usePools, useBlock } from 'state/hooks'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import PoolCard from './components/PoolCard'
import PoolTabButtons from './components/PoolTabButtons'
import Divider from './components/Divider'

const Farm: React.FC = () => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const { account } = useWeb3React()
  const pools = usePools(account)
  const { blockNumber } = useBlock()
  const [stackedOnly, setStackedOnly] = useState(false)

  const [finishedPools, openPools] = useMemo(
    () => partition(pools, (pool) => pool.isFinished || blockNumber > pool.endBlock),
    [blockNumber, pools],
  )
  const stackedOnlyPools = useMemo(
    () => openPools.filter((pool) => pool.userData && new BigNumber(pool.userData.stakedBalance).isGreaterThan(0)),
    [openPools],
  )

  return (
    <>
    <Header>
        <Heading as="h1" size="xl" color="primary" mb="24px">
          {TranslateString(999, 'CACAO Pool')}
        </Heading>
        <Heading size="md" color="primary">
          {TranslateString(999, 'Stake CACAO to earn CACAO.')}
          <br />
          {TranslateString(999, 'You can unstake at any time.')}
          <br />
          {TranslateString(999, 'Rewards are calculated per block.')}
        </Heading>
      </Header>
    <Page>
      
      <FlexLayout>
        <Route exact path={`${path}`}>
          <>
            {stackedOnly
              ? orderBy(stackedOnlyPools, ['sortOrder']).map((pool) => <PoolCard key={pool.sousId} pool={pool} />)
              : orderBy(openPools, ['sortOrder']).map((pool) => <PoolCard key={pool.sousId} pool={pool} />)}
          </>
        </Route>

      </FlexLayout>
    </Page>
    </>
  )
}
const Header = styled.div`
  padding: 32px 0px;
  background: transparent;
  text-align:center;
  margin-top: 64px;
  padding-left: 16px;
  padding-right: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 24px;
    padding-right: 24px;
  }
`
const Hero = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr;
  margin-left: auto;
  margin-right: auto;
  max-width: 250px;
  padding: 48px 0;
  text-align: center;
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-size: 16px;
    li {
      margin-bottom: 4px;
    }
  }
  img {
    height: auto;
    max-width: 100%;
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    margin: 0;
    max-width: none;
  }
`

export default Farm
