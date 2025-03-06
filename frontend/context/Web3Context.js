import React, { createContext, useContext, useEffect, useState } from 'react';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

// Create a context for Web3
const Web3Context = createContext();

// Web3 Provider Component
export const Web3Provider = ({ children }) => {
  // Create wagmi configuration
  const config = createConfig({
    chains: [mainnet],
    connectors: [
      injected() // Use injected connector instead of MetaMaskConnector
    ],
    transports: {
      [mainnet.id]: http()
    }
  });

  return (
    <WagmiProvider config={config}>
      {children}
    </WagmiProvider>
  );
};

// Custom hook to use Web3 context
export const useWeb3 = () => {
  const context = useContext(Web3Context);
  if (!context) {
    throw new Error('useWeb3 must be used within a Web3Provider');
  }
  return context;
};