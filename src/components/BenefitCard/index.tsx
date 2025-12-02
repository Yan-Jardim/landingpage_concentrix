import React from 'react'
import {
  CardContainer,
  IconWrapper,
  IconImage,
  CardTitle,
  CardDescription,
} from './styles'
import {BenefitCardProps} from './types'

const BenefitCard: React.FC<BenefitCardProps> = ({
  title,
  description,
  variant = 'default',
  icon,
  image,
}) => {
  return (
    <CardContainer variant={variant}>
      {variant === 'highlight' ? (
        <>
          <CardTitle variant={variant}>{title}</CardTitle>
          <CardDescription variant={variant}>{description}</CardDescription>
          <IconWrapper variant={variant}>
            {image ? (
              <IconImage src={image} alt={title} />
            ) : icon ? (
              icon
            ) : (
              '💼'
            )}
          </IconWrapper>
        </>
      ) : (
        <>
          <CardTitle variant={variant}>{title}</CardTitle>
          <IconWrapper variant={variant}>
            {image ? (
              <IconImage src={image} alt={title} />
            ) : icon ? (
              icon
            ) : (
              '💼'
            )}
          </IconWrapper>
          <CardDescription variant={variant}>{description}</CardDescription>
        </>
      )}
    </CardContainer>
  )
}

export default BenefitCard

