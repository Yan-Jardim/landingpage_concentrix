import React from 'react'
import arrobaIcon from '../../assets/Icon_footer/At.png'
import zapFooterIcon from '../../assets/Icon_footer/ZapFooter.png'
import foneIcon from '../../assets/Icon_footer/Phone.png'
import menssagemIcon from '../../assets/Icon_footer/Message.png'
import pixIcon from '../../assets/Icon_footer/Pix.png'
import cartaoIcon from '../../assets/Icon_footer/Card.png'
import boletoIcon from '../../assets/Icon_footer/Ticket.png'
import gpayIcon from '../../assets/Icon_footer/Gpay.png'
import protegidoIcon from '../../assets/Icon_footer/Protected.png'
import {
  FooterContainer,
  FooterContent,
  FooterColumn,
  ColumnTitle,
  FooterLink,
  IconsContainer,
  IconWrapper,
  IconImage,
  FooterBottom,
  Copyright,
  BottomRight,
  PlatformContainer,
  ToggleSwitch,
  PlatformText,
  SecurityBadge,
  SecurityIcon,
  SecurityText,
} from './styles'

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <ColumnTitle>Sobre</ColumnTitle>
          <FooterLink href="#quem-somos">Quem somos</FooterLink>
          <FooterLink href="#politica-privacidade">Política de privacidade</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Fale com a gente</ColumnTitle>
          <IconsContainer>
            <IconWrapper>
              <IconImage src={arrobaIcon} alt="Email" />
            </IconWrapper>
            <IconWrapper>
              <IconImage src={zapFooterIcon} alt="WhatsApp" />
            </IconWrapper>
            <IconWrapper>
              <IconImage src={foneIcon} alt="Telefone" />
            </IconWrapper>
            <IconWrapper>
              <IconImage src={menssagemIcon} alt="Mensagem" />
            </IconWrapper>
          </IconsContainer>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Formas de pagamento</ColumnTitle>
          <IconsContainer>
            <IconWrapper>
              <IconImage src={pixIcon} alt="Pix" />
            </IconWrapper>
            <IconWrapper>
              <IconImage src={cartaoIcon} alt="Cartão" />
            </IconWrapper>
            <IconWrapper>
              <IconImage src={boletoIcon} alt="Boleto" />
            </IconWrapper>
            <IconWrapper>
              <IconImage src={gpayIcon} alt="Google Pay" />
            </IconWrapper>
          </IconsContainer>
        </FooterColumn>
      </FooterContent>

      <FooterBottom>
        <Copyright>© 2023. Todos direitos reservados à Webhelp</Copyright>
        <BottomRight>
          <PlatformContainer>
            <ToggleSwitch />
            <PlatformText>
              Plataforma desenvolvida<br />
              pela <strong>Concentrix</strong>
            </PlatformText>
          </PlatformContainer>
          <SecurityBadge>
            <SecurityIcon src={protegidoIcon} alt="Protegido" />
            <SecurityText>
              <span>Site protegido</span>
              <span>Certificado SSL</span>
            </SecurityText>
          </SecurityBadge>
        </BottomRight>
      </FooterBottom>
    </FooterContainer>
  )
}

export default Footer

