import styled from 'styled-components'

export const StepsSectionContainer = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg} ;
  background: ${({ theme }) => theme.colors.gray100};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 30px;
  }
`

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 30px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
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

export const SwiperContainer = styled.div`
  width: 100%;
  padding: 0;
  overflow: hidden;

  .swiper {
    padding-bottom: 0;
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    overflow: visible;
  }

  .swiper-wrapper {
    align-items: stretch;
    display: flex;
  }

  .swiper-slide {
    height: auto;
    display: flex;
    width: auto;
    flex-shrink: 0;
    box-sizing: border-box;
  }

  .swiper-pagination {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 20px 0 0;
    overflow: visible;
    width: calc(100% + ${({ theme }) => theme.spacing.sm} * 2);
    max-width: calc(100% + ${({ theme }) => theme.spacing.sm} * 2);
    margin-left: calc(-1 * ${({ theme }) => theme.spacing.sm});
    margin-right: calc(-1 * ${({ theme }) => theme.spacing.sm});

    .swiper {
      padding-bottom: 0;
      overflow: visible;
      width: 100%;
      max-width: 100%;
    }

    .swiper-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      width: 100%;
      gap: 0;
      padding: 0 ${({ theme }) => theme.spacing.sm};
    }

    .swiper-slide {
      width: auto;
      flex-shrink: 0;
      margin-right: 0;
      display: flex;
    }

    .swiper-pagination {
      display: none;
    }
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

