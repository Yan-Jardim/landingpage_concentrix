import styled from 'styled-components'

export const LoginCard = styled.div`
  width: 100%;
  max-width: 380px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`

export const ProfileTypeLabel = styled.label`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #5F6D72;
  display: block;
  margin-bottom: 10px;
`

export const ToggleContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const ToggleButton = styled.button<{ isActive: boolean }>`
  flex: 1;
  height: 44px;
  padding: 12px 10px;
  border-radius: 6px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  border: ${({ isActive }) => (isActive ? 'none' : '1px solid #AEC0CB')};
  color: ${({ isActive }) => (isActive ? '#FFFFFF' : '#5F6D72')};
  background: ${({ isActive }) => (isActive ? '#039DB7' : '#FFFFFF')};

  &:hover {
    opacity: 0.9;
  }
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`

export const LastFormGroup = styled(FormGroup)`
  margin-bottom: 20px;
`

export const SuccessMessage = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  background: #E4F8EC;
  border: 1px solid #15B164;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: #13643F;
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-align: center;
`

