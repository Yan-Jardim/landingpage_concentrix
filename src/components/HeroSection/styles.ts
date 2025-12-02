import styled from 'styled-components'

export const HeroSectionContainer = styled.section`
  width: 100%;
  padding: 90px 90px 40px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 500px;
    padding: 90px 90px 40px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-height: 608px;
    padding: 90px 90px 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 40px 20px;
  }
`

export const HeroContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  flex: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 40px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 920px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 40px;
  }
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  width: fit-content;
`

export const HeroTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const HeroTitleBox = styled.div`
  background: #126478;
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 20px;
  font-size: 40px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-family: 'Montserrat', sans-serif;
  line-height: 100%;
  letter-spacing: 0%;
  width: fit-content;
  display: inline-block;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 40px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 40px;
  }
`

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-shrink: 0;
  }
`

export const LearnMoreSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
  padding-top: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-top: 0;
  }
`

export const MouseIcon = styled.img`
  width: 32px;
  height: auto;
  filter: brightness(0) invert(1);
`

export const LearnMoreText = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`

