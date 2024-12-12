import React from 'react';
import { ReviewCard } from './ReviewCard';
import { FEATURED_REVIEWS } from '@/data/reviews';

export function ReviewGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {FEATURED_REVIEWS.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}