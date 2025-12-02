import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 72px;
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.md} 0;
  border-bottom: 6px solid ${({ theme }) => theme.colors.primary};
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.sm};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }
`;

export const Logo = styled.img`
  height: 24px;
  width: 190px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 24px;
    width: 150px;
  }
`;
