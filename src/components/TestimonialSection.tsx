import React from 'react';
import { Box, Container, Flex, Text, VStack, Icon, Avatar, Heading, Grid, GridItem } from '@chakra-ui/react';
import { Quote, Star } from 'lucide-react';
export const TestimonialSection = () => {
  const testimonials = [{
    quote: 'Finalmente achei uma solução fácil e rápida para construir no meu terreno. O processo foi surpreendentemente simples!',
    name: 'Lucas S.',
    role: 'Cliente Proprietário',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    rating: 5
  }, {
    quote: 'A VENDT simplificou todo o processo de crédito. Em menos de uma semana já tinha minha aprovação para começar a construção.',
    name: 'Ana M.',
    role: 'Cliente Proprietária',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    rating: 5
  }];
  return <Box as="section" py={{
    base: 16,
    md: 24
  }} bg="#F4F7FA" width="100%" position="relative" overflow="hidden">
      {/* Elementos decorativos */}
      <Box position="absolute" top="20%" right="5%" width="150px" height="150px" borderRadius="full" bg="rgba(255, 218, 71, 0.1)" zIndex={0} />
      <Box position="absolute" bottom="10%" left="5%" width="200px" height="200px" borderRadius="full" bg="rgba(49, 196, 141, 0.05)" zIndex={0} />
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <VStack spacing={12}>
          <VStack spacing={4}>
            <Box bg="rgba(255, 218, 71, 0.2)" px={4} py={2} borderRadius="full" fontSize="sm" fontWeight="500" color="#FFDA47">
              Clientes Satisfeitos
            </Box>
            <Heading as="h2" size="xl" textAlign="center" bgGradient="linear(to-r, #224276, #49B6FF)" bgClip="text">
              O que dizem sobre nós
            </Heading>
          </VStack>
          <Grid templateColumns={{
          base: '1fr',
          md: 'repeat(2, 1fr)'
        }} gap={8} width="100%">
            {testimonials.map((testimonial, index) => <GridItem key={index}>
                <Box bg="white" p={8} borderRadius="xl" boxShadow="lg" height="100%" position="relative" transition="transform 0.3s ease, box-shadow 0.3s ease" _hover={{
              transform: 'translateY(-5px)',
              boxShadow: 'xl'
            }}>
                  <Icon as={Quote} color="#FFDA47" boxSize={8} position="absolute" top={6} left={6} />
                  <VStack spacing={6} align="flex-start" pt={8}>
                    <Flex>
                      {[...Array(5)].map((_, i) => <Icon key={i} as={Star} color={i < testimonial.rating ? '#FFDA47' : 'gray.200'} fill={i < testimonial.rating ? '#FFDA47' : 'none'} boxSize={5} mr={1} />)}
                    </Flex>
                    <Text fontSize="lg" fontStyle="italic" color="#224276" lineHeight="1.6">
                      "{testimonial.quote}"
                    </Text>
                    <Flex align="center">
                      <Avatar src={testimonial.avatar} size="md" mr={4} border="2px solid" borderColor="#31C48D" />
                      <Box>
                        <Text fontWeight="bold" fontSize="md">
                          {testimonial.name}
                        </Text>
                        <Text fontSize="sm" color="gray.600">
                          {testimonial.role}
                        </Text>
                      </Box>
                    </Flex>
                  </VStack>
                </Box>
              </GridItem>)}
          </Grid>
        </VStack>
      </Container>
    </Box>;
};