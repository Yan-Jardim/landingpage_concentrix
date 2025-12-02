import React, { useState } from 'react'
import {
  FaqItemContainer,
  QuestionHeader,
  QuestionText,
  IconWrapper,
  IconImage,
  AnswerContainer,
  AnswerContent,
  AnswerText,
} from './styles'
import openIcon from '../../assets/Open.png'
import closeIcon from '../../assets/Close.png'
import { FaqItemProps } from './types'

const FaqItem: React.FC<FaqItemProps> = ({
  question,
  answer,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const toggleOpen = (): void => {
    setIsOpen(!isOpen)
  }

  const itemId = `faq-item-${question.slice(0, 10).toLowerCase().replace(/\s+/g, '-')}`

  return (
    <FaqItemContainer>
      <QuestionHeader
        isOpen={isOpen}
        onClick={toggleOpen}
        type="button"
        aria-expanded={isOpen}
        aria-controls={itemId}
        id={`${itemId}-button`}
      >
        <QuestionText>{question}</QuestionText>
        <IconWrapper>
          <IconImage
            src={isOpen ? closeIcon : openIcon}
            alt={isOpen ? 'Fechar' : 'Abrir'}
            aria-hidden="true"
          />
        </IconWrapper>
      </QuestionHeader>
      <AnswerContainer
        isOpen={isOpen}
        id={itemId}
        role="region"
        aria-labelledby={`${itemId}-button`}
      >
        <AnswerContent>
          <AnswerText>{answer}</AnswerText>
        </AnswerContent>
      </AnswerContainer>
    </FaqItemContainer>
  )
}

export default FaqItem

