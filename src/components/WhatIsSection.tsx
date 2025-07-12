import React from 'react';
import { Box, Container, Flex, Text, Icon, Heading } from '@chakra-ui/react';
import { Shield, Zap, CheckCircle } from 'lucide-react';
export const WhatIsSection = () => {
  const features = [{
    icon: <Shield size={20} />,
    text: 'Seguro'
  }, {
    icon: <Zap size={20} />,
    text: 'Rápido'
  }, {
    icon: <CheckCircle size={20} />,
    text: 'Digital'
  }];
  return <Box as="section" py={{
    base: 16,
    md: 24
  }} bg="white" width="100%" position="relative">
      {/* Elemento decorativo */}
      <Box position="absolute" top="50%" left="5%" width="200px" height="200px" borderRadius="full" bg="rgba(73, 182, 255, 0.05)" transform="translateY(-50%)" zIndex={0} />
      <Container maxW="container.lg" position="relative" zIndex={1}>
        <Flex direction="column" align="center" textAlign="center">
          <Box mb={4}>
            <Heading as="h2" size="md" fontWeight="600" color="#49B6FF" textTransform="uppercase" letterSpacing="1px">
              Conheça a VENDT
            </Heading>
          </Box>
          <Text fontSize={{
          base: 'xl',
          md: '3xl'
        }} fontWeight="700" lineHeight="1.4" color="#224276" maxW="800px" mx="auto" mb={8}>
            A VENDT conecta você, que já tem um terreno quitado, com as melhores
            fabricantes de casas pré-fabricadas e crédito imobiliário em um só
            lugar.
          </Text>
          <Flex justify="center" gap={{
          base: 4,
          md: 10
        }} wrap="wrap">
            {features.map((feature, index) => <Flex key={index} align="center" bg="#F4F7FA" px={6} py={3} borderRadius="full" boxShadow="sm">
                <Box color="#31C48D" mr={2}>
                  {feature.icon}
                </Box>
                <Text fontWeight="600" color="#224276">
                  {feature.text}
                </Text>
              </Flex>)}
          </Flex>
        </Flex>
      </Container>
    </Box>;
};