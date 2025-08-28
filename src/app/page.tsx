import HeroSection from '@/components/hero-section';
import VideoBackground from '@/components/video-background';

export default function Home() {
  const videoId = 'JDY8XkebaeA';

  return (
    <div className="relative flex flex-col h-screen bg-transparent overflow-hidden">
      <VideoBackground videoId={videoId} />
      <main className="flex-1 flex flex-col">
        <HeroSection />
      </main>
    </div>
  );
}