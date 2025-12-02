import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { PageContainer } from '../PageContainer'
import BenefitCard from '../BenefitCard'
import ScrollIndicator from '../ScrollIndicator'
import negociacaoImage from '../../assets/Negotiation.png'
import segundaViaImage from '../../assets/SecondCopy.png'
import pagamentoImage from '../../assets/images/Payment.png'
import {
  BenefitsSectionContainer,
  SectionHeader,
  SectionTitle,
  BoldText,
  CardsGrid,
  LeftColumn,
  RightColumn,
  SwiperContainer,
  ScrollWrapper,
} from './styles'
import { Benefit } from './types'

const benefits: Benefit[] = [
  {
    title: 'Negociação',
    description: 'Negociação rápida e segura.',
    variant: 'default',
    image: negociacaoImage,
  },
  {
    title: 'Segunda via',
    description: 'Consulta de débitos em atraso.',
    variant: 'default',
    image: segundaViaImage,
  },
  {
    title: 'Pagamento',
    description: 'Seu pagamento, como preferir.',
    variant: 'highlight',
    image: pagamentoImage,
  },
]

const BenefitsSection: React.FC = () => {
  return (
    <BenefitsSectionContainer>
      <PageContainer>
        <SectionHeader>
          <SectionTitle>
            Benefícios para ajudar<br />
            <BoldText>você e sua empresa.</BoldText>
          </SectionTitle>
        </SectionHeader>

        <SwiperContainer>
          <Swiper
            modules={[]}
            spaceBetween={12}
            slidesPerView={1.15}
            allowTouchMove={true}
            centeredSlides={false}
            grabCursor={true}
            resistance={true}
            resistanceRatio={0.85}
            watchOverflow={true}
            breakpoints={{
              768: {
                slidesPerView: 'auto',
                spaceBetween: 0,
                allowTouchMove: false,
              },
            }}
          >
            {benefits.map((benefit, index) => (
              <SwiperSlide key={`benefit-${index}-${benefit.title}`}>
                <BenefitCard
                  title={benefit.title}
                  description={benefit.description}
                  variant={benefit.variant}
                  image={benefit.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>

        <CardsGrid>
          <LeftColumn>
            <BenefitCard
              title="Negociação"
              description="Negociação rápida e segura."
              image={negociacaoImage}
            />
            <BenefitCard
              title="Segunda via"
              description="Consulta de débitos em atraso."
              image={segundaViaImage}
            />
          </LeftColumn>

          <RightColumn>
            <BenefitCard
              title="Pagamento"
              description="Seu pagamento, como preferir."
              variant="highlight"
              image={pagamentoImage}
            />
          </RightColumn>
        </CardsGrid>

        <ScrollWrapper>
          <ScrollIndicator size={40} />
        </ScrollWrapper>
      </PageContainer>
    </BenefitsSectionContainer>
  )
}

export default BenefitsSection

