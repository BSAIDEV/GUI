import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import BlackswanImage from '../images/blackswan.webp';
import Blackswan2Image from '../images/blackswan2.webp';
import WalletConnect from './WalletConnect';
import { useWeb3Modal } from '@web3modal/react';

const Container = styled.div`
  background-image: url(${BlackswanImage});
  background-size: cover;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const imageVariants = {
  hover: { scale: 1.05, rotate: 5 },
  initial: { scale: 1, rotate: 0 },
};

const StyledImage = styled(motion.img)`
  max-width: 100%;
  max-height: 100%;
`;

const ImageContainer = styled(motion.div)`
  width: 100%;
  max-width: 600px;
  height: 400px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 576px) {
    height: 200px;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomePage = () => {
  const { open } = useWeb3Modal();
  const [isWalletConnected, setWalletConnected] = useState(false);

  const handleConnectWallet = () => {
    open().then(() => {
      setWalletConnected(true);
    });
  };

  return isWalletConnected ? (
    <iframe
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        width: '100%',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        border: 'none',
      }}
      src="http://localhost:9999"
    ></iframe>
  ) : (
    <Container>
      <ImageContainer>
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
        <WalletConnect open={handleConnectWallet}>Connect your wallet to view your terminal</WalletConnect>
      </ButtonContainer>
    </Container>
  );
};

export default HomePage;
