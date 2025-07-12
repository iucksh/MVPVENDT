import React from 'react';
import { Box, Container, Flex, Heading, Text, VStack, Circle, HStack } from '@chakra-ui/react';
import { ClipboardList, Home, CreditCard } from 'lucide-react';
export const HowItWorksSection = () => {
  const steps = [{
    icon: <ClipboardList size={32} color="white" />,
    title: 'Solicite seu crédito',
    description: 'Preencha suas informações em poucos minutos.',
    bgColor: '#31C48D',
    accentColor: '#28A677'
  }, {
    icon: <Home size={32} color="white" />,
    title: 'Escolha sua casa',
    description: 'Receba opções de casas modernas das melhores fabricantes do mercado.',
    bgColor: '#224276',
    accentColor: '#1a365d'
  }, {
    icon: <CreditCard size={32} color="white" />,
    title: 'Aprovação simplificada',
    description: 'Crédito aprovado de forma rápida para você começar a construir.',
    bgColor: '#49B6FF',
    accentColor: '#3a92d1'
  }];
  return <Box as="section" py={{
    base: 16,
    md: 24
  }} bg="#F4F7FA" width="100%" position="relative" overflow="hidden">
      {/* Elementos decorativos */}
      <Box position="absolute" top="-10%" right="-5%" width="300px" height="300px" borderRadius="full" bg="rgba(255, 218, 71, 0.1)" zIndex={0} />
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <VStack spacing={16}>
          <VStack spacing={4}>
            <Box bg="rgba(49, 196, 141, 0.1)" px={4} py={2} borderRadius="full" fontSize="sm" fontWeight="500" color="#31C48D">
              Processo Simplificado
            </Box>
            <Heading as="h2" size="xl" textAlign="center" color="#224276" bgGradient="linear(to-r, #224276, #49B6FF)" bgClip="text">
              Como Funciona
            </Heading>
            <Text maxW="600px" textAlign="center" color="gray.600" fontSize="lg">
              Três etapas simples para você conquistar sua casa própria
            </Text>
          </VStack>
          <Flex direction={{
          base: 'column',
          md: 'row'
        }} justify="space-between" align={{
          base: 'center',
          md: 'stretch'
        }} gap={8} width="100%">
            {steps.map((step, index) => <Box key={index} flex="1" bg="white" p={0} borderRadius="xl" boxShadow="xl" overflow="hidden" transition="transform 0.3s ease, box-shadow 0.3s ease" _hover={{
            transform: 'translateY(-8px)',
            boxShadow: '2xl'
          }} position="relative" maxW={{
            base: '320px',
            md: '100%'
          }}>
                {/* Barra superior colorida */}
                <Box bg={step.bgColor} h="8px" w="100%" />
                <VStack spacing={6} p={8} align="flex-start">
                  <HStack spacing={4}>
                    <Circle size="50px" bg={step.bgColor} boxShadow={`0 4px 10px ${step.accentColor}40`}>
                      {step.icon}
                    </Circle>
                    <Circle size="24px" bg="#F4F7FA" border="2px solid" borderColor={step.bgColor} fontSize="sm" fontWeight="bold" color={step.bgColor} display="flex" alignItems="center" justifyContent="center">
                      {index + 1}
                    </Circle>
                  </HStack>
                  <Text fontWeight="700" fontSize="xl" color="#224276" letterSpacing="-0.01em">
                    {step.title}
                  </Text>
                  <Text color="gray.600" fontSize="md">
                    {step.description}
                  </Text>
                </VStack>
              </Box>)}
          </Flex>
        </VStack>
      </Container>
    </Box>;
};