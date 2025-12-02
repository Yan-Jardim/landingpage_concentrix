import styled from 'styled-components'

export const FaqSectionContainer = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: #039DB7;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 60px 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 90px 0;
  }
`

export const SectionHeader = styled.div`
  text-align: left;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  max-width: 980px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 ${({ theme }) => theme.spacing.sm};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }
`

export const SectionTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.headingM};
  font-weight: 700;
  color: #FFFFFF;
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
  color: #FFFFFF;
  line-height: 100%;
  letter-spacing: 0%;
  margin: 0;
`

export const FaqList = styled.div`
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

