import { createContext, useState, useContext } from 'react';

const EnergyContext = createContext();

export const EnergyProvider = ({ children }) => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [anomalyAlert, setAnomalyAlert] = useState(null); // AI-driven coming soon

  const connectWallet = () => setIsWalletConnected(true);

  return (
    <EnergyContext.Provider 
        value={{ 
            isWalletConnected, 
            connectWallet, 
            anomalyAlert, 
            setAnomalyAlert 
        }}>
      {children}
    </EnergyContext.Provider>
  );
};

export const useEnergy = () => useContext(EnergyContext);