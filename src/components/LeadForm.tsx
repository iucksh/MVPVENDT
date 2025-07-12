import React from 'react';
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Select, Textarea, VStack, Grid, GridItem, Text, Flex, Icon } from '@chakra-ui/react';
import { CheckCircle, ArrowRight, Shield } from 'lucide-react';
export const LeadForm = () => {
  return <Box as="section" py={{
    base: 16,
    md: 24
  }} bg="white" width="100%" position="relative">
      {/* Elementos decorativos */}
      <Box position="absolute" bottom="10%" left="-5%" width="200px" height="200px" borderRadius="full" bg="rgba(49, 196, 141, 0.05)" zIndex={0} />
      <Container maxW="container.lg" position="relative" zIndex={1}>
        <Grid templateColumns={{
        base: '1fr',
        lg: '1fr 1fr'
      }} gap={12} alignItems="center">
          {/* Coluna de texto */}
          <GridItem>
            <VStack spacing={6} align="flex-start">
              <Box bg="rgba(34, 66, 118, 0.1)" px={4} py={2} borderRadius="full" fontSize="sm" fontWeight="500" color="#224276">
                Comece Agora
              </Box>
              <Heading as="h2" size="xl" lineHeight="1.2" bgGradient="linear(to-r, #224276, #49B6FF)" bgClip="text">
                Inicie sua solicitação de crédito
              </Heading>
              <Text color="gray.600" fontSize="lg">
                Preencha o formulário e nossa equipe entrará em contato para
                apresentar as melhores opções para seu projeto.
              </Text>
              <VStack spacing={4} align="flex-start" width="100%" pt={4}>
                {['Análise rápida e sem burocracia', 'Taxas competitivas', 'Atendimento personalizado'].map((item, index) => <Flex key={index} align="center">
                    <Icon as={CheckCircle} color="#31C48D" boxSize={5} mr={3} />
                    <Text fontWeight="500">{item}</Text>
                  </Flex>)}
              </VStack>
            </VStack>
          </GridItem>
          {/* Coluna do formulário */}
          <GridItem>
            <Box as="form" bg="white" p={8} borderRadius="xl" boxShadow="xl" border="1px solid" borderColor="gray.100" position="relative" overflow="hidden">
              {/* Elemento decorativo no topo do formulário */}
              <Box position="absolute" top={0} left={0} right={0} height="6px" bgGradient="linear(to-r, #31C48D, #49B6FF)" />
              <VStack spacing={6} pt={2}>
                <Grid templateColumns={{
                base: '1fr',
                sm: '1fr 1fr'
              }} gap={4} width="100%">
                  <GridItem colSpan={{
                  base: 2,
                  sm: 1
                }}>
                    <FormControl isRequired>
                      <FormLabel fontWeight="500">Nome Completo</FormLabel>
                      <Input bg="#F4F7FA" border="1px solid" borderColor="gray.200" _focus={{
                      borderColor: '#31C48D',
                      boxShadow: '0 0 0 1px #31C48D'
                    }} size="lg" />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={{
                  base: 2,
                  sm: 1
                }}>
                    <FormControl isRequired>
                      <FormLabel fontWeight="500">E-mail</FormLabel>
                      <Input bg="#F4F7FA" type="email" border="1px solid" borderColor="gray.200" _focus={{
                      borderColor: '#31C48D',
                      boxShadow: '0 0 0 1px #31C48D'
                    }} size="lg" />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={{
                  base: 2,
                  sm: 1
                }}>
                    <FormControl isRequired>
                      <FormLabel fontWeight="500">Telefone/WhatsApp</FormLabel>
                      <Input bg="#F4F7FA" type="tel" border="1px solid" borderColor="gray.200" _focus={{
                      borderColor: '#31C48D',
                      boxShadow: '0 0 0 1px #31C48D'
                    }} size="lg" />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={{
                  base: 2,
                  sm: 1
                }}>
                    <FormControl isRequired>
                      <FormLabel fontWeight="500">Cidade/Estado</FormLabel>
                      <Input bg="#F4F7FA" border="1px solid" borderColor="gray.200" _focus={{
                      borderColor: '#31C48D',
                      boxShadow: '0 0 0 1px #31C48D'
                    }} size="lg" />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={2}>
                    <FormControl isRequired>
                      <FormLabel fontWeight="500">Seu perfil</FormLabel>
                      <Select bg="#F4F7FA" placeholder="Selecione uma opção" border="1px solid" borderColor="gray.200" _focus={{
                      borderColor: '#31C48D',
                      boxShadow: '0 0 0 1px #31C48D'
                    }} size="lg">
                        <option value="proprietario">
                          Proprietário de Terreno
                        </option>
                        <option value="fabricante">Fabricante de Casa</option>
                        <option value="financeira">
                          Instituição Financeira
                        </option>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={2}>
                    <FormControl>
                      <FormLabel fontWeight="500">
                        Valor estimado da construção (se proprietário)
                      </FormLabel>
                      <Input bg="#F4F7FA" border="1px solid" borderColor="gray.200" _focus={{
                      borderColor: '#31C48D',
                      boxShadow: '0 0 0 1px #31C48D'
                    }} size="lg" />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={2}>
                    <FormControl>
                      <FormLabel fontWeight="500">
                        Valor estimado do imóvel pré-fabricado (se fabricante)
                      </FormLabel>
                      <Input bg="#F4F7FA" border="1px solid" borderColor="gray.200" _focus={{
                      borderColor: '#31C48D',
                      boxShadow: '0 0 0 1px #31C48D'
                    }} size="lg" />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={2}>
                    <FormControl>
                      <FormLabel fontWeight="500">
                        Observações adicionais (opcional)
                      </FormLabel>
                      <Textarea bg="#F4F7FA" border="1px solid" borderColor="gray.200" _focus={{
                      borderColor: '#31C48D',
                      boxShadow: '0 0 0 1px #31C48D'
                    }} size="lg" rows={4} />
                    </FormControl>
                  </GridItem>
                </Grid>
                <Button mt={4} bg="#31C48D" color="white" size="lg" width="100%" py={7} _hover={{
                bg: '#28A677',
                transform: 'translateY(-2px)'
              }} boxShadow="0 4px 15px rgba(49, 196, 141, 0.3)" rightIcon={<ArrowRight size={18} />}>
                  Enviar Solicitação
                </Button>
                <Flex align="center" justify="center" fontSize="sm" color="gray.500">
                  <Shield size={16} />
                  <Text ml={2}>Seus dados estão protegidos</Text>
                </Flex>
              </VStack>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>;
};