import React from 'react';

export function ChatBox() {
  const videoId = 'NvExKUlpIiE'; // Replace with the video ID of your live stream

  return (
    <div className="flex flex-col h-full bg-white rounded-lg border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-bold text-lg">Live Chat</h2>
      </div>

      <div className="flex-1 overflow-hidden">
        <iframe
          src={`https://www.youtube.com/live_chat?v=${videoId}&embed_domain=${window.location.hostname}`}
          frameBorder="0"
          className="w-full h-full"
          allowFullScreen
          title="YouTube Live Chat"
        />
      </div>
    </div>
  );
}
