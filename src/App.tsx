import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/theme";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import BenefitsSection from "./components/BenefitsSection";
import ChannelsSection from "./components/ChannelsSection";
import StepsSection from "./components/StepsSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <HeroSection />
      <BenefitsSection />
      <ChannelsSection />
      <StepsSection /> 
      <FaqSection />
      <Footer /> 
    </ThemeProvider>
  );
};

export default App;
