import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import StepCard from '../StepCard'
import ScrollIndicator from '../ScrollIndicator'
import loginImage from '../../assets/images/Login.png'
import tokenImage from '../../assets/Token.png'
import contratoImage from '../../assets/Contract.png'
import prontoImage from '../../assets/Ready.png'
import {
  StepsSectionContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  SwiperContainer,
  ScrollWrapper,
} from './styles'
import { Step } from './types'

const steps: Step[] = [
  {
    stepNumber: 1,
    title: 'Login',
    description: 'Insira seus dados de acesso',
    image: loginImage,
  },
  {
    stepNumber: 2,
    title: 'Token',
    description:
      'Insira o código recebido em seu celular ou e-mail cadastrado.',
    image: tokenImage,
  },
  {
    stepNumber: 3,
    title: 'Contrato',
    description: 'Selecione o contrato que gostaria de negociar.',
    image: contratoImage,
  },
  {
    stepNumber: 4,
    title: 'Pronto',
    description: 'Agora é só escolher o pagamento',
    image: prontoImage,
  },
]

const StepsSection: React.FC = () => {
  return (
    <StepsSectionContainer>
        <SectionHeader>
          <SectionTitle>Comece agora!</SectionTitle>
          <SectionSubtitle>Veja como é fácil e seguro.</SectionSubtitle>
        </SectionHeader>

        <SwiperContainer>
          <Swiper
            spaceBetween={16}
            slidesPerView="auto"
            allowTouchMove
            centeredSlides={false}
            grabCursor
            breakpoints={{
              480: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 0,
                allowTouchMove: false,
                grabCursor: false,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 0,
                allowTouchMove: false,
                grabCursor: false,
              },
            }}
          >
            {steps.map((step) => (
              <SwiperSlide key={step.stepNumber}>
                <StepCard
                  stepNumber={step.stepNumber}
                  title={step.title}
                  description={step.description}
                  image={step.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>

        <ScrollWrapper>
          <ScrollIndicator size={40} />
        </ScrollWrapper>
    </StepsSectionContainer>
  )
}

export default StepsSection

