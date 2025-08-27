
'use client';

import HeroSection from '@/components/hero-section';
import Footer from '@/components/footer';
import VideoBackground from '@/components/video-background';

export default function Home() {
  const videoId = 'JDY8XkebaeA';

  return (
    <div className="relative flex flex-col min-h-screen bg-transparent overflow-x-hidden">
      <VideoBackground videoId={videoId} />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <Footer />
      </main>
    </div>
  );
}
