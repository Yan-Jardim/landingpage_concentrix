import React from 'react'
import { HeaderContainer, HeaderContent, Logo } from './styles'
import logo from '../../assets/images/Logo.png'

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo src={logo} alt="Concentrix" />
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header

