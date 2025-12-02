# Landing Page - Plataforma de Gestão de Débitos

## 📋 Sobre o Projeto

Landing page moderna e responsiva desenvolvida para uma plataforma de gestão de débitos e pagamentos. O projeto foi construído seguindo as melhores práticas de desenvolvimento front-end, com foco em performance, acessibilidade e experiência do usuário.

## 🚀 Tecnologias Utilizadas

### Core
- *React 18* - Biblioteca JavaScript para construção de interfaces
- *TypeScript* - Superset do JavaScript com tipagem estática
- *Vite* - Build tool moderna e rápida para desenvolvimento

### Estilização
- *styled-components* - CSS-in-JS para estilização componentizada
- *Design System Tokens* - Sistema de design com tokens centralizados (cores, tipografia, espaçamentos)

### Formulários e Validação
- *Zod* - Biblioteca de validação de schemas TypeScript-first
- *react-hook-form* - Gerenciamento de formulários performático
- *@hookform/resolvers* - Integração entre Zod e react-hook-form

### UI/UX
- *Swiper.js* - Biblioteca para carrosséis responsivos e touch-friendly

## 📦 Instalação e Execução

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação das dependências

sh
npm install


### Executar em modo de desenvolvimento

sh
npm run dev


O projeto estará disponível em http://localhost:5173 (ou outra porta disponível).

### Build para produção

sh
npm run build


### Preview do build de produção

sh
npm run preview


### Linting

sh
npm run lint


## 🎨 Funcionalidades Implementadas

### 📱 Design Responsivo (Mobile-First)

A aplicação foi desenvolvida seguindo a abordagem *mobile-first*, garantindo uma experiência otimizada em todos os dispositivos:

- *Mobile* (0-767px): Layout otimizado com carrosséis touch-friendly
- *Tablet* (768-1023px): Transição gradual para layout desktop
- *Desktop* (1024px+): Layout completo com grid e espaçamentos amplos

### 🎯 Componentização Modular

Estrutura organizada em componentes reutilizáveis e modulares:


src/components/
├── BenefitCard/          # Card de benefício individual
├── BenefitsSection/      # Seção de benefícios com carrossel/grid
├── ChannelCard/         # Card de canal de atendimento
├── ChannelsSection/      # Seção de canais
├── FaqItem/             # Item individual do FAQ
├── FaqSection/           # Seção de perguntas frequentes
├── Footer/               # Rodapé completo
├── Header/               # Cabeçalho
├── HeroSection/          # Seção hero com formulário
├── LoginForm/            # Formulário de login
├── PageContainer/        # Container para controle de largura
├── ScrollIndicator/      # Indicador de scroll
├── StepCard/             # Card de passo individual
└── StepsSection/         # Seção de passos com carrossel


### ✅ Validação Robusta de Formulário

O formulário de login implementa validação completa e em tempo real:

#### Validação de CPF
- Máscara automática: 000.000.000-00
- Validação de dígitos verificadores (algoritmo oficial)
- Validação de CPFs inválidos conhecidos (111.111.111-11, etc.)

#### Validação de CNPJ
- Máscara automática: 00.000.000/0000-00
- Validação de dígitos verificadores (algoritmo oficial)
- Validação de CNPJs inválidos conhecidos

#### Validação de Data
- Máscara automática: DD/MM/AAAA
- Validação de data válida (dias, meses, anos)
- Validação de idade mínima (se necessário)

#### Funcionalidades
- Toggle entre *Pessoa Física* e *Pessoa Jurídica*
- Máscaras dinâmicas que se adaptam ao tipo de perfil
- Mensagens de erro contextuais e específicas
- Validação em tempo real durante a digitação
- Feedback visual de sucesso/erro

### 🎠 Carrosséis Responsivos

#### BenefitsSection
- *Mobile*: Carrossel horizontal com scroll touch
- *Desktop*: Grid de 2 colunas com layout otimizado
- Transição suave entre breakpoints

#### StepsSection
- *Mobile*: Carrossel horizontal com cards completos
- *Desktop*: Grid de 4 colunas com espaçamento uniforme
- Scroll desabilitado no desktop (apenas visualização)

