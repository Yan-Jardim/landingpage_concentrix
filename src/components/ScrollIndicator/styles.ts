import styled from 'styled-components'

export const ScrollIndicatorContainer = styled.div<{ size: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(2px);
  }
`

export const ArrowIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

