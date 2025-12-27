import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from './common/Header.jsx'
import Footer from './common/Footer.jsx'
import { EnergyProvider } from './global/EnergyContext.jsx'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import ContactUsPage from './pages/ContactUsPage';

export default function App() {
  return (
    <EnergyProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/contact" element={<ContactUsPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </EnergyProvider>
  );
}