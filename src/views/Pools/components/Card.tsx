import styled from 'styled-components'

const Card = styled.div<{ isActive?: boolean; isFinished?: boolean }>`
  background: white;
  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);
  border-radius: 25px;
  display: flex;
  color: ${({ isFinished, theme }) => theme.colors[isFinished ? 'textDisabled' : 'secondary']};
  box-shadow: ${({ isActive }) =>
    isActive
      ? '0px 0px 0px 1px #F3482b, 0px 0px 4px 8px rgba(144,73,133, 0.4);'
      : '0px 2px 12px -8px rgba(144,73,133, 0.1), 0px 1px 1px rgba(144,73,133, 0.05)'};
  flex-direction: column;
  position: relative;
`

export default Card
