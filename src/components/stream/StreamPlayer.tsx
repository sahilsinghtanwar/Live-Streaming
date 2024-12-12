import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Fullscreen, Minimize } from 'lucide-react';

export function StreamPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [videoId] = useState('NvExKUlpIiE'); // Set your video ID here

  const iframeRef = useRef(null);

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleMuteUnmute = () => {
    setIsMuted((prev) => !prev);
  };

  const handleFullScreen = () => {
    if (iframeRef.current) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen(); // Standard Fullscreen API
      } else if (iframeRef.current.mozRequestFullScreen) {
        iframeRef.current.mozRequestFullScreen(); // Firefox
      } else if (iframeRef.current.webkitRequestFullscreen) {
        iframeRef.current.webkitRequestFullscreen(); // Chrome, Safari, Opera
      } else if (iframeRef.current.msRequestFullscreen) {
        iframeRef.current.msRequestFullscreen(); // IE/Edge
      }
      setIsFullScreen(true);
    }
  };

  const handleExitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen(); // Firefox
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen(); // Chrome, Safari, Opera
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen(); // IE/Edge
    }
    setIsFullScreen(false);
  };

  return (
    <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {!isPlaying ? (
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} // Fetch YouTube thumbnail
            alt="Stream thumbnail"
            className="w-full h-full object-cover"
          />
        ) : (
          <iframe
            ref={iframeRef}
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${isMuted ? 1 : 0}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Live Stream"
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          {!isPlaying && (
            <button
              className="p-4 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors"
              onClick={handlePlayPause}
            >
              <Play className="h-8 w-8 text-white" fill="white" />
            </button>
          )}
          {isPlaying && (
            <button
              className="p-4 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors"
              onClick={handlePlayPause}
            >
              <Pause className="h-8 w-8 text-white" fill="white" />
            </button>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
        <div className="flex items-center justify-between text-white">
          <div>
            <h3 className="font-bold">Live: FIDE World Championship</h3>
            <p className="text-sm opacity-80">Chess Championship</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-white/10 rounded-full" onClick={handleMuteUnmute}>
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>
            <button
              className="p-2 hover:bg-white/10 rounded-full"
              onClick={isFullScreen ? handleExitFullScreen : handleFullScreen}
            >
              {isFullScreen ? <Minimize className="h-5 w-5" /> : <Fullscreen className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
