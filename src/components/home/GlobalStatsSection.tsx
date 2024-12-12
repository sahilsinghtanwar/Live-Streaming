import React from 'react';
import { Globe, Radio, Users } from 'lucide-react';
import { Container } from '../ui/Container';
import { AnimatedCounter } from '../ui/AnimatedCounter';

export function GlobalStatsSection() {
  return (
    <section className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary opacity-30 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary opacity-30 rounded-full filter blur-3xl" />

      <Container className="relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Streaming Across the Globe
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join millions of content creators and viewers who trust StreamHub for their live streaming needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <StatCard
            icon={<Users className="w-8 h-8" />}
            value={10}
            unit="M+"
            label="Active Streamers"
          />
          <StatCard
            icon={<Radio className="w-8 h-8" />}
            value={500}
            unit="M+"
            label="Viewers Reached"
          />
          <StatCard
            icon={<Globe className="w-8 h-8" />}
            value={100}
            unit="+"
            label="Countries"
          />
        </div>
      </Container>
    </section>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  unit: string;
  label: string;
}

function StatCard({ icon, value, unit, label }: StatCardProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300" />
      <div className="relative bg-gray-800 rounded-xl p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-700 text-primary mb-6">
          {icon}
        </div>
        <div className="text-4xl font-bold text-white mb-2 flex items-center justify-center">
          <AnimatedCounter value={value} />
          <span className="text-primary ml-1">{unit}</span>
        </div>
        <p className="text-gray-400">{label}</p>
      </div>
    </div>
  );
}