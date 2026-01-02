import React, { createContext, useContext, useState, useEffect } from 'react';

const EnergyContext = createContext();

export const EnergyProvider = ({ children }) => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage first, then system preference
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return saved === 'true';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply dark mode class to document element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const connectWallet = () => setIsWalletConnected(true);

  return (
    <EnergyContext.Provider value={{ 
      isWalletConnected, 
      connectWallet,
      isDarkMode,
      toggleDarkMode
    }}>
      {children}
    </EnergyContext.Provider>
  );
};

export const useEnergy = () => useContext(EnergyContext);