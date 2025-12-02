import React from 'react'
import { InputContainer, InputLabel, InputField, ErrorMessage } from './styles'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  disabled = false,
  id,
  ...rest
}) => {
  return (
    <InputContainer>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <InputField
        id={id}
        disabled={disabled}
        hasError={!!error}
        {...rest}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  )
}

export default Input

