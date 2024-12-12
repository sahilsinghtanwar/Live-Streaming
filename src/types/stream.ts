export interface Stream {
  id: number;
  title: string;
  streamer: string;
  thumbnailUrl: string;
  viewers?: number;
  isLive?: boolean;
  description?: string;
}

export interface ChatMessage {
  id: number;
  user: string;
  message: string;
  timestamp?: Date;
}