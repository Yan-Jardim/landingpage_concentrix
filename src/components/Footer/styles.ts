import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 15px;
  background: #EBFFFF;
  color: #004955;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 44px ${({ theme }) => theme.spacing.xl};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 44px 90px;
  }
`

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;
  }
`

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

export const ColumnTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #004955;
  line-height: 24px;
  letter-spacing: 0%;
  margin: 0;
`

export const FooterLink = styled.a`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #004955;
  text-decoration: none;
  line-height: 24px;
  letter-spacing: 0%;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`

export const IconWrapper = styled.div`
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

export const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const FooterBottom = styled.div`
  border-top: 1px solid #AEC0CB;
  padding-top: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`

export const Copyright = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #004955;
  line-height: 20px;
  letter-spacing: 0%;
  margin: 0;
  width: 100%;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: auto;
    text-align: left;
  }
`

export const BottomRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: space-between;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: auto;
    justify-content: space-between;
  }
`

export const PlatformContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`

export const PlatformText = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #004955;
  line-height: 20px;
  letter-spacing: 0%;
  white-space: normal;
  text-align: left;
  
  strong {
    font-weight: 700;
  }
`

export const ToggleSwitch = styled.div`
  width: 38px;
  height: 19.77px;
  border-radius: 10px;
  background: #039DB7;
  position: relative;
  display: inline-block;
  flex-shrink: 0;

  &::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #004955;
    top: 1.885px;
    right: 2px;
    transition: transform 0.2s ease;
  }
`

export const SecurityBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const SecurityIcon = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  flex-shrink: 0;
`

export const SecurityText = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #004955;
  line-height: 20px;
  letter-spacing: 0%;
  display: flex;
  flex-direction: column;
  
  span:first-child {
    font-weight: 700;
  }
`

