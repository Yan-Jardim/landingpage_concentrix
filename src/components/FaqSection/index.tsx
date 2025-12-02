import React from 'react'
import { PageContainer } from '../PageContainer'
import FaqItem from '../FaqItem'
import {
  FaqSectionContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  FaqList,
} from './styles'

type Faq = {
  question: string
  answer: string
}

const faqs: Faq[] = [
  {
    question: 'Quais débitos consigo consultar?',
    answer:
      'Você pode consultar todos os débitos em aberto relacionados aos seus contratos cadastrados. Isso inclui faturas em atraso, parcelas pendentes e valores devidos. A consulta é realizada de forma rápida e segura através da nossa plataforma.',
  },
  {
    question: 'Posso negociar todas as parcelas?',
    answer:
      'Sim, é possível negociar todas as parcelas em aberto. Nossa plataforma oferece condições especiais de negociação, permitindo que você escolha quais parcelas deseja negociar e defina a melhor forma de pagamento para sua situação.',
  },
  {
    question: 'Consigo informar que já fiz o pagamento?',
    answer:
      'Sim, você pode informar sobre pagamentos já realizados através da nossa plataforma. Basta acessar a seção de "Informar Pagamento" e preencher os dados da transação. Nossa equipe irá verificar e atualizar seu cadastro.',
  },
  {
    question: 'Qual o prazo para a baixa do pagamento?',
    answer:
      'O prazo para baixa do pagamento varia conforme a forma de pagamento escolhida. Para pagamentos via PIX, a baixa é automática e ocorre em até 1 dia útil. Para outras formas de pagamento, o prazo pode ser de 2 a 5 dias úteis.',
  },
  {
    question: 'Este portal é seguro?',
    answer:
      'Sim, nosso portal utiliza tecnologia de criptografia SSL para garantir a segurança de todas as informações. Além disso, seguimos rigorosamente a LGPD (Lei Geral de Proteção de Dados) para proteger seus dados pessoais.',
  },
  {
    question: 'Preciso pagar algum valor para acessar?',
    answer:
      'Não, o acesso à plataforma é totalmente gratuito. Você pode consultar débitos, negociar parcelas e gerenciar seus pagamentos sem nenhum custo adicional. Apenas os valores referentes aos seus débitos serão cobrados.',
  },
]

const FaqSection: React.FC = () => {
  return (
    <FaqSectionContainer>
      <SectionHeader>
        <SectionTitle>Perguntas frequentes</SectionTitle>
        <SectionSubtitle>Tire suas dúvidas</SectionSubtitle>
      </SectionHeader>

      <PageContainer>
        <FaqList>
          {faqs.map((faq, index) => (
            <FaqItem
              key={`faq-${index}-${faq.question.slice(0, 10)}`}
              question={faq.question}
              answer={faq.answer}
              defaultOpen={index === 0}
            />
          ))}
        </FaqList>
      </PageContainer>
    </FaqSectionContainer>
  )
}

export default FaqSection

