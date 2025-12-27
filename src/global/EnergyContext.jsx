import React, { createContext, useContext, useState } from 'react';

const EnergyContext = createContext();

export const EnergyProvider = ({ children }) => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  // Theme logic removed to prevent dark mode activation on mobile devices
  const connectWallet = () => setIsWalletConnected(true);

  return (
    <EnergyContext.Provider value={{ 
      isWalletConnected, 
      connectWallet 
    }}>
      {children}
    </EnergyContext.Provider>
  );
};

export const useEnergy = () => useContext(EnergyContext);