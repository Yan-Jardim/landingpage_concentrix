import styled from 'styled-components'

export const FaqItemContainer = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  transition: all 0.2s ease;

  &:last-child {
    border-bottom: none;
  }
`

export const QuestionHeader = styled.button<{ isOpen: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  background: transparent;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
`

export const QuestionText = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 24px;
  letter-spacing: 0%;
  margin: 0;
  flex: 1;
  padding-right: ${({ theme }) => theme.spacing.md};
`

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.2s ease;
`

export const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const AnswerContainer = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? '5000px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
`

export const AnswerContent = styled.div`
  padding: 0 0 20px 0;
  background: transparent;
`

export const AnswerText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 22px;
  letter-spacing: 0%;
  margin: 0;
`

