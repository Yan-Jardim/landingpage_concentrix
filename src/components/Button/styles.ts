import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary'
export type ButtonSize = 'small' | 'large'

export const ButtonBase = styled.button<{
  variant: ButtonVariant
  size: ButtonSize
  disabled?: boolean
  fullWidth?: boolean
}>`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  white-space: nowrap;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  /* Size variants */
  ${({ size }) =>
    size === 'small'
      ? `
    height: 44px;
    padding: 12px 10px;
  `
      : `
    height: 52px;
    padding: 10px;
  `}

  /* Primary variant */
  ${({ variant, disabled }) =>
    variant === 'primary' &&
    !disabled &&
    `
    background: #039DB7;
    color: #FFFFFF;
    
    &:hover {
      background: #0A7D94;
    }
    
    &:active {
      background: #145365;
    }
    
    &:focus {
      background: #145365;
      border: 2px solid #00BED2;
      outline: none;
      box-shadow: 0 0 0 2px #00BED2;
    }
  `}

  /* Secondary variant */
  ${({ variant, disabled }) =>
    variant === 'secondary' &&
    !disabled &&
    `
    background: #FFFFFF;
    color: #004955;
    border: 1px solid #AEC0CB;
    
    &:hover {
      border-color: #8FA5B3;
    }
    
    &:active {
      background: #F5F5F5;
      border-color: #8FA5B3;
    }
    
    &:focus {
      border: 1px solid #039DB7;
      outline: none;
      box-shadow: 0 0 0 2px #00BED2;
    }
  `}

  /* Disabled state */
  ${({ disabled }) =>
    disabled &&
    `
    background: #E5E5E5;
    color: #CCCCCC;
    border: 1px solid #E5E5E5;
    cursor: not-allowed;
    
    &:hover, &:active, &:focus {
      background: #E5E5E5;
      color: #CCCCCC;
      border: 1px solid #E5E5E5;
    }
  `}
`

