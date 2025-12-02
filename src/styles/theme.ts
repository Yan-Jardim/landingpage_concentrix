export const theme = {
  colors: {
    primary: '#007CB4',
    primaryLight: '#E6F0FF',
    accent: '#FF832B',
    textPrimary: '#1C1C1C',
    textSecondary: '#575757',
    background: '#FFFFFF',
    white: '#FFFFFF',
    black: '#000000',
    gray100: '#E3E6EA',
  },
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  },
  fontSizes: {
    headingXL: '2.5rem', 
    headingL: '2rem',  
    headingM: '1.5rem',    
    body: '1rem',        
    small: '0.875rem',   
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  spacing: {
    xs: '0.5rem',   
    sm: '1rem',     
    md: '1.5rem',   
    lg: '2rem',     
    xl: '3rem',     
    '2xl': '4rem',  
    '3xl': '6rem',  
  },
  breakpoints: {
    mobile: '0px',
    tablet: '768px',
    desktop: '1024px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },
} as const

export type Theme = typeof theme

