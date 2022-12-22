import React from 'react'
import styled from 'styled-components'

const StackRow = ({children}) => {
  return (
    <StStack>
      {children}
    </StStack>
  )
}

export default StackRow
const StStack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;