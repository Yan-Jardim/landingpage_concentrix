import React from 'react'
import { ButtonVariant, ButtonSize } from './styles'

export type { ButtonVariant, ButtonSize }

export type ButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
}