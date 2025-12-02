import React from 'react'
import { ButtonBase, ButtonVariant, ButtonSize } from './styles'

type ButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
}

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

