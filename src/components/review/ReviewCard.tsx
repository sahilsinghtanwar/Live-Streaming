import React from 'react';
import { Review } from '@/types/review';
import { StarRating } from './StarRating';

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  const { name, title, review: reviewText, rating, imageUrl } = review;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-start gap-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-primary"
        />
        <div className="flex-1 min-w-0">
          <p className="text-gray-600 font-roboto leading-relaxed">
            "{reviewText}"
          </p>
          <div className="mt-4">
            <h3 className="font-poppins font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500">{title}</p>
            <StarRating rating={rating} className="mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}