import React, { useEffect, useState } from 'react';
import SplashScreen from './components/SplashScreen';
import SiteNav from './components/SiteNav';
import SiteFooter from './components/SiteFooter';
import { RenderPage } from './SitePages';

const validPaths = new Set(['/', '/about', '/services', '/ai-solutions', '/approach', '/industries', '/insights', '/contact']);

function getPath() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  return validPaths.has(path) ? path : '/';
}

export default function App() {
  const [path, setPath] = useState(getPath);
  const [showSplash, setShowSplash] = useState(() => sessionStorage.getItem('nexus_intro_seen') !== 'true');

  useEffect(() => {
    const handlePopState = () => setPath(getPath());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const pageNames = {
      '/': 'Bridging Businesses to Growth', '/about': 'About Us', '/services': 'Services',
      '/ai-solutions': 'AI Solutions', '/approach': 'Our Approach', '/industries': 'Industries We Serve',
      '/insights': 'Insights', '/contact': 'Contact Us',
    };
    document.title = `${pageNames[path]} | Nexus Bridge Alliance`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [path]);

  const navigate = (nextPath) => {
    if (!validPaths.has(nextPath)) return;
    if (nextPath !== path) {
      window.history.pushState({}, '', nextPath);
      setPath(nextPath);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const finishSplash = () => {
    sessionStorage.setItem('nexus_intro_seen', 'true');
    setShowSplash(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f8fa] text-[#111315] selection:bg-[#C4121A] selection:text-white">
      {showSplash && <SplashScreen onComplete={finishSplash} />}
      <SiteNav currentPath={path} onNavigate={navigate} />
      <main><RenderPage path={path} onNavigate={navigate} /></main>
      <SiteFooter onNavigate={navigate} />
    </div>
  );
}
