
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Mail, Phone } from 'lucide-react';
import CountdownTimer from '@/components/countdown-timer';
import { DiscordIcon } from '@/components/icons/discord-icon';
import { useState } from 'react';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { YoutubeIcon } from '@/components/icons/youtube-icon';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';


export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      
      <main className="flex-1">
        <HeroSection />
        <CountdownSection />
      </main>
      <Footer />
    </div>
  );
}

const HeroSection = () => {
    const videoSrc = `https://www.youtube.com/embed/JDY8XkebaeA?autoplay=1&loop=1&playlist=JDY8XkebaeA&controls=0&showinfo=0&autohide=1&mute=1&playsinline=1`;
  
    return (
      <section id="home" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
          <iframe
            className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
            style={{ minWidth: '177.77vh', minHeight: '100vw' }}
            src={videoSrc}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
           <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
        </div>

        <div className="absolute top-4 right-4 z-20">
            <Button className="bg-gradient-to-r from-accent to-primary text-primary-foreground animate-pulse">
                Pre-Register Now
            </Button>
        </div>
  
        <div className="container mx-auto relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-headline">
              <span className="block">The Ultimate</span>
              <span className="block text-primary">Free Fire</span>
              <span className="block">Experience</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg mx-auto text-white/80">
              Tribex Esports is launching with the biggest Free Fire tournaments, exclusive content, and a thriving community for competitive players.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold transition transform hover:scale-105">
                Join Waitlist <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/80 bg-transparent hover:bg-white hover:text-black transition transform hover:scale-105">
                Watch Trailer <Play className="ml-2" />
              </Button>
            </div>
             <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm p-4 rounded-lg shadow-lg flex gap-4 items-center">
              <div className="flex items-center">
                <div className="bg-red-500 rounded-full w-3 h-3 mr-2 animate-ping"></div>
                <span className="text-sm font-bold uppercase tracking-widest">Launching Soon</span>
              </div>
            </div>
        </div>
      </section>
    );
  };

const CountdownSection = () => (
  <section className="py-16 bg-background/50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold mb-8 font-headline">Launching In</h2>
      <CountdownTimer targetDate="2025-09-01T00:00:00" />
    </div>
  </section>
);

const Footer = () => (
    <footer id="contact" className="bg-primary/5 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left text-foreground/50 text-sm">
            &copy; {new Date().getFullYear()} Tribex Esports. All rights reserved.
          </div>
          <div className="flex justify-center md:justify-end space-x-4 text-foreground/50">
            <a href="#" className="hover:text-white transition"><DiscordIcon className="h-6 w-6" /></a>
            <a href="#" className="hover:text-white transition"><WhatsAppIcon className="h-6 w-6" /></a>
            <a href="mailto:contact@tribexesports.com" className="hover:text-white transition"><Mail className="h-6 w-6" /></a>
            <a href="tel:+15551234567" className="hover:text-white transition"><Phone className="h-6 w-6" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
