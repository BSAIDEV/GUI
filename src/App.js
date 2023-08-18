import React from 'react';
import HomePage from './components/HomePage';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { arbitrum, mainnet, polygon } from 'wagmi/chains';

const chains = [arbitrum, mainnet, polygon];
const projectId = '11f6ae1f113999184ec3fc8c8f38e238';

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

function App() {
  return (
    <div className="App">
      <WagmiConfig config={wagmiConfig}>
        <HomePage />
      </WagmiConfig>
      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        themeMode="dark"
        themeVariables={{
          '--w3m-accent-color': '#4CAF50', // Green accent color for buttons, icons, labels, etc.
          '--w3m-accent-fill-color': '#000000', // Black color used for text and icons inside elements with accent color background
          // '--w3m-overlay-background-color': 'rgba(0, 255, 0, 0.3)', // Green modal overlay background color
          '--w3m-background-color': '#000000', // Black background color
          '--w3m-container-border-radius': '24px', // Futuristic border radius for main modal content area
          '--w3m-button-border-radius': '8px', // Futuristic border radius applied to primary buttons like 'Connect' or 'Account'
          '--w3m-text-big-bold-size': '2rem', // Font size of big-bold text variant
          '--w3m-text-big-bold-weight': 'bold', // Font weight of big-bold text variant
          // '--w3m-text-big-bold-line-height': '14px', // Line height of big-bold text variant
          '--w3m-text-big-bold-letter-spacing': '1px', // Letter spacing of big-bold text variant
          // '--w3m-text-big-bold-text-transform': 'uppercase', // Text transform of big-bold text variant
          // '--w3m-text-big-bold-font-family': 'Helvetica, sans-serif', // Font family of big-bold text variant
          '--w3m-container-width': '1800px', // Custom width for the modal container

        }}
      />
    </div>
  );
}

export default App;
