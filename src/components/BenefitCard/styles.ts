import styled from 'styled-components'

export const CardContainer = styled.div<{ variant: 'default' | 'highlight' }>`
  background: ${({ theme, variant }) =>
    variant === 'highlight' ? '#4D697C' : theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 20px ${({ theme }) => theme.spacing.sm};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.lg};
    gap: ${({ theme }) => theme.spacing.md};
    max-width: none;
  }
  width: 100%;
  max-width: 280px;

  ${({ variant, theme }) =>
    variant === 'highlight' &&
    `
    @media (min-width: ${theme.breakpoints.tablet}) {
      padding: 40px 50px;
      border-radius: 16px;
    }
  `}

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }
`

export const IconWrapper = styled.div<{ variant: 'default' | 'highlight' }>`
  width: ${({ variant }) => (variant === 'highlight' ? '431px' : '130px')};
  height: ${({ variant }) => (variant === 'highlight' ? '504px' : '130px')};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  @media (max-width: 767px) {
    width: ${({ variant }) => (variant === 'highlight' ? '120px' : '123px')};
    height: ${({ variant }) => (variant === 'highlight' ? '140px' : '122px')};
  }
`

export const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const CardTitle = styled.h3<{ variant?: 'default' | 'highlight' }>`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: ${({ variant }) => (variant === 'highlight' ? '#FFFFFF' : '#22252A')};
  margin: 0;
  line-height: 100%;
  letter-spacing: 0%;
`

export const CardDescription = styled.p<{ variant?: 'default' | 'highlight' }>`
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ variant }) => (variant === 'highlight' ? '40px' : '24px')};
  font-weight: 700;
  color: ${({ variant }) => (variant === 'highlight' ? '#FFFFFF' : '#22252A')};
  line-height: 100%;
  letter-spacing: 0%;
  margin: 0;

  @media (max-width: 767px) {
    font-size: ${({ variant }) => (variant === 'highlight' ? '20px' : '16px')};
  }

  ${({ variant, theme }) =>
    variant === 'highlight' &&
    `
    @media (min-width: ${theme.breakpoints.tablet}) {
      max-width: 350px;
      word-wrap: break-word;
    }
  `}
`

