import React from 'react';
import { Container } from '../ui/Container';
import { FounderCard } from './FounderCard';
import { FOUNDERS } from '@/data/founders';

export function FoundersSection() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold font-poppins mb-4">
            Meet the Founders of StreamHub
          </h2>
          <p className="text-lg text-gray-600">
            Visionaries Who Are Redefining the Future of Streaming
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FOUNDERS.map((founder) => (
            <FounderCard key={founder.name} {...founder} />
          ))}
        </div>
      </Container>
    </section>
  );
}