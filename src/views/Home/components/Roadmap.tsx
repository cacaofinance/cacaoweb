import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'

const StyledRoadmap = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  
  background-color: rgba(78, 161, 72, 0.3);
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-top: 20px;
  @media only screen and (max-width: 620px) and (min-width: 501px) {  
      margin-top: 100px;
    }  
    @media only screen and (max-width: 500px) and (min-width: 341px) {  
      margin-top: 100px;
    }  
    @media only screen and (max-width: 340px) and (min-width: 5px)  {  
      margin-top: 100px;
    } 
`

const Roadmap = () => {

  return (
      <Row>
        <img src="/images/roadmap2.png" alt="" />
      </Row>
  )
  
  
  
}

export default Roadmap
