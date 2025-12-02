import styled from 'styled-components'

export const CardContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  width: 280px;
  max-width: 280px;
  min-width: 280px;
  height: 460px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0;
  box-sizing: border-box;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 330px;
    max-width: 330px;
    min-width: 330px;
    margin: 0;
    height: 460px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }
`

export const StepNumber = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 48.83px;
  font-weight: 700;
  color: #D0DAE1;
  line-height: 100%;
  letter-spacing: 0%;
  margin: 0;
  margin-bottom: 20px;
`

export const CardTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 31.25px;
  font-weight: 600;
  color: #405564;
  line-height: 100%;
  letter-spacing: 0%;
  margin: 0;
  margin-bottom: 12px;
`

export const CardDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #5E6D7C;
  line-height: 22px;
  letter-spacing: 0%;
  margin: 0;
  flex: 1;
`

export const StepImage = styled.img`
  width: 161px;
  height: 161px;
  max-width: 161px;
  object-fit: contain;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
`

