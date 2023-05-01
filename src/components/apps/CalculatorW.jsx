import React from 'react'
import { Calculator  } from 'react-mac-calculator'
import styled from 'styled-components'

const CalculatorStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const CalculatorW = () => {
  return (
    <CalculatorStyle>
      <Calculator/>
    </CalculatorStyle>
  )
}

export default CalculatorW