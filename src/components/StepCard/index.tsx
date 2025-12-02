import React from 'react'
import {
  CardContainer,
  StepNumber,
  CardTitle,
  CardDescription,
  StepImage,
} from './styles'
import { StepCardProps } from './types'

const StepCard: React.FC<StepCardProps> = ({
  stepNumber,
  title,
  description,
  image,
}) => {
  return (
    <CardContainer>
      <StepNumber>{stepNumber}</StepNumber>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      {image && <StepImage src={image} alt={`${title} - ${description}`} />}
    </CardContainer>
  )
}

export default StepCard

