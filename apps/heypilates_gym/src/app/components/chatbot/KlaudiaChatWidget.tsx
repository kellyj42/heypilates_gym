"use client";

import { useState, useEffect, useRef } from "react";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";
import { requestNotificationPermission, playNotificationSound } from "../../utils/notifications";

type ChatbotData = {
  name?: string;
  title?: string;
  avatar?: {
    asset?: {
      url?: string;
    };
  };
  welcomeMessage?: string;
  fallbackMessage?: string;
  faqs?: Array<{
    question: string;
    keywords: string[];
    answer: string;
    links?: Array<{ text: string; url: string }>;
    priority: number;
  }>;
  suggestedQuestions?: string[];
  hours?: string;
  contactInfo?: {
    phone?: string;
    email?: string;
    whatsapp?: string;
  };
  isActive?: boolean;
};

type KlaudiaChatWidgetProps = {
  data?: ChatbotData;
};

export default function KlaudiaChatWidget({ data }: KlaudiaChatWidgetProps) {
  const [open, setOpen] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const isMounted = useRef(false);

  // Close chat when clicking outside (implemented in ChatWindow)
  // Sound notification for new messages
  const playNotificationSound = () => {
    if (typeof window !== 'undefined' && window.Notification?.permission === 'granted') {
      const audio = new Audio('/notification.mp3');
      audio.volume = 0.3;
      audio.play().catch(() => {});
    }
  };

  // Auto-open chat on first visit after 30 seconds
  useEffect(() => {
    if (!isMounted.current && typeof window !== 'undefined') {
      isMounted.current = true;
      const hasVisited = sessionStorage.getItem('hasVisitedChat');
      
      if (!hasVisited) {
        const timer = setTimeout(() => {
          setOpen(true);
          sessionStorage.setItem('hasVisitedChat', 'true');
        }, 30000);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  // Handle new messages when chat is closed
  const handleNewMessage = () => {
    if (!open) {
      setUnreadMessages(prev => prev + 1);
      playNotificationSound();
      
      // Browser notification
      if (typeof window !== 'undefined' && window.Notification?.permission === 'granted') {
        new Notification("New message from Klaudia", {
          body: "Click to open the chat",
          icon: data?.avatar?.asset?.url || "/Klaudia.jpg"
        });
      }
    }
  };

  return (
    <>
      <ChatButton 
        onClick={() => setOpen(true)} 
        unreadCount={unreadMessages}
        data={data}
        isTyping={isTyping}
      />
      {open && (
        <ChatWindow 
          onClose={() => {
            setOpen(false);
            setUnreadMessages(0);
          }} 
          data={data}
          onNewMessage={handleNewMessage}
          setIsTyping={setIsTyping}
        />
      )}
    </>
  );
}