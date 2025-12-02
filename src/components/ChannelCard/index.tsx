import React from 'react'
import { CardContainer, IconWrapper, IconImage, Tag, CardTitle } from './styles'
import { ChannelCardProps } from './types'

const ChannelCard: React.FC<ChannelCardProps> = ({
  title,
  tag,
  iconImage,
  backgroundImage,
}) => {
  return (
    <CardContainer backgroundImage={backgroundImage}>
      <IconWrapper>
        {iconImage && <IconImage src={iconImage} alt={title} />}
      </IconWrapper>
      {tag && <Tag>{tag}</Tag>}
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  )
}

export default ChannelCard

