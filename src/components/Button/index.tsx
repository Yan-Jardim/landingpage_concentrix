import React from 'react'
import { ButtonBase } from './styles'
import { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'large',
  children,
  disabled = false,
  onClick,
  type = 'button',
  fullWidth = false,
}) => {
  return (
    <ButtonBase
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      type={type}
      fullWidth={fullWidth}
    >
      {children}
    </ButtonBase>
  )
}

export default Button