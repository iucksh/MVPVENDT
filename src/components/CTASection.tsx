import React from 'react';
import { Box, Button, Container, Heading, VStack, Text, Flex, Icon } from '@chakra-ui/react';
import { ArrowRight, CheckCircle } from 'lucide-react';
export const CTASection = () => {
  return <Box as="section" py={{
    base: 16,
    md: 24
  }} position="relative" width="100%" overflow="hidden" bgGradient="linear(to-r, #224276, #1a365d)" color="white">
      {/* Elementos decorativos */}
      <Box position="absolute" top="-10%" right="5%" width="300px" height="300px" borderRadius="full" bg="rgba(49, 196, 141, 0.1)" zIndex={0} />
      <Box position="absolute" bottom="-15%" left="10%" width="250px" height="250px" borderRadius="full" bg="rgba(73, 182, 255, 0.1)" zIndex={0} />
      <Container maxW="container.lg" position="relative" zIndex={1}>
        <Flex direction={{
        base: 'column',
        md: 'row'
      }} align="center" justify="space-between" gap={10}>
          <VStack spacing={6} align={{
          base: 'center',
          md: 'flex-start'
        }} textAlign={{
          base: 'center',
          md: 'left'
        }}>
            <Heading as="h2" size="2xl" lineHeight="1.2" fontWeight="800" bgGradient="linear(to-r, white, #e0e0e0)" bgClip="text">
              Pronto para realizar seu projeto?
            </Heading>
            <Text fontSize="lg" opacity={0.9} maxW="500px">
              Não perca mais tempo. Inicie agora o processo e em poucos dias
              você já pode começar a construir sua casa dos sonhos.
            </Text>
            <VStack spacing={3} align={{
            base: 'center',
            md: 'flex-start'
          }} pt={2}>
              {['Aprovação rápida', 'Taxas competitivas', 'Processo 100% digital'].map((item, index) => <Flex key={index} align="center">
                  <Icon as={CheckCircle} color="#31C48D" boxSize={5} mr={3} />
                  <Text>{item}</Text>
                </Flex>)}
            </VStack>
          </VStack>
          <Box>
            <Button bg="#FFDA47" color="#224276" size="lg" px={10} py={8} fontSize="xl" fontWeight="700" _hover={{
            bg: '#F0CB30'
          }} rightIcon={<ArrowRight size={20} />} boxShadow="0 4px 20px rgba(255, 218, 71, 0.4)" borderRadius="xl">
              Quero meu crédito!
            </Button>
          </Box>
        </Flex>
      </Container>
    </Box>;
};