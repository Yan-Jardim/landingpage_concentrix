import styled from 'styled-components'

export const CardContainer = styled.div<{ backgroundImage?: string }>`
  background: #22252A;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  position: relative;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    background: ${({ backgroundImage }) =>
      backgroundImage ? `url(${backgroundImage})` : '#22252A'};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 450px;
    height: 397px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        to bottom,
        rgba(34, 37, 42, 0.8) 0%,
        rgba(34, 37, 42, 0.6) 50%,
        rgba(34, 37, 42, 0.4) 100%
      );
      z-index: 1;
    }

    & > * {
      position: relative;
      z-index: 2;
    }
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }
`

export const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: none;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
  }
`

export const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const Tag = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 100%;
  letter-spacing: 0%;
  margin: 0;
`

export const CardTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 100%;
  letter-spacing: 0%;
  margin: 0;
`

