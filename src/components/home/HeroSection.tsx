import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function HeroSection() {
  return (
    <section className="relative py-20 sm:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <Container>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Professional Live Streaming Made Simple
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
            Create stunning live streams and recordings in minutes. No technical expertise required. 
            Just connect and start streaming to your audience.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="group"
            >
              Start Streaming Free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="secondary"
              size="lg"
            >
              Watch Demo
            </Button>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            No credit card required · Free 14-day trial
          </p>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-20 blur-3xl bg-gradient-primary rounded-full" />
        <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/4 w-96 h-96 opacity-20 blur-3xl bg-gradient-primary rounded-full" />
      </Container>
    </section>
  );
}