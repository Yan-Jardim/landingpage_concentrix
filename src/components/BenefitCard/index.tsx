import React from 'react'
import {
  CardContainer,
  IconWrapper,
  IconImage,
  CardTitle,
  CardDescription,
} from './styles'
import { BenefitCardProps } from './types'

const BenefitCard: React.FC<BenefitCardProps> = ({
  title,
  description,
  variant = 'default',
  icon,
  image,
}) => {
  const isHighlight = variant === 'highlight'

  const renderedIcon = image ? (
    <IconImage src={image} alt={title} />
  ) : (
    icon ?? ''
  )

  return (
    <CardContainer variant={variant}>
      <CardTitle variant={variant}>{title}</CardTitle>
      {isHighlight && <CardDescription variant={variant}>{description}</CardDescription>}
      <IconWrapper variant={variant}>{renderedIcon}</IconWrapper>
      {!isHighlight && <CardDescription variant={variant}>{description}</CardDescription>}
    </CardContainer>
  )
}

export default BenefitCard