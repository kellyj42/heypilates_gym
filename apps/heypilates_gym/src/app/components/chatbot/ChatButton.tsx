import Image from "next/image";
import { MessageCircle, Sparkles, X } from "lucide-react";
import { useState, useEffect } from "react";

type ChatButtonProps = {
  onClick: () => void;
  unreadCount?: number;
  data?: {
    name?: string;
    avatar?: {
      asset?: {
        url?: string;
      };
    };
  };
  isTyping?: boolean;
};

const ChatButton: React.FC<ChatButtonProps> = ({ onClick, unreadCount = 0, data, isTyping = false }) => {
  const [showPrompt, setShowPrompt] = useState(true);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    if (unreadCount > 0 || isTyping) {
      setPulse(true);
      const timer = setTimeout(() => setPulse(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [unreadCount, isTyping]);

  useEffect(() => {
    if (showPrompt) {
      const timer = setTimeout(() => setShowPrompt(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [showPrompt]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* PROMPT BUBBLE */}
      {showPrompt && (
        <div 
          className={`relative bg-white text-gray-800 text-sm px-4 py-3 rounded-2xl shadow-xl max-w-[240px] transform transition-all duration-300 ${
            pulse ? 'scale-105' : ''
          }`}
        >
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white transform rotate-45" />
          
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-brand-sageDark" />
            <span className="font-bold text-brand-charcoal">{data?.name || "Klaudia"}</span>
          </div>
          
          <p className="text-gray-600">
            {isTyping ? (
              <span className="flex items-center gap-1">
                <span className="animate-pulse">•</span>
                <span className="animate-pulse delay-150">•</span>
                <span className="animate-pulse delay-300">•</span>
              </span>
            ) : (
              "Ask me anything about Hey Pilates!"
            )}
          </p>
          
          <button 
            onClick={() => setShowPrompt(false)} 
            className="absolute -top-1 -right-1 w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* CHAT BUTTON */}
      <div className="relative">
        {/* Pulsing ring effect */}
        <div className={`absolute inset-0 rounded-full ${pulse ? 'animate-ping bg-brand-sage/60' : ''}`} />
        
        {/* Unread messages badge */}
        {unreadCount > 0 && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold animate-bounce">
            {unreadCount > 9 ? '9+' : unreadCount}
          </div>
        )}
        
        <button 
          onClick={onClick}
          className={`relative w-16 h-16 rounded-full shadow-2xl border-4 border-white transition-all duration-300 hover:scale-110 hover:shadow-2xl ${
            isTyping ? 'animate-pulse' : ''
          }`}
          style={{
            background: `linear-gradient(135deg, #A9B79A 0%, #7F8F73 100%)`
          }}
        >
          {data?.avatar?.asset?.url ? (
            <Image
              src={data.avatar.asset.url}
              alt={data?.name || "Klaudia"}
              width={64}
              height={64}
              className="rounded-full object-cover w-full h-full"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
          )}
          
          {/* Online indicator */}
          <div className="absolute bottom-1 right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
        </button>
      </div>
    </div>
  );
};

export default ChatButton;