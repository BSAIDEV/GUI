// HomePage.js
import React from 'react'; // Importing React library
import styled from '@emotion/styled'; // Importing styled-components library from Emotion
import { motion } from 'framer-motion'; // Importing framer-motion for animations
import BlackswanImage from '../images/blackswan.webp'; // Importing the background image
import Blackswan2Image from '../images/blackswan2.webp'; // Importing the second image
import WalletConnect from './WalletConnect'; // Importing the WalletConnect component

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
  width: 600px; // Setting the width
  height: 400px; // Setting the height
  margin-bottom: 20px; // Adding space below the image
  display: flex; // Using flex layout
  justify-content: center; // Centering content horizontally
  align-items: center; // Centering content vertically
`;


// Defining a styled container for the button
const ButtonContainer = styled.div`
  width: 100%; // Allowing the child button to expand to full width
  display: flex; // Using flex layout
  justify-content: center; // Centering content horizontally
  align-items: center; // Centering content vertically
`;

// Defining the HomePage component
const HomePage = () => {
  return (
    <Container>
      <ImageContainer
        initial={{ opacity: 0, y: -50 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }} // Final animation state
        transition={{ duration: 1 }} // Animation transition properties
      >
        <StyledImage
          src={Blackswan2Image} // Rendering the second imported image
          alt="description"
          variants={imageVariants} // Applying the defined animation variants
          initial="initial" // Setting the initial animation state
          whileHover="hover" // Applying the hover effect
          transition={{ duration: 0.5 }} // Smooth transition effect
        />
      </ImageContainer>
      <ButtonContainer>
        <WalletConnect>Connect your wallet to view your terminal</WalletConnect> {/* Rendering the WalletConnect component */}
      </ButtonContainer>
    </Container>
  );
};


export default HomePage; // Exporting the HomePage component for use in other files