### 📋 FAQ Interativo

Seção de perguntas frequentes com acordeão:

- ✅ Primeira pergunta aberta por padrão
- ✅ Controle individual de estado para cada item
- ✅ Animações suaves de abertura/fechamento
- ✅ Ícones dinâmicos (+ quando fechado, − quando aberto)
- ✅ Múltiplas perguntas podem estar abertas simultaneamente
- ✅ Atributos ARIA para acessibilidade

### 🎨 Sistema de Design

Tema centralizado com tokens do Design System:

- *Cores*: Paleta completa com variantes (primary, secondary, neutral, etc.)
- *Tipografia*: Hierarquia de fontes (h1-h7, body, overline, badge, display)
- *Espaçamentos*: Sistema de spacing consistente (xsmall, small, medium, large, xlarge, xxlarge, huge)
- *Breakpoints*: sm (393px), md (835px), lg (1366px)
- *Sombras*: Sistema de elevação
- *Border Radius*: Valores padronizados (none, small, medium, large, xlarge, pill, circle)

## 📁 Arquitetura e Estrutura do Projeto

### Organização de Componentes

O projeto segue uma arquitetura modular baseada em componentes, onde cada componente possui sua própria pasta com:

- *index.tsx*: Componente principal com a lógica de renderização
- *styles.ts*: Estilos específicos do componente usando styled-components
- *types.ts*: Definições de tipos TypeScript (quando aplicável)

### Estrutura de Diretórios


landingpage/
├── src/
│   ├── assets/                    # Recursos estáticos
│   │   ├── images/                # Imagens principais (Banner, Logo, etc.)
│   │   └── Icon_footer/           # Ícones do rodapé
│   │
│   ├── components/                # Componentes React organizados por funcionalidade
│   │   ├── BenefitCard/          # Card de benefício
│   │   │   ├── index.tsx         # Componente
│   │   │   ├── styles.ts         # Estilos
│   │   │   └── types.ts          # Tipos TypeScript
│   │   ├── BenefitsSection/       # Seção de benefícios
│   │   ├── ChannelCard/          # Card de canal
│   │   ├── ChannelsSection/      # Seção de canais
│   │   ├── FaqItem/              # Item do FAQ
│   │   ├── FaqSection/           # Seção FAQ
│   │   ├── Footer/               # Rodapé
│   │   ├── Header/               # Cabeçalho
│   │   ├── HeroSection/          # Seção hero
│   │   ├── LoginForm/            # Formulário de login
│   │   ├── PageContainer/        # Container de página
│   │   ├── ScrollIndicator/      # Indicador de scroll
│   │   ├── StepCard/            # Card de passo
│   │   └── StepsSection/         # Seção de passos
│   │
│   ├── styles/                    # Estilos globais e tema
│   │   ├── global.ts             # Reset CSS e estilos globais
│   │   └── theme.ts              # Tokens do design system
│   │
│   ├── utils/                     # Funções utilitárias
│   │   └── masks.ts              # Máscaras e validações (CPF, CNPJ, Data)
│   │
│   ├── validation/                 # Schemas de validação
│   │   └── loginSchema.ts       # Schema Zod para formulário de login
│   │
│   ├── App.tsx                    # Componente raiz da aplicação
│   ├── main.tsx                   # Entry point (ReactDOM.render)
│   └── styled.d.ts               # Declarações de tipos para styled-components
│
├── public/                         # Arquivos estáticos públicos
├── index.html                      # HTML principal
├── package.json                    # Dependências e scripts npm
├── tsconfig.json                   # Configuração TypeScript
├── vite.config.ts                  # Configuração do Vite
└── README.md                       # Documentação do projeto


### Princípios de Arquitetura

1. *Separação de Responsabilidades*: Cada componente tem uma responsabilidade única e bem definida
2. *Reutilização*: Componentes genéricos (Card, Button, Input) são reutilizáveis em diferentes contextos
3. *Tipagem Forte*: TypeScript com tipos separados em arquivos types.ts para melhor organização
4. *Estilização Isolada*: Cada componente gerencia seus próprios estilos via styled-components
5. *Design System Centralizado*: Tokens de design (cores, espaçamentos, tipografia) centralizados em theme.ts

