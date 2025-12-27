import React, { createContext, useContext, useState, useEffect } from 'react';

const EnergyContext = createContext();

export const EnergyProvider = ({ children }) => {
  // 1. Initialize theme from localStorage or default to dark
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  // 2. Handle the actual DOM class manipulation
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const connectWallet = () => setIsWalletConnected(true);

  return (
    <EnergyContext.Provider value={{ 
      theme, 
      toggleTheme, 
      isWalletConnected, 
      connectWallet 
    }}>
      {children}
    </EnergyContext.Provider>
  );
};

export const useEnergy = () => useContext(EnergyContext);