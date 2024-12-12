import React from 'react';
import { Zap } from 'lucide-react';

interface FeatureShowcaseProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  imagePosition: 'left' | 'right';
}

export function FeatureShowcase({
  title,
  description,
  image,
  features,
  imagePosition,
}: FeatureShowcaseProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {imagePosition === 'left' && (
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className={imagePosition === 'right' ? 'lg:order-first' : ''}>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-4">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Zap className="w-3 h-3" />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {imagePosition === 'right' && (
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
}