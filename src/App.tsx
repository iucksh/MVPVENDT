import React from 'react';
import { Header } from './components/Header';
import { WhatIsSection } from './components/WhatIsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { LeadForm } from './components/LeadForm';
import { TestimonialSection } from './components/TestimonialSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { Box, extendTheme, ChakraProvider } from '@chakra-ui/react';
// Criando um tema personalizado com tipografia melhorada
const theme = extendTheme({
  fonts: {
    heading: 'Poppins, Montserrat, sans-serif',
    body: 'Montserrat, sans-serif'
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: '#224276'
      }
    }
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: '700',
        letterSpacing: '-0.02em'
      }
    },
    Button: {
      baseStyle: {
        fontWeight: '600',
        borderRadius: 'md',
        _hover: {
          transform: 'translateY(-2px)',
          boxShadow: 'lg'
        },
        transition: 'all 0.2s ease-in-out'
      }
    }
  }
});
export function App() {
  return <ChakraProvider theme={theme}>
      <Box width="100%" minHeight="100vh" bg="white" position="relative" overflow="hidden">
        <Header />
        <WhatIsSection />
        <HowItWorksSection />
        <LeadForm />
        <TestimonialSection />
        <CTASection />
        <Footer />
      </Box>
    </ChakraProvider>;
}