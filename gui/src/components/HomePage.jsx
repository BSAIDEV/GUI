import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Container = styled.div`
  background-image: url('./images/Blackswan.webp');
  background-size: cover;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled(motion.div)`
  margin-bottom: 20px;
`;

const ButtonContainer = styled(motion.div)``;

const buttonVariants = {
  hover: { scale: 1.1, backgroundColor: 'black', color: 'white' },
  tap: { scale: 0.9 },
};

const AnimatedButton = styled(motion.button).attrs(() => ({
  variants: buttonVariants,
  initial: 'initial',
  whileHover: 'hover',
  whileTap: 'tap',
}))`
  background: white;
  color: black;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const HomePage = () => {
  return (
    <Container>
      <ImageContainer
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img src="path-to-your-image.jpg" alt="description" />
      </ImageContainer>
      <ButtonContainer>
        <AnimatedButton>
          Connect Wallet
        </AnimatedButton>
      </ButtonContainer>
    </Container>
  );
};

export default HomePage;
