interface FAQ {
  question: string;
  keywords: string[];
  answer: string;
  links?: Array<{ text: string; url: string }>;
  priority: number;
}

interface ChatResponse {
  reply: string;
  links?: Array<{ text: string; url: string }>;
}

export function getKlaudiaReply(message: string, faqs: FAQ[] = [], fallbackMessage: string = ""): ChatResponse {
  const text = message.toLowerCase().trim();
  
  // Handle greetings
  if (text.match(/(hi|hello|hey|good morning|good afternoon)/)) {
    return {
      reply: "Hello there! 👋 How can I help you today? Feel free to ask about our classes, pricing, private training, or anything else!",
      links: [
        { text: "View Pricing", url: "/pricing" },
        { text: "Book a Class", url: "/booking" },
        { text: "Private Training", url: "/private-training" }
      ]
    };
  }
  
  // Handle thanks
  if (text.match(/(thank|thanks|appreciate)/)) {
    return {
      reply: "You're very welcome! 😊 Is there anything else I can help you with?"
    };
  }
  
  // Handle goodbye
  if (text.match(/(bye|goodbye|see you)/)) {
    return {
      reply: "Thanks for chatting! Have a wonderful day and hope to see you at the studio soon! ✨"
    };
  }
  
  // Match against FAQs with priority
  const matches: Array<{ faq: FAQ; score: number }> = [];
  
  for (const faq of faqs) {
    let score = 0;
    
    // Check exact keyword matches
    for (const keyword of faq.keywords) {
      const regex = new RegExp(`\\b${keyword.toLowerCase()}\\b`);
      if (regex.test(text)) {
        score += 2; // Exact word match gets higher score
      } else if (text.includes(keyword.toLowerCase())) {
        score += 1; // Partial match
      }
    }
    
    // Check for question match
    if (faq.question.toLowerCase().includes(text) || text.includes(faq.question.toLowerCase())) {
      score += 3; // Direct question match gets highest score
    }
    
    if (score > 0) {
      matches.push({ faq, score: score + faq.priority });
    }
  }
  
  // Sort by score (highest first)
  matches.sort((a, b) => b.score - a.score);
  
  if (matches.length > 0) {
    const bestMatch = matches[0].faq;
    return {
      reply: bestMatch.answer,
      links: bestMatch.links
    };
  }
  
  // If no match, try to suggest related topics
  const allKeywords = faqs.flatMap(faq => faq.keywords);
  const suggested = allKeywords.filter(keyword => 
    keyword.length > 4 && text.includes(keyword.toLowerCase())
  );
  
  if (suggested.length > 0) {
    return {
      reply: `${fallbackMessage || "That's a great question!"} Were you asking about ${suggested.slice(0, 2).join(' or ')}?`,
      links: faqs
        .filter(faq => faq.keywords.some(k => suggested.includes(k)))
        .slice(0, 3)
        .flatMap(faq => faq.links || [])
    };
  }
  
  // Fallback
  return {
    reply: fallbackMessage || "That's a great question! I might need to explain it in person — feel free to contact us directly or ask about our classes, pricing, or private training!",
    links: [
      { text: "Contact Us", url: "/contact" },
      { text: "View Pricing", url: "/pricing" },
      { text: "Book a Session", url: "/booking" }
    ]
  };
}