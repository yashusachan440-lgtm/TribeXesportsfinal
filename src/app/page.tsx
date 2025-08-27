
'use client';

import AITipsGenerator from '@/components/ai-tips-generator';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black overflow-x-hidden">
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <section id="ai-coach" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <AITipsGenerator />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
