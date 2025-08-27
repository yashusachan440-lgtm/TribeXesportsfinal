
'use client';

import HeroSection from '@/components/hero-section';
import { Mail, Phone } from 'lucide-react';
import { DiscordIcon } from '@/components/icons/discord-icon';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';

export default function Home() {
  const videoId = 'JDY8XkebaeA';
  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&autohide=1&playsinline=1&mute=0`;

  return (
    <div className="relative flex flex-col min-h-screen bg-transparent overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full -z-20 overflow-hidden bg-black">
        <iframe
          src={videoSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-1/2 left-1/2 w-full h-full min-w-[177.77vh] min-h-[100vw] object-cover"
          style={{ transform: 'translate(-50%, -50%)' }}
        ></iframe>
        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
      </div>

      <main className="flex-1 flex flex-col">
        <HeroSection />
        <div id="contact" className="py-4 w-full bg-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left text-foreground/50 text-xs sm:text-sm">
                &copy; {new Date().getFullYear()} Tribex Esports. All rights reserved.
              </div>
              <div className="flex justify-center md:justify-end space-x-4 sm:space-x-6 text-foreground/50">
                <a
                  href="https://discord.gg/h52CbbBXFk"
                  className="hover:text-white transition"
                >
                  <DiscordIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                <a
                  href="https://chat.whatsapp.com/ESlMzHWHRKpKMsijRUS934?mode=ems_copy_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                <a
                  href="mailto:contact@tribexesports.com"
                  className="hover:text-white transition"
                >
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                <a href="tel:+919140934524" className="hover:text-white transition">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
