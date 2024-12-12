import React from 'react';
import { StreamCard } from './StreamCard';
import { FEATURED_STREAMS } from '@/data/featured-streams';

export function StreamGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {FEATURED_STREAMS.map((stream) => (
        <StreamCard key={stream.id} {...stream} />
      ))}
    </div>
  );
}