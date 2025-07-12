import React from 'react';
import { Box, Container, Flex, HStack, Link, Text, VStack, Grid, GridItem, Divider } from '@chakra-ui/react';
import { Instagram, Linkedin, MessageSquare, Mail, MapPin, Phone } from 'lucide-react';
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <Box as="footer" py={12} bg="#F4F7FA" width="100%">
      <Container maxW="container.xl">
        <Grid templateColumns={{
        base: '1fr',
        md: '2fr 1fr 1fr'
      }} gap={10} mb={10}>
          <GridItem>
            <VStack spacing={6} align="flex-start">
              <Text fontWeight="bold" fontSize="2xl" bgGradient="linear(to-r, #224276, #49B6FF)" bgClip="text" letterSpacing="tight">
                VENDT
              </Text>
              <Text color="gray.600" maxW="400px">
                Conectamos proprietários de terrenos com as melhores soluções em
                casas pré-fabricadas e crédito imobiliário.
              </Text>
              <Flex align="center">
                <MapPin size={18} color="#224276" />
                <Text ml={2} color="gray.700">
                  São Paulo, SP - Brasil
                </Text>
              </Flex>
              <Flex align="center">
                <Phone size={18} color="#224276" />
                <Text ml={2} color="gray.700">
                  (11) 9999-9999
                </Text>
              </Flex>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack spacing={4} align="flex-start">
              <Text fontWeight="700" fontSize="lg" color="#224276" mb={2}>
                Links Rápidos
              </Text>
              {['Sobre Nós', 'Como Funciona', 'Proprietários', 'Fabricantes', 'Crédito'].map((item, index) => <Link key={index} href="#" color="gray.600" _hover={{
              color: '#49B6FF'
            }} fontWeight="500">
                  {item}
                </Link>)}
            </VStack>
          </GridItem>
          <GridItem>
            <VStack spacing={4} align="flex-start">
              <Text fontWeight="700" fontSize="lg" color="#224276" mb={2}>
                Siga-nos
              </Text>
              <Link href="#" display="flex" alignItems="center" color="gray.600" _hover={{
              color: '#49B6FF'
            }}>
                <Instagram size={20} />
                <Text ml={2} fontWeight="500">
                  Instagram
                </Text>
              </Link>
              <Link href="#" display="flex" alignItems="center" color="gray.600" _hover={{
              color: '#49B6FF'
            }}>
                <Linkedin size={20} />
                <Text ml={2} fontWeight="500">
                  LinkedIn
                </Text>
              </Link>
              <Link href="#" display="flex" alignItems="center" color="gray.600" _hover={{
              color: '#49B6FF'
            }}>
                <MessageSquare size={20} />
                <Text ml={2} fontWeight="500">
                  WhatsApp
                </Text>
              </Link>
              <Link href="mailto:contato@vendt.com" display="flex" alignItems="center" color="gray.600" _hover={{
              color: '#49B6FF'
            }}>
                <Mail size={20} />
                <Text ml={2} fontWeight="500">
                  E-mail
                </Text>
              </Link>
            </VStack>
          </GridItem>
        </Grid>
        <Divider borderColor="gray.300" />
        <Flex justify="space-between" align="center" pt={6} direction={{
        base: 'column',
        sm: 'row'
      }} gap={4}>
          <Text fontSize="sm" color="gray.500">
            © {currentYear} VENDT. Todos os direitos reservados.
          </Text>
          <HStack spacing={6}>
            <Link href="#" fontSize="sm" color="gray.500" _hover={{
            color: '#49B6FF'
          }}>
              Termos de Uso
            </Link>
            <Link href="#" fontSize="sm" color="gray.500" _hover={{
            color: '#49B6FF'
          }}>
              Política de Privacidade
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>;
};