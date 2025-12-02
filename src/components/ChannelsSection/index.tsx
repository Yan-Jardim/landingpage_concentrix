import React from 'react'
import { PageContainer } from '../PageContainer'
import ChannelCard from '../ChannelCard'
import ScrollIndicator from '../ScrollIndicator'
import telefoneImage from '../../assets/Phone.png'
import whatsImage from '../../assets/images/Whats.png'
import ligacaoImage from '../../assets/images/Call.png'
import zapImage from '../../assets/Zap.png'
import {
  ChannelsSectionContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  CardsContainer,
  ScrollWrapper,
} from './styles'

const ChannelsSection: React.FC = () => {
  return (
    <ChannelsSectionContainer>
      <PageContainer>
        <SectionHeader>
          <SectionTitle>Atendimento personalizado</SectionTitle>
          <SectionSubtitle>
            Diversos canais, para cada necessidade.
          </SectionSubtitle>
        </SectionHeader>

        <CardsContainer>
          <ChannelCard
            title="Ligação"
            tag="Agilidade onde estiver."
            iconImage={telefoneImage}
            backgroundImage={ligacaoImage}
          />
          <ChannelCard
            title="WhatsApp"
            tag="Praticidade"
            iconImage={zapImage}
            backgroundImage={whatsImage}
          />
        </CardsContainer>

        <ScrollWrapper>
         <ScrollIndicator size={40} targetSectionId="steps-section" />
        </ScrollWrapper>
      </PageContainer>
    </ChannelsSectionContainer>
  )
}

export default ChannelsSection

