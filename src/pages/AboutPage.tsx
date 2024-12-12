import React from 'react';
import { Container } from '@/components/ui/Container';
import { FoundersSection } from '@/components/home/FoundersSection';
import { GlobalStatsSection } from '@/components/home/GlobalStatsSection';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80"
            alt="Streaming setup"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <Container className="relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins mb-6">
              Our Story, Vision, and Mission
            </h1>
            <p className="text-xl text-gray-300">
              Building the Future of Streaming—One Stream at a Time
            </p>
          </div>
        </Container>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-poppins mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              StreamHub was founded in 2024 with a simple yet powerful vision: to democratize live streaming 
              and make it accessible to everyone. We believe that every creator deserves the tools and 
              platform to share their passion with the world.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Today, we're proud to serve millions of creators worldwide, providing them with cutting-edge 
              technology that makes streaming simple, reliable, and engaging. Our platform is built on the 
              principles of innovation, community, and creator success.
            </p>
          </div>
        </Container>
      </section>

      {/* Reuse Global Stats Section */}
      <GlobalStatsSection />

      {/* Reuse Founders Section */}
      <FoundersSection />

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-poppins mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              Passionate individuals working together to revolutionize live streaming
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden">
            <img
              src="https://uploads-ssl.webflow.com/5ef5c908f55bc9b2c48a5cc2/5efe1398fb8e0cd811d06a1b_The-Playce.jpeg"
              alt="StreamHub Team"
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">StreamHub Team</h3>
                <p>Jaipur , Rajasthan</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}