'use client';

import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black overflow-x-hidden">
      <main className="flex-1 flex flex-col">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}
