import styled from 'styled-components'

export const ChannelsSectionContainer = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl} 0;


  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing['2xl']} 0;
  }
`

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`

export const SectionTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.headingM};
  font-weight: 700;
  color: #373B42;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: 100%;
  letter-spacing: 0%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.headingL};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 40px;
  }
`

export const SectionSubtitle = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
  font-weight: 400;
  color: #454D59;
  max-width: 600px;
  margin: 0 auto;
  line-height: 100%;
  letter-spacing: 0%;
`

export const CardsContainer = styled.div`
  display: none; /* Hidden on mobile and tablet */

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: row;
    gap: 18px;
    justify-content: center;
  }
`

export const ScrollWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding-top: ${({ theme }) => theme.spacing.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: ${({ theme }) => theme.spacing.xl};
    padding-top: ${({ theme }) => theme.spacing.lg};
  }
`

