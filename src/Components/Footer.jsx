
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import React from "react";
import apple from "../Image/footer/ios_store.png";
import google from "../Image/footer/play_store.png";
import { CgFacebook } from "react-icons/cg";
import { BsTwitter } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import { ImYoutube } from "react-icons/im";
import { TiSocialInstagram } from "react-icons/ti";
import { IoLogoDribbble } from "react-icons/io";


const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"650"} fontSize={"13"} mb={2} color={"#8b8b8c"}>
      {children}
    </Text>
  );
};

const Textcomp = ({ children }) => {
  return (
    <Text fontWeight={"350"} fontSize={"13"} mb={2} color={"#cdcfd1"}>
      {children}
    </Text>
  );
};



const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};


export default function Footer() {

  return (
    <Box bg="#f5f7fa">
      <Container maxW={"6xl"} py={10}>
        <Box>
          <ListHeader>
            Choose RentoMojo For Massive Savings In Hyderabad
          </ListHeader>
          <Textcomp>
            Buying furniture, appliances, and electronics is expensive.
            RentoMojo makes it affordable for you to rent these essential
            everyday items in Hyderabad with our subscription-based monthly
            rental plans. For a small monthly fee, you can rent the best
            furniture, electronics, and appliances available in the market
          </Textcomp>
          <Textcomp>
            We offer both short-term and long-term subscriptions, so you can
            choose a plan that best suits your needs. The longer you rent from
            us, the more money you will save! With every item you rent from us,
            you receive multiple added benefits like free relocation, free
            maintenance, and damage waiver.
          </Textcomp>
          <Textcomp>
            We provide fast, free delivery and installation in Hyderabad,
            including neighbourhoods like Miyapur, Chanda Nagar, Madhapur,
            Kukatpally, and Manikonda. Our team will deliver any rental item to
            your home and also install it for you. Ordering from us only takes 5
            minutes with your laptop or smartphone.
          </Textcomp>
        </Box>
      </Container>
      
      <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>RENTOMOJO</ListHeader>
            <Textcomp><Link href={'#'}>About Us</Link></Textcomp>
            <Textcomp><Link href={'#'}>Culture</Link></Textcomp>
            <Textcomp><Link href={'#'}>Careers</Link></Textcomp>
            <Textcomp><Link href={'#'}>Investors</Link></Textcomp>
            <Textcomp><Link href={'#'}>Contact</Link></Textcomp>
            <Textcomp><Link href={'#'}>Our Benefits</Link></Textcomp>
            <Textcomp><Link href={'#'}>Sitemap</Link></Textcomp>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>INFORMATION</ListHeader>
            <Textcomp><Link href={'#'}>Blog</Link></Textcomp>
            <Textcomp><Link href={'#'}>FAQs</Link></Textcomp>
            <Textcomp><Link href={'#'}>Documents Required</Link></Textcomp>
          </Stack>


          <Stack align={'flex-start'}>
            <ListHeader>POLICIES</ListHeader>
            <Textcomp><Link href={'#'}>Shipping Policy</Link></Textcomp>
            <Textcomp><Link href={'#'}>Cancellation & Return</Link></Textcomp>
            <Textcomp><Link href={'#'}>Privacy Policy</Link></Textcomp>
            <Textcomp><Link href={'#'}>Terms of Service</Link></Textcomp>
            <Textcomp><Link href={'#'}>Rental Terms & Conditions</Link></Textcomp>
            <Textcomp><Link href={'#'}>Referral Terms & Conditions</Link></Textcomp>
            
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>NEED HELP ?</ListHeader>
            <Textcomp>Chat with us (9am - 6pm)</Textcomp>
            <ListHeader>Install App</ListHeader>
            <Box display="flex" gap="17px"  >
                <Box><img src={google} alt="google store" /></Box>
                <Box><img src={apple} alt="ios store" /></Box>
            </Box>
            
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2022. Edunetwork Pvt. Ltd.</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Facebook'} href={'https://www.facebook.com/rentomojo'}>
              <CgFacebook />
            </SocialButton>
            <SocialButton label={'Twitter'} href={'https://twitter.com/rentomojo'}>
              <BsTwitter />
            </SocialButton>
            <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/company/rentomojo/'}>
              <RiLinkedinFill/>
            </SocialButton>
            <SocialButton label={'Youtube'} href={'https://www.youtube.com/c/RentomojoOfficial'}>
              <ImYoutube/>
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/rentomojo/'}>
              <TiSocialInstagram/>
            </SocialButton>
            <SocialButton label={'Dribbble'} href={'https://dribbble.com/RentoMojo'}>
              <IoLogoDribbble/>
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
    
        
      
    </Box>
  );
};


