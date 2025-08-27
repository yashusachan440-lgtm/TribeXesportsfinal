
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Mail, Phone, PlayCircle } from 'lucide-react';
import CountdownTimer from '@/components/countdown-timer';
import { DiscordIcon } from '@/components/icons/discord-icon';
import { useState, useEffect } from 'react';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { LogoIcon } from '@/components/icons/logo-icon';
import LottiePlayer from '@/components/lottie-player';
import { FreeFireLogo } from '@/components/icons/free-fire-logo';
import confettiAnimation from '../../public/animations/confetti.json';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black overflow-hidden">
      <main className="flex-1 flex flex-col">
        <HeroSection />
      </main>
    </div>
  );
}

const HeroSection = () => {
    const videoSrc = `https://www.youtube.com/embed/mDYqT0_9VR4?autoplay=1&loop=1&playlist=mDYqT0_9VR4&controls=0&showinfo=0&autohide=1&playsinline=1&mute=0`;
  
    return (
        <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center text-white overflow-hidden">
            <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
                <iframe
                    className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto"
                    style={{
                        transform: 'translate(-50%, -50%) scale(1.5)',
                        pointerEvents: 'none'
                    }}
                    src={videoSrc}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
            </div>

            <div className="container mx-auto relative z-10 px-4 flex-1 flex flex-col justify-center items-center py-8">
              <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-between gap-8 w-full">
                <div className="w-full max-w-4xl text-center xl:text-left flex flex-col items-center xl:items-start">
                  <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold mb-4 lg:mb-8 font-poppins leading-tight whitespace-nowrap mt-6 sm:mt-10">
                    <span className="text-primary">TRIBEX</span> <span className="text-white font-open-sans">Esports</span>
                  </h1>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-x-2 md:gap-x-4 mb-6 text-xl sm:text-2xl md:text-2xl">
                    <div className="text-white/90 font-montserrat uppercase tracking-wider font-semibold">
                      <span>Revolutionizing</span>
                    </div>
                    <FreeFireLogo className="h-14 sm:h-16 md:h-16" />
                    <div className="text-white/90 font-montserrat uppercase tracking-wider font-semibold">
                      <span>Community</span>
                    </div>
                  </div>
                  <div className="text-sm sm:text-base md:text-lg mb-8 max-w-2xl text-white/80 mx-auto xl:mx-0">
                    <p>Something is about to shake the Indian esports scene… A movement is rising—one that doesn’t care about fame, money, or background. Only skill will decide who stands at the top. A place where players become family. Where tournaments are fair, opportunities are equal, and legends are made.</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center xl:justify-start w-full sm:w-auto">
                    <a href="https://discord.gg/h52CbbBXFk" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                      <Button size="lg" className="bg-[#5865F2] hover:bg-[#4f5bda] text-white font-bold transition flex items-center gap-2 rounded-full w-full justify-center">
                        <DiscordIcon className="h-6 w-6" />
                        Join Discord
                      </Button>
                    </a>
                    <a href="https://chat.whatsapp.com/ESlMzHWHRKpKMsijRUS934?mode=ems_copy_t" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                      <Button size="lg" className="bg-[#25D366] hover:bg-[#1EBE57] text-white font-bold transition flex items-center gap-2 rounded-full w-full justify-center">
                        <WhatsAppIcon className="h-6 w-6" /> Join Whatsapp
                      </Button>
                    </a>
                  </div>
                </div>
                <div className="w-full xl:w-auto mt-8 xl:mt-0 relative flex flex-col items-center justify-center">
                  <div className="absolute inset-0 -z-10 flex items-center justify-center">
                      <LottiePlayer animationData={confettiAnimation} loop={true} className="w-full h-full" />
                  </div>
                  <div className="relative z-10 flex flex-col items-center">
                    <CountdownTimer targetDate="2025-09-15T00:00:00" />
                    <div className="mt-4 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 flex items-center whitespace-nowrap justify-center">
                        <span className="relative flex h-3 w-3 mr-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                        <p className="text-xs sm:text-sm md:text-base text-white/80 font-semibold">Launching 15 September 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
        </section>
    );
};

const Footer = () => (
    <footer id="contact" className="bg-transparent py-4 relative z-10 w-full mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left text-foreground/50 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Tribex Esports. All rights reserved.
          </div>
          <div className="flex justify-center md:justify-end space-x-4 sm:space-x-6 text-foreground/50">
            <a href="https://discord.gg/h52CbbBXFk" className="hover:text-white transition"><DiscordIcon className="h-5 w-5 sm:h-6 sm:w-6" /></a>
            <a href="https://chat.whatsapp.com/ESlMzHWHRKpKMsijRUS934?mode=ems_copy_t" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" /></a>
            <a href="mailto:contact@tribexesports.com" className="hover:text-white transition"><Mail className="h-5 w-5 sm:h-6 sm:w-6" /></a>
            <a href="tel:+919140934524" className="hover:text-white transition"><Phone className="h-5 w-5 sm:h-6 sm:w-6" /></a>
          </div>
        </div>
      </div>
    </footer>
  );

    