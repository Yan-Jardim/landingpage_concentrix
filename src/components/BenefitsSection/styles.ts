import styled from 'styled-components'

export const BenefitsSectionContainer = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: ${({ theme }) => theme.colors.gray100};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing['2xl']} 0;
  }
`

export const SectionHeader = styled.div`
  text-align: left;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`

export const SectionTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.headingM};
  font-weight: 400;
  color: #323E48;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: 100%;
  letter-spacing: 0%;
  max-width: 451px;
  word-wrap: break-word;
  white-space: normal;
  display: block;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.headingL};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 40px;
  }
`

export const BoldText = styled.span`
  font-weight: 700;
`

export const SwiperContainer = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }

  .swiper-slide {
    width: auto;
    height: auto;
    display: flex;
    max-width: 280px;
    flex-shrink: 0;
  }

  .swiper-wrapper {
    display: flex;
    align-items: stretch;
  }
`

export const CardsGrid = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: ${({ theme }) => theme.spacing.xl};
  }
`

export const RightColumn = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    align-items: stretch;
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

