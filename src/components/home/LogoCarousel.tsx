import React from 'react';
import { Container } from '../ui/Container';
import { COMPANY_LOGOS } from '@/data/company-logos';

export function LogoCarousel() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <Container>
        <h2 className="text-center font-poppins font-semibold text-xl text-gray-900 mb-8">
          Trusted by teams at
        </h2>

        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Logo Track */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              <div className="flex items-center gap-16 min-w-full">
                {COMPANY_LOGOS.map((logo) => (
                  <div
                    key={logo.name}
                    className="flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300"
                  >
                    <img
                      src={logo.url}
                      alt={`${logo.name} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
              {/* Duplicate set for seamless scrolling */}
              <div className="flex items-center gap-16 min-w-full">
                {COMPANY_LOGOS.map((logo) => (
                  <div
                    key={`${logo.name}-duplicate`}
                    className="flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300"
                  >
                    <img
                      src={logo.url}
                      alt={`${logo.name} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}