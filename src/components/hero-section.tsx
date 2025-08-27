
'use client';

import { Button } from '@/components/ui/button';
import CountdownTimer from '@/components/countdown-timer';
import { DiscordIcon } from '@/components/icons/discord-icon';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { FreeFireLogo } from '@/components/icons/free-fire-logo';
import LottiePlayer from '@/components/lottie-player';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full flex-1 flex flex-col items-center justify-center text-white"
    >
      <div className="container mx-auto relative z-10 px-4 flex-1 flex flex-col justify-center items-center py-8">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 w-full">
          <div className="w-full max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 font-poppins leading-tight">
              <span className="text-primary">TRIBEX</span>{' '}
              <span className="text-white font-open-sans">Esports</span>
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-x-2 md:gap-x-4 mb-6 text-lg sm:text-xl md:text-2xl">
              <div className="text-white/90 font-montserrat uppercase tracking-wider font-semibold">
                <span>Revolutionizing</span>
              </div>
              <FreeFireLogo className="h-10 sm:h-12 md:h-14" />
              <div className="text-white/90 font-montserrat uppercase tracking-wider font-semibold">
                <span>Community</span>
              </div>
            </div>
            <div className="text-sm sm:text-base md:text-lg mb-8 max-w-xl text-white/80 mx-auto lg:mx-0">
              <p>
                Something is about to shake the Indian esports scene… A movement
                is rising—one that doesn’t care about fame, money, or
                background. Only skill will decide who stands at the top. A
                place where players become family. Where tournaments are fair,
                opportunities are equal, and legends are made.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://discord.gg/h52CbbBXFk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-[#5865F2] hover:bg-[#4f5bda] text-white font-bold transition flex items-center justify-center w-48"
                >
                  <DiscordIcon className="h-6 w-6" />
                  Join Discord
                </Button>
              </a>
              <a
                href="https://chat.whatsapp.com/ESlMzHWHRKpKMsijRUS934?mode=ems_copy_t"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#1EBE57] text-white font-bold transition flex items-center justify-center w-48"
                >
                  <WhatsAppIcon className="h-6 w-6" /> Join Whatsapp
                </Button>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-auto mt-8 lg:mt-0 flex items-center justify-center">
            <div className="relative flex items-center justify-center w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]">
              <div className="absolute inset-0 z-0 flex items-center justify-center">
                <LottiePlayer
                  loop
                  autoplay
                  src="https://lottie.host/c1b2dc54-bd3d-4d31-860f-8d75508ce8e6/OKBgN4LfK5.lottie"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <div className="relative z-10 flex flex-col items-center justify-center">
                <CountdownTimer targetDate="2025-09-15T00:00:00" />
                <div className="mt-4 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 flex items-center whitespace-nowrap justify-center">
                  <span className="relative flex h-3 w-3 mr-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  <p className="text-xs sm:text-sm md:text-base text-white/80 font-semibold">
                    Launching 15 September 2025
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <LottiePlayer
                  loop
                  autoplay
                  src="https://lottie.host/7ab080fc-298b-41c7-94fb-4c37ed1d71ad/tUXflEu9Md.lottie"
                  style={{ width: '75%', height: '75%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
