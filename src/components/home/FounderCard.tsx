import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

interface FounderCardProps {
  name: string;
  role: string;
  bio: string;
  quote: string;
  imageUrl: string;
  socialLinks: {
    linkedin: string;
    twitter: string;
  };
}

export function FounderCard({
  name,
  role,
  bio,
  quote,
  imageUrl,
  socialLinks,
}: FounderCardProps) {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Quote Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <p className="text-white text-sm italic">"{quote}"</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold font-poppins text-gray-900">{name}</h3>
        <p className="text-primary font-medium mt-1">{role}</p>
        <p className="text-gray-600 mt-3 text-sm">{bio}</p>

        {/* Social Links */}
        <div className="flex gap-4 mt-4">
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}