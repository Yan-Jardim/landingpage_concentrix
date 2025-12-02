import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`

export const InputLabel = styled.label`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #5F6D72;
  display: block;
`

export const InputField = styled.input<{ hasError: boolean; disabled?: boolean }>`
  width: 100%;
  height: 52px;
  padding: 15px;
  border-radius: 4px;
  border: 1px solid #DBE0E9;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: #FFFFFF;
  transition: all 0.2s ease;

  &::placeholder {
    color: #9CA3AF;
    opacity: 1;
  }

  &:hover {
    border-color: ${({ hasError, disabled }) =>
      disabled ? '#DBE0E9' : hasError ? '#CC3262' : '#9CA3AF'};
  }

  &:focus {
    outline: none;
    border-color: ${({ hasError, disabled }) =>
      disabled ? '#DBE0E9' : hasError ? '#CC3262' : '#00BED2'};
    box-shadow: 0 0 0 2px
      ${({ hasError, disabled }) =>
        disabled ? 'transparent' : hasError ? 'rgba(204, 50, 98, 0.2)' : 'rgba(0, 190, 210, 0.2)'};
  }

  &:disabled {
    background: #F3F4F6;
    border-color: #DBE0E9;
    color: #9CA3AF;
    cursor: not-allowed;
  }

  ${({ hasError, disabled }) =>
    hasError &&
    !disabled &&
    `
    background: #FFEFF0;
    border-color: #CC3262;
    
    &:focus {
      background: #FFEFF0;
    }
  `}
`

export const ErrorMessage = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #CC3262;
  line-height: 20px;
  margin-top: 4px;
`

