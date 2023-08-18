// WalletConnect.js
import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const StyledButton = styled.button`
  background: #000;
  border-radius: 5px;
  color: #fff;
  padding: 25px 0;
  width: 70%;
  border: none;
  cursor: pointer;
  font-size: 28px;
  font-family: 'Helonik-Bold', sans-serif;
  font-weight: bold;
  letter-spacing: 3px;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

  // Adding a glow effect to the button
  box-shadow: 0 0 5px rgba(0, 255, 0, 0.3);
  animation: glow 1s ease-in-out infinite alternate;

  // Defining the keyframes for the glow animation
  @keyframes glow {
    from {
      box-shadow: 0 0 5px rgba(0, 255, 0, 0.3);
    }
    to {
      box-shadow: 0 0 20px rgba(0, 255, 0, 0.7);
    }
  }

  // Defining the hover state for the button itself
  &:hover {
    color: #00ff00;
  }
`;

// Defining variants for framer-motion animation
const buttonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const WalletConnect = (props) => (
  <motion.div
    variants={buttonVariants}
    initial="initial"
    whileHover="hover"
    whileTap="tap"
    style={{ width: '70%', display: 'flex', justifyContent: 'center' }}
  >
    <StyledButton {...props} />
  </motion.div>
);

export default WalletConnect;
