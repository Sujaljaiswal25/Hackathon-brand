import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import { useGSAP } from "@gsap/react";

import TestimonialSection from "./sections/TestimonialSection";
import FooterSection from "./sections/FooterSection";
import { useEffect } from "react";
import BrandLogo from "./components/brandLogo";
import Protine from "../src/sections/Protine";



// import ScrollStack, { ScrollStackItem } from '../animations/ScrollStack'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  // Handle viewport meta tag for proper mobile rendering
  useEffect(() => {
    // Ensure viewport meta tag exists and is properly configured
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.name = 'viewport';
      document.head.appendChild(viewport);
    }
    viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover';
    
    // Prevent zoom on input focus for iOS
    const preventZoom = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
        e.target.style.fontSize = '16px';
      }
    };
    
    document.addEventListener('focusin', preventZoom);
    
    return () => {
      document.removeEventListener('focusin', preventZoom);
    };
  }, []);

  useGSAP(() => {
    // Check if device is mobile
    const isMobile = window.innerWidth <= 768;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Create ScrollSmoother with mobile-optimized settings
    const smoother = ScrollSmoother.create({
      smooth: isMobile ? 0.8 : 1.5, // Faster on mobile for better performance
      effects: !isMobile, // Disable effects on mobile for better performance
      normalizeScroll: true,
      smoothTouch: isTouchDevice ? 0.1 : false, // Optimize for touch devices
      ease: "power2.out",
      ignoreMobileResize: true, // Prevent issues with mobile keyboard
      smoothMobile: 0.5, // Even smoother on mobile
    });

    // Handle resize events for responsive behavior
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 768;
      if (smoother) {
        smoother.kill();
        ScrollSmoother.create({
          smooth: newIsMobile ? 0.8 : 1.5,
          effects: !newIsMobile,
          normalizeScroll: true,
          smoothTouch: isTouchDevice ? 0.1 : false,
          ease: "power2.out",
          ignoreMobileResize: true,
          smoothMobile: 0.5,
        });
      }
    };

    // Debounced resize handler
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 250);
    });

    // Cleanup on unmount
    return () => {
      if (smoother) smoother.kill();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  

  return (
    
      
    <main className="bg-[#BAAB9D] relative overflow-x-hidden">
      <BrandLogo />
      <NavBar />
      <div id="smooth-wrapper" className="overflow-hidden">
        <div id="smooth-content" className="relative">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          {/* <NutritionSection /> */}

          <div className="relative">
            {/* <BenefitSection /> */}
            <TestimonialSection />
          </div>
            <Protine/>

          <FooterSection />
        </div>
      </div>
    </main>


  );
};

export default App;

