# Landing Page - Teste Técnico Front-end

## 📋 Descrição

Este projeto é a implementação de um teste técnico de front-end, desenvolvido com base em um layout do Figma. A landing page apresenta uma interface moderna e responsiva para uma plataforma de gestão de débitos e pagamentos, incluindo formulário de login, seções de benefícios, canais de atendimento, passo a passo, FAQ interativo e footer completo.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool moderna e rápida para desenvolvimento
- **styled-components** - CSS-in-JS para estilização componentizada
- **Zod** - Biblioteca de validação de schemas TypeScript-first
- **react-hook-form** - Gerenciamento de formulários performático

## 📦 Instalação e Execução

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação das dependências

```bash
npm install
```

### Executar em modo de desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173` (ou outra porta disponível).

### Build para produção

```bash
npm run build
```

### Preview do build de produção

```bash
npm run preview
```

## 🎨 Funcionalidades Implementadas

### Mobile-First Design

A aplicação foi desenvolvida seguindo a abordagem mobile-first, garantindo uma experiência otimizada em dispositivos móveis e adaptação progressiva para tablets e desktops. Todas as seções utilizam media queries consistentes baseadas nos breakpoints definidos no tema:

- **Mobile**: 0-767px
- **Tablet**: 768-1023px
- **Desktop**: 1024px+

### Componentização

O projeto foi estruturado com foco em reutilização e manutenibilidade:

- **Componentes genéricos**: `BenefitCard`, `ChannelCard`, `StepCard`, `FaqItem`
- **Seções modulares**: Cada seção da landing page é um componente independente
- **Container reutilizável**: `PageContainer` para controle consistente de largura e padding
- **Tema centralizado**: Sistema de design tokens para cores, tipografia, espaçamentos e breakpoints

### Validação do Formulário de Login

O formulário de login implementa validação robusta utilizando:

- **Zod** para definição de schemas de validação
- **react-hook-form** para gerenciamento de estado e performance
- Validação de CPF/CNPJ (mínimo 11 caracteres)
- Validação de data de nascimento (campo obrigatório)
- Toggle entre Pessoa Física e Pessoa Jurídica
- Mensagens de erro contextuais
- Feedback visual de sucesso

### FAQ Interativo

Seção de perguntas frequentes com acordeão:

- Primeira pergunta aberta por padrão
- Controle individual de estado para cada item
- Animações suaves de abertura/fechamento
- Ícones dinâmicos (+ quando fechado, − quando aberto)
- Múltiplas perguntas podem estar abertas simultaneamente

### Estrutura de Seções

1. **Hero Section**: Título, subtítulo e formulário de login
2. **Benefits Section**: Cards de benefícios (Negociação, Segunda via, Pagamento)
3. **Channels Section**: Canais de atendimento (Ligação e WhatsApp)
4. **Steps Section**: Passo a passo do processo (4 etapas)
5. **FAQ Section**: Perguntas frequentes com acordeão
6. **Footer**: Links, contatos e informações legais

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── BenefitCard.tsx
│   ├── ChannelCard.tsx
│   ├── FaqItem.tsx
│   ├── LoginForm.tsx
│   ├── PageContainer.tsx
│   ├── StepCard.tsx
│   └── [Sections].tsx   # Seções da landing page
├── styles/              # Estilos globais e tema
│   ├── global.ts
│   └── theme.ts
├── validation/          # Schemas de validação
│   └── loginSchema.ts
├── App.tsx
├── main.tsx
└── styled.d.ts         # Tipagem do styled-components
```

## 🎯 Melhorias Futuras

Algumas sugestões para evolução do projeto:

- [ ] Implementar máscaras de input para CPF/CNPJ e data de nascimento
- [ ] Adicionar validação real de CPF/CNPJ (algoritmo de validação)
- [ ] Integração com API para autenticação real
- [ ] Adicionar testes unitários (Jest + React Testing Library)
- [ ] Implementar lazy loading para imagens
- [ ] Adicionar animações mais elaboradas (Framer Motion)
- [ ] Melhorar acessibilidade (ARIA labels, navegação por teclado)
- [ ] Implementar dark mode
- [ ] Adicionar internacionalização (i18n)
- [ ] Otimização de performance (code splitting, memoização)

## 📝 Observações

- O projeto utiliza TypeScript strict mode para garantir type safety
- Todos os componentes seguem as convenções de nomenclatura em inglês
- O código foi desenvolvido seguindo boas práticas de React e TypeScript
- A validação do formulário é simplificada (não valida CPF/CNPJ real, apenas comprimento mínimo)
- Os ícones atuais são placeholders (emojis) e podem ser substituídos por bibliotecas de ícones

## 👨‍💻 Desenvolvido por

Teste técnico de front-end - Landing Page

---

**Nota**: Este projeto foi desenvolvido como parte de um teste técnico e não está em produção.
