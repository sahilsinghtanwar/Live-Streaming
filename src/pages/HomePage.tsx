import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { LogoCarousel } from '@/components/home/LogoCarousel';
import { StreamPlayer } from '@/components/stream/StreamPlayer';
import { ChatBox } from '@/components/stream/ChatBox';
import { StreamGrid } from '@/components/stream/StreamGrid';
import { ReviewGrid } from '@/components/review/ReviewGrid';
import { GlobalStatsSection } from '@/components/home/GlobalStatsSection';
import { FoundersSection } from '@/components/home/FoundersSection';
import { Container } from '@/components/ui/Container';

export function HomePage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <LogoCarousel />
      
      <Container className="py-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <StreamPlayer />
            <div className="mt-6">
              <h1 className="text-2xl font-bold font-poppins">FIDE World Championship</h1>
              <p className="mt-2 text-gray-600">
              Game 11 Stream | FIDE World Championship Match 2024 | Ding Liren vs Gukesh D! Don't forget to follow and subscribe.
              </p>
            </div>
          </div>
          
          <div className="h-[600px]">
            <ChatBox />
          </div>
        </div>

        <section>
          <h2 className="text-xl font-poppins font-semibold mb-6">Featured Streams</h2>
          <StreamGrid />
        </section>

        <section>
          <h2 className="text-xl font-poppins font-semibold mb-6">What Our Users Say</h2>
          <ReviewGrid />
        </section>
      </Container>

      <GlobalStatsSection />
      <FoundersSection />
    </main>
  );
}