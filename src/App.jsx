import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FocusSection from './components/FocusSection';
import ImpactSection from './components/ImpactSection';
import ConnectedTomorrowSection from './components/ConnectedTomorrowSection';
import CoreServicesSection from './components/CoreServicesSection';
import OurApproachSection from './components/OurApproachSection';
import WhoWeServeSection from './components/WhoWeServeSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import CardDetailModal from './components/CardDetailModal';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  // Check session storage so user isn't forced to see splash on every single refresh if they don't want to,
  // but initial visit ALWAYS shows it!
  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('nexus_intro_shown');
    if (hasSeenIntro) {
      // User has already seen it in this session; allow immediate load
      // But we can let initial load show it once
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    sessionStorage.setItem('nexus_intro_shown', 'true');
  };

  const handleReplaySplash = () => {
    setShowSplash(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleOpenContact = (serviceName = null) => {
    setPreselectedService(serviceName);
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
    setPreselectedService(null);
  };

  const handleSelectCard = (card) => {
    setSelectedCard(card);
  };

  const handleCloseCardDetail = () => {
    setSelectedCard(null);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFB] text-[#111315] relative selection:bg-[#C4121A] selection:text-white">
      
      {/* 1. Cinematic Animated Splash Screen */}
      {showSplash && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}

      {/* 2. Frosted Glass Navbar */}
      <Navbar 
        onOpenContact={() => handleOpenContact()}
        onReplaySplash={handleReplaySplash}
      />

      {/* 3. Hero Section (Replicating Website landing inspiration.jpeg top) */}
      <main>
        <HeroSection onOpenContact={() => handleOpenContact()} />

        {/* 4. Focus Section ("Turning Connections Into Lasting Value") */}
        <FocusSection onSelectCard={handleSelectCard} />

        {/* 5. Impact Section ("Businesses grow stronger together.") */}
        <ImpactSection />

        {/* 6. Connected Tomorrow Section ("A More Connected Tomorrow") */}
        <ConnectedTomorrowSection onOpenContact={() => handleOpenContact()} />

        {/* 7. Comprehensive Core Systems & 7 Pillars (Marketing x Tech x AI x Automation) */}
        <CoreServicesSection 
          onOpenContact={() => handleOpenContact()}
          onSelectService={(svc) => handleOpenContact(svc.title)}
        />

        {/* 8. The 6-Phase Engine (Our Approach) */}
        <OurApproachSection />

        {/* 9. Who We Serve & Why Nexus Bridge */}
        <WhoWeServeSection />
      </main>

      {/* 10. World-Class Corporate Footer */}
      <Footer 
        onOpenContact={() => handleOpenContact()}
        onReplaySplash={handleReplaySplash}
      />

      {/* Interactive Consultation / Lead Capture Modal */}
      <ContactModal 
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        preselectedService={preselectedService}
      />

      {/* Card & Service Deep-Dive Modal */}
      <CardDetailModal 
        item={selectedCard}
        onClose={handleCloseCardDetail}
        onRequestService={(title) => handleOpenContact(title)}
      />

    </div>
  );
}
