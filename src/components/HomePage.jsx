import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import BlackswanImage from '../images/blackswan.webp';
import Blackswan2Image from '../images/blackswan2.webp';
import WalletConnect from './WalletConnect';
import { useWeb3Modal } from '@web3modal/react';

// Defining a styled container for the entire page
const Container = styled.div`
  background-image: url(${BlackswanImage}); // Setting the background image
  background-size: cover; // Covering the entire background
  height: 100vh; // Full viewport height
  color: white; // Setting text color to white
  display: flex; // Using flex layout
  flex-direction: column; // Stacking children vertically
  align-items: center; // Aligning children to center horizontally
  justify-content: center; // Aligning children to center vertically
`;

// Defining the hover effect for the image using framer-motion
const imageVariants = {
  hover: { scale: 1.05, rotate: 5 },
  initial: { scale: 1, rotate: 0 },
};

// Defining the styled image with smooth hover animation
const StyledImage = styled(motion.img)`
  max-width: 100%; // Making sure it doesn't overflow horizontally
  max-height: 100%; // Making sure it doesn't overflow vertically
`;

// Defining the styled container for the image
const ImageContainer = styled(motion.div)`
  width: 100%; // Full width
  max-width: 600px; // Maximum width for larger screens
  height: 400px; // Height for larger screens
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) { // Tablet size
    height: 300px;
  }

  @media (max-width: 576px) { // Mobile size
    height: 200px;
  }
`;



// Defining a styled container for the button
const ButtonContainer = styled.div`
  width: 100%; // Allowing the child button to expand to full width
  display: flex; // Using flex layout
  justify-content: center; // Centering content horizontally
  align-items: center; // Centering content vertically
`;

const HomePage = () => {
  const { open } = useWeb3Modal();

  return (
    <Container>
      <ImageContainer
        // props
      >
        <StyledImage
          src={Blackswan2Image}
          alt="description"
          variants={imageVariants}
          initial="initial"
          whileHover="hover"
          transition={{ duration: 0.5 }}
        />
      </ImageContainer>
      <ButtonContainer>
        <WalletConnect open={open}>Connect your wallet to view your terminal</WalletConnect>
      </ButtonContainer>
    </Container>
  );
};

export default HomePage;

