'use client';

import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';

export default function Home() {
  const videoSrc = `https://www.youtube.com/embed/mDYqT0_9VR4?autoplay=1&loop=1&playlist=mDYqT0_9VR4&controls=0&showinfo=0&autohide=1&playsinline=1&mute=0`;

  return (
    <div className="relative flex flex-col min-h-screen bg-transparent overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-black">
        <iframe
          src={videoSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-1/2 left-1/2 w-full h-full min-w-[177.77vh] min-h-[100vw] object-cover"
          style={{ transform: 'translate(-50%, -50%)' }}
        ></iframe>
      </div>

      <main className="flex-1 flex flex-col">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}
