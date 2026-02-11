"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import Image from "next/image";
import {
  X,
  Send,
  Phone,
  Mail,
  Clock,
  Sparkles,
  ChevronRight,
  Loader2,
} from "lucide-react";
import MessageBubble from "./MessageBubble";
import { getKlaudiaReply } from "./chatUtils";

type Sender = "user" | "bot";

type Message = {
  sender: Sender;
  text: string;
  timestamp: Date;
  links?: Array<{ text: string; url: string }>;
};

type ChatWindowProps = {
  onClose: () => void;
  data?: any;
  onNewMessage?: () => void;
  setIsTyping?: (typing: boolean) => void;
};

const ChatWindow: React.FC<ChatWindowProps> = ({
  onClose,
  data,
  onNewMessage,
  setIsTyping,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text:
        data?.welcomeMessage ||
        "Hey 👋 I'm Klaudia, founder of Hey Pilates. Ask me anything!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const simulateTyping = async (
    reply: string,
    links?: Array<{ text: string; url: string }>,
  ) => {
    setIsTyping?.(true);

    // Simulate typing delay (50ms per 10 characters, max 2 seconds)
    const delay = Math.min(reply.length * 50, 2000);
    await new Promise((resolve) => setTimeout(resolve, delay));

    setIsTyping?.(false);

    const botMessage: Message = {
      sender: "bot",
      text: reply,
      timestamp: new Date(),
      links,
    };

    setMessages((prev) => [...prev, botMessage]);
    onNewMessage?.();
  };

  const sendMessage = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput || isSending) return;

    // Add user message
    const userMessage: Message = {
      sender: "user",
      text: trimmedInput,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsSending(true);

    // Get bot reply
    const { reply, links } = getKlaudiaReply(
      trimmedInput,
      data?.faqs || [],
      data?.fallbackMessage,
    );

    // Simulate typing and add bot reply
    await simulateTyping(reply, links);

    setIsSending(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
    // Auto-send after a brief delay
    setTimeout(() => {
      sendMessage();
    }, 100);
  };

  return (
    <div className="fixed bottom-24 right-6 w-[380px] max-w-[90vw] h-[600px] max-h-[80vh] bg-white rounded-3xl shadow-2xl border border-gray-200 flex flex-col z-50 overflow-hidden">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-brand-sageDark to-brand-sage p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {data?.avatar?.asset?.url ? (
              <Image
                src={data.avatar.asset.url}
                alt={data?.name || "Klaudia"}
                width={48}
                height={48}
                className="rounded-full object-cover border-2 border-white"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
            )}
            <div>
              <h3 className="font-bold text-lg">{data?.name || "Klaudia"}</h3>
              <p className="text-sm text-white/90">
                {data?.title || "Founder of Hey Pilates"}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition"
            aria-label="Close chat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Status */}
        <div className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span>Online • Usually replies instantly</span>
        </div>
      </div>

      {/* MESSAGES AREA */}
      <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-white to-brand-cream/30">
        <div className="space-y-4">
          {messages.map((m, i) => (
            <MessageBubble
              key={i}
              sender={m.sender}
              text={m.text}
              timestamp={m.timestamp}
              links={m.links}
            />
          ))}

          {/* Suggested Questions */}
          {messages.length <= 2 && (
            <div className="space-y-3 mt-6">
              <p className="text-xs text-gray-500 font-medium px-3">
                QUICK QUESTIONS
              </p>
              <div className="flex flex-wrap gap-2">
                {(
                  data?.suggestedQuestions ||
                  ([
                    "What are your prices?",
                    "Do you offer private training?",
                    "Where are you located?",
                    "How do I book a class?",
                  ] as string[])
                ).map((q: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickQuestion(q)}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm hover:bg-brand-sageLight hover:border-brand-sage transition-all duration-200"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quick Info Cards */}
          {messages.length <= 1 && (
            <div className="space-y-3 mt-6">
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-brand-sageDark" />
                  <h4 className="font-semibold text-gray-800">Hours</h4>
                </div>
                <p className="text-sm text-gray-600">
                  {data?.hours ||
                    "Monday-Friday: 6AM-8PM, Saturday: 8AM-6PM, Sunday: 9AM-4PM"}
                </p>
              </div>

              {data?.contactInfo && (
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Contact Us
                  </h4>
                  <div className="space-y-2">
                    {data.contactInfo.phone && (
                      <a
                        href={`tel:${data.contactInfo.phone}`}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand-sageDark transition"
                      >
                        <Phone className="w-4 h-4" />
                        {data.contactInfo.phone}
                      </a>
                    )}
                    {data.contactInfo.email && (
                      <a
                        href={`mailto:${data.contactInfo.email}`}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand-sageDark transition"
                      >
                        <Mail className="w-4 h-4" />
                        {data.contactInfo.email}
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* INPUT AREA */}
      <div className="border-t border-gray-200 p-4 bg-white">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message here..."
              className="w-full border border-gray-300 rounded-2xl px-4 py-3 pr-12 text-sm resize-none focus:outline-none focus:border-brand-sage focus:ring-2 focus:ring-brand-sage/20"
              rows={1}
              style={{ minHeight: "44px", maxHeight: "120px" }}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = "auto";
                target.style.height = Math.min(target.scrollHeight, 120) + "px";
              }}
            />

            {/* Character count */}
            {input.length > 100 && (
              <div
                className={`absolute bottom-2 right-3 text-xs ${input.length > 200 ? "text-red-500" : "text-gray-400"}`}
              >
                {input.length}/200
              </div>
            )}
          </div>

          <button
            onClick={sendMessage}
            disabled={!input.trim() || isSending}
            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
              input.trim()
                ? "bg-brand-sageDark hover:bg-brand-sage text-white"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            {isSending ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Footer note */}
        <p className="text-xs text-gray-500 text-center mt-3">
          By using this chat, you agree to our privacy policy. Responses may be
          automated.
        </p>
      </div>
    </div>
  );
};

export default ChatWindow;
