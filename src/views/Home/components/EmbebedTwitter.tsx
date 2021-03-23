import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'


const StyledEmbebedTwitter = styled(Card)`
  text-align:center;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const EmbebedTwitter = () => {
  const TranslateString = useI18n()

  return (
    <StyledEmbebedTwitter>
      <TwitterTimelineEmbed
            sourceType="profile"
            screenName="cacaofinance"
            options={{height: 400}}
            />
    </StyledEmbebedTwitter>
  )
}

export default EmbebedTwitter
