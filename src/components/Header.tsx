import React from 'react';
import { Box, Button, Container, Flex, Heading, Image, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { ArrowRight } from 'lucide-react';
// Animação suave para o botão
const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(49, 196, 141, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(49, 196, 141, 0); }
  100% { box-shadow: 0 0 0 0 rgba(49, 196, 141, 0); }
`;
export const Header = () => {
  const pulseAnimation = `${pulse} 2s infinite`;
  const isDesktop = useBreakpointValue({
    base: false,
    md: true
  });
  return <Box as="header" bg="linear-gradient(135deg, #224276 0%, #1a365d 100%)" color="white" py={{
    base: 12,
    md: 20
  }} width="100%" position="relative" overflow="hidden">
      {/* Elementos decorativos de fundo */}
      <Box position="absolute" top="-10%" left="-5%" width="300px" height="300px" borderRadius="full" bg="rgba(49, 196, 141, 0.1)" zIndex={0} />
      <Box position="absolute" bottom="-20%" right="-10%" width="400px" height="400px" borderRadius="full" bg="rgba(73, 182, 255, 0.1)" zIndex={0} />
      <Container maxW="container.xl" position="relative" zIndex={1}>
        {/* Logo com destaque */}
        <Flex justify="space-between" align="center" mb={{
        base: 10,
        md: 16
      }}>
          <Box fontWeight="bold" fontSize={{
          base: '2xl',
          md: '3xl'
        }} letterSpacing="tight" bgGradient="linear(to-r, #31C48D, #49B6FF)" bgClip="text">
            VENDT
          </Box>
          <Button variant="outline" color="white" borderColor="rgba(255,255,255,0.4)" _hover={{
          bg: 'rgba(255,255,255,0.1)'
        }}>
            Fale Conosco
          </Button>
        </Flex>
        <Flex direction={{
        base: 'column',
        md: 'row'
      }} align="center" justify="space-between" textAlign={{
        base: 'center',
        md: 'left'
      }}>
          <VStack spacing={6} align={{
          base: 'center',
          md: 'flex-start'
        }} maxW={{
          base: '100%',
          md: '550px'
        }} mb={{
          base: 12,
          md: 0
        }}>
            <Box bg="rgba(49, 196, 141, 0.2)" px={4} py={2} borderRadius="full" fontSize="sm" fontWeight="500">
              Solução completa para construção
            </Box>
            <Heading as="h1" size={{
            base: 'xl',
            md: '2xl'
          }} lineHeight="1.1" bgGradient="linear(to-r, white, #e0e0e0)" bgClip="text">
              Construa sua casa com crédito{' '}
              <Box as="span" color="#31C48D" fontWeight="800">
                fácil, rápido e inteligente.
              </Box>
            </Heading>
            <Text fontSize={{
            base: 'md',
            md: 'lg'
          }} opacity={0.9} maxW="450px">
              Conectamos você com as melhores fabricantes de casas
              pré-fabricadas e soluções de crédito imobiliário em um só lugar.
            </Text>
            <Button bg="#31C48D" color="white" size="lg" px={8} py={7} fontSize="md" fontWeight="600" _hover={{
            bg: '#28A677'
          }} rightIcon={<ArrowRight size={18} />} animation={pulseAnimation} boxShadow="0 4px 15px rgba(49, 196, 141, 0.4)">
              Solicitar Crédito Agora
            </Button>
          </VStack>
          <Box position="relative" maxW={{
          base: '100%',
          md: '500px'
        }}>
            <Box position="absolute" inset="-3px" bg="linear-gradient(45deg, #31C48D, #49B6FF)" borderRadius="xl" filter="blur(15px)" opacity="0.6" />
            <Image src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Casa moderna" borderRadius="xl" boxShadow="xl" objectFit="cover" width="100%" height={{
            base: '250px',
            md: '350px'
          }} position="relative" zIndex={1} />
            {/* Elementos decorativos sobrepostos */}
            <Box position="absolute" bottom="-20px" right="-20px" width="100px" height="100px" borderRadius="full" bg="#FFDA47" opacity="0.3" zIndex={0} />
          </Box>
        </Flex>
      </Container>
    </Box>;
};