## 🎯 Seções da Landing Page

### 1. Header
Cabeçalho com logo e navegação

### 2. Hero Section
- Título e subtítulo principais
- Formulário de login integrado
- Indicador de scroll

### 3. Benefits Section
Cards de benefícios:
- 💬 *Negociação*: Negocie seus débitos de forma rápida
- 📄 *Segunda via*: Solicite segunda via de documentos
- 💳 *Pagamento*: Realize pagamentos de forma segura

### 4. Channels Section
Canais de atendimento:
- 📞 *Ligação*: Atendimento telefônico
- 💬 *WhatsApp*: Atendimento via mensagem

### 5. Steps Section
Passo a passo do processo (4 etapas):
1. Contrato
2. Negociação
3. Pronto
4. Segunda via

### 6. FAQ Section
Perguntas frequentes com acordeão interativo

### 7. Footer
- Links úteis
- Canais de contato
- Informações de segurança (SSL)
- Informações legais e copyright

## 🔧 Utilitários e Helpers

### Máscaras de Input (src/utils/masks.ts)

typescript
// CPF: 000.000.000-00
maskCPF(value: string): string

// CNPJ: 00.000.000/0000-00
maskCNPJ(value: string): string

// Data: DD/MM/AAAA
maskDate(value: string): string

// Validação real de CPF
isValidCPF(cpf: string): boolean

// Validação real de CNPJ
isValidCNPJ(cnpj: string): boolean

// Validação real de data
isValidDate(date: string): boolean


## 📝 Convenções de Código

### TypeScript
- ✅ TypeScript strict mode habilitado
- ✅ Tipagem completa em todos os componentes
- ✅ Evitar uso de any (preferir unknown ou tipagem específica)
- ✅ Usar utilitários do TS (Partial<T>, Pick<T>, Omit<T>)

### Nomenclatura
- ✅ Componentes em *PascalCase*: BenefitCard, LoginForm
- ✅ Arquivos de estilo: styles.ts
- ✅ Funções e variáveis em *camelCase*: handleSubmit, isValid
- ✅ Constantes em *UPPER_SNAKE_CASE*: MAX_LENGTH

### Estilização
- ✅ Usar tokens do design system (theme.colors, theme.spacing)
- ✅ styled-components com acesso ao theme
- ✅ Mobile-first: estilos base para mobile, depois breakpoints maiores

### Componentes
- ✅ Um componente por arquivo
- ✅ Separar lógica de negócio em hooks quando necessário
- ✅ Props booleanas sem ={true}: isActive em vez de isActive={true}

## 🚀 Melhorias Implementadas

- ✅ Máscaras de input em tempo real para CPF, CNPJ e data
- ✅ Validação real de CPF/CNPJ com algoritmos oficiais
- ✅ Validação de datas com verificação de dias/meses/anos
- ✅ Carrosséis responsivos com Swiper.js
- ✅ Acessibilidade (ARIA attributes)
- ✅ Design system com tokens centralizados
- ✅ Componentização modular e reutilizável
- ✅ TypeScript strict mode
- ✅ Validação de formulários com Zod e react-hook-form

## 🔮 Melhorias Futuras

- [ ] Integração com API para autenticação real
- [ ] Testes unitários (Jest + React Testing Library)
- [ ] Testes E2E (Playwright ou Cypress)
- [ ] Lazy loading para imagens
- [ ] Animações mais elaboradas (Framer Motion)
- [ ] Melhorar acessibilidade (navegação por teclado, screen readers)
- [ ] Implementar dark mode
- [ ] Adicionar internacionalização (i18n)
- [ ] Otimização de performance (code splitting, memoização)
- [ ] Storybook para documentação de componentes
- [ ] CI/CD pipeline

## 📄 Licença

Este projeto foi desenvolvido como parte de um teste técnico.

## 👨‍💻 Desenvolvido por

*Yan Jardim*

---

*Nota*: Este projeto foi desenvolvido seguindo as melhores práticas de desenvolvimento front-end moderno, com foco em código limpo, manutenível e escalável.