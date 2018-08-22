import React from 'react'
import styled from 'styled-components'

import SillySillyMan from './silly-silly-man'
import CoffeeDrip from './coffee-drip'
import CoffeePot from './coffee-pot'

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 100%
  width: 100%;
  overflow: hidden;

  > *:first-child {
    position: absolute;
    left: 50%;
    top: 15%;
  }

  > *:nth-child(2) {
    position: absolute;
    left: 45%;
    width: 40%;
  }

  > *:nth-child(3) {
    position: absolute;
    left: 4%;
    bottom: 20px;
    width: 60%;
    transform: rotate(-45deg);
  }
`

const MeAtWork = ({ animate }) => (
  <Wrapper>
    <CoffeeDrip animate={animate} />
    <CoffeePot />
    <SillySillyMan animate={animate} />
  </Wrapper>
)

export default MeAtWork
