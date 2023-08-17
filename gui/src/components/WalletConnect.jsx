// WalletConnect.js
import React from 'react'; // Importing React to enable JSX syntax
import styled from '@emotion/styled'; // Importing styled from emotion for styling components
import { motion } from 'framer-motion'; // Importing motion from framer-motion for animations

// Defining a styled button with specific styles
const StyledButton = styled.button`
  background: #000; // Setting background color to black
  border-radius: 5px; // Applying border radius for rounded corners
  color: #fff; // Setting text color to white
  padding: 25px 0; // Increasing padding to make the button taller
  width: 70%; // Setting width to occupy 70% of the parent container
  border: none; // Removing the default border
  cursor: pointer; // Changing the cursor to a pointer on hover
  font-size: 28px; // Increasing font size for better visibility
  font-family: 'Helonik-Bold', sans-serif; // Setting font family to Helonik-Bold
  font-weight: bold; // Making the font bolder
  letter-spacing: 3px; // Increasing space between letters for wider appearance
  text-align: center; // Centering the text within the button
  position: relative; // Setting position to relative to allow absolute positioning inside
  overflow: hidden; // Hiding overflowing content
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1); // Applying a subtle shadow

  // Defining a before pseudo-element for hover animation
  &:before {
    content: ""; // Required for the pseudo-element to work
    position: absolute; // Absolute positioning relative to the button
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, #00ff00, transparent); // Gradient background for the animation
    transform: translateX(-100%); // Initial position off to the left
    transition: all 0.7s ease; // Transition effect for smooth animation
  }

  // Defining the hover state for the before pseudo-element
  &:hover:before {
    transform: translateX(100%); // Final position off to the right on hover
  }

  // Defining the hover state for the button itself
  &:hover {
    color: #00ff00; // Changing text color to green on hover
  }
`;

// Defining variants for framer-motion animation
const buttonVariants = {
  hover: { scale: 1.05 }, // Scale up on hover
  tap: { scale: 0.95 }, // Scale down on tap or click
};

// Defining the WalletConnect component
const WalletConnect = (props) => (
  <motion.div
    variants={buttonVariants} // Applying animation variants
    initial="initial" // Initial state
    whileHover="hover" // State during hover
    whileTap="tap" // State during tap or click
    style={{ width: '70%', display: 'flex', justifyContent: 'center' }} // Styling to center the button
  >
    <StyledButton {...props} /> 
  </motion.div>
);

export default WalletConnect; // Exporting the WalletConnect component for use in other files
