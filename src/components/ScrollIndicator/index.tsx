import React from 'react'
import { ScrollIndicatorContainer, ArrowIcon } from './styles'
import arrowIcon from '../../assets/ArrowCircleDown.png'

type ScrollIndicatorProps = {
  size?: number
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ size = 40 }) => {
  return (
    <ScrollIndicatorContainer size={size}>
      <ArrowIcon src={arrowIcon} alt="Scroll down" />
    </ScrollIndicatorContainer>
  )
}

export default ScrollIndicator

