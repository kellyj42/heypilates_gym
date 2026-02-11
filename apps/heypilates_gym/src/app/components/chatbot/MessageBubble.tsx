import Image from "next/image";
import { User, ChevronRight, ExternalLink } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";

type MessageBubbleProps = {
  sender: "user" | "bot";
  text: string;
  timestamp?: Date;
  links?: Array<{ text: string; url: string }>;
};

const MessageBubble: React.FC<MessageBubbleProps> = ({ sender, text, timestamp, links }) => {
  const isBot = sender === "bot";

  return (
    <div className={`flex gap-3 ${isBot ? "items-start" : "justify-end"}`}>
      {isBot && (
        <div className="relative">
          <Image
            src="/Klaudia.jpg"
            alt="Klaudia"
            width={40}
            height={40}
            className="rounded-full h-10 w-10 object-cover border-2 border-white shadow"
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
        </div>
      )}

      <div className={`max-w-[80%] ${isBot ? "order-1" : "order-2"}`}>
        <div
          className={`px-4 py-3 rounded-2xl ${
            isBot
              ? "bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm"
              : "bg-gradient-to-r from-brand-sageDark to-brand-sage text-white rounded-tr-none"
          }`}
        >
          {text}
          
          {/* Links */}
          {links && links.length > 0 && (
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-xs font-medium text-gray-500 mb-2">Related links:</p>
              <div className="space-y-2">
                {links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.url}
                    className="flex items-center gap-2 text-sm text-brand-sageDark hover:text-brand-sage transition-colors group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ChevronRight className="w-4 h-4" />
                    {link.text}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Timestamp */}
        {timestamp && (
          <div className={`text-xs text-gray-500 mt-1 px-2 ${isBot ? "text-left" : "text-right"}`}>
            {format(timestamp, 'h:mm a')}
          </div>
        )}
      </div>

      {!isBot && (
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 flex items-center justify-center shadow-sm">
          <User size={18} className="text-white" />
        </div>
      )}
    </div>
  );
};

export default MessageBubble;