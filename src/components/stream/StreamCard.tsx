import React from 'react';
import { User } from 'lucide-react';
import { Stream } from '@/types/stream';

type StreamCardProps = Stream;

export function StreamCard({ title, streamer, thumbnailUrl, viewers, isLive }: StreamCardProps) {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        {isLive && (
          <div className="absolute top-2 left-2 px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded">
            LIVE
          </div>
        )}
        {viewers && (
          <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs rounded">
            {viewers.toLocaleString()} viewers
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-poppins font-semibold text-gray-900 line-clamp-1">{title}</h3>
        <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
          <User className="h-4 w-4" />
          <span>{streamer}</span>
        </div>
      </div>
    </div>
  );
}