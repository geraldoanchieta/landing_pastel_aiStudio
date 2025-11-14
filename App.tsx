import React, { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LandingPagesSection from './components/LandingPagesSection';
import MvpSection from './components/MvpSection';
import AiSection from './components/AiSection';
import CustomSoftwareSection from './components/CustomSoftwareSection';
import FoundersSection from './components/FoundersSection';
import TestimonialsSection from './components/TestimonialsSection';
import ProcessSection from './components/ProcessSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

// This is a workaround for using global libraries from CDN with TypeScript
declare global {
    interface Window {
        AOS: any;
        gsap: any;
        ScrollTrigger: any;
        TextPlugin: any;
    }
}

const App: React.FC = () => {
    useEffect(() => {
        window.AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
        window.gsap.registerPlugin(window.ScrollTrigger, window.TextPlugin);
    }, []);

    return (
        <div className="bg-secondary text-accent overflow-x-hidden">
            <CustomCursor />
            <ParticleBackground />
            <Header />
            <main>
                <HeroSection />
                <LandingPagesSection />
                <MvpSection />
                <AiSection />
                <CustomSoftwareSection />
                <FoundersSection />
                <TestimonialsSection />
                <ProcessSection />
                <CtaSection />
            </main>
            <Footer />
        </div>
    );
};

export default App;
