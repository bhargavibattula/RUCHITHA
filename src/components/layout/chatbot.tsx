"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What are your core skills?",
    a: "My core expertise lies in AI & ML, specifically building RAG pipelines, working with LLMs, and deploying models to embedded systems. I also have full-stack development experience."
  },
  {
    q: "Are you open to internships?",
    a: "Yes! I am currently looking for AI/ML engineering internships where I can work on real-world production systems."
  },
  {
    q: "What did you do at IIIT Allahabad?",
    a: "I worked at the intersection of machine learning and robotics. I integrated hardware sensors into feedback loops and deployed trained ML models directly onto embedded hardware to reduce manual intervention."
  }
];

type Message = {
  role: "user" | "bot";
  content: string;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hi! I'm Ruchitha's AI assistant. How can I help you today?" }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleAsk = (faq: typeof faqs[0]) => {
    setMessages((prev) => [...prev, { role: "user", content: faq.q }]);
    
    // Simulate typing delay
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", content: faq.a }]);
    }, 600);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-violet-primary to-violet-accent text-white shadow-[0_4px_20px_-6px_rgba(124,58,237,0.5)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_24px_-4px_rgba(168,85,247,0.6)]",
          isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"
        )}
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-6 right-6 z-[100] flex h-[480px] max-h-[80vh] w-[350px] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl glass-strong shadow-2xl transition-all duration-300 origin-bottom-right",
          isOpen ? "scale-100 opacity-100" : "scale-50 opacity-0 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[--color-border] bg-gradient-to-r from-violet-primary/10 to-violet-accent/10 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-violet-primary to-violet-accent text-white">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-semibold tracking-tight text-[--color-foreground]">AI Assistant</h3>
              <p className="text-xs text-[--color-muted]">Ask me anything!</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full p-2 text-[--color-muted] transition-colors hover:bg-[--color-border] hover:text-[--color-foreground]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 scroll-smooth">
          {messages.map((msg, i) => (
            <div key={i} className={cn("flex w-full", msg.role === "user" ? "justify-end" : "justify-start")}>
              <div className={cn("flex max-w-[85%] gap-2", msg.role === "user" ? "flex-row-reverse" : "flex-row")}>
                <div className={cn(
                  "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full mt-1",
                  msg.role === "user" ? "bg-[--color-border]" : "bg-gradient-to-r from-violet-primary to-violet-accent text-white"
                )}>
                  {msg.role === "user" ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
                </div>
                <div className={cn(
                  "rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                  msg.role === "user" 
                    ? "bg-[--color-border] text-[--color-foreground] rounded-tr-sm" 
                    : "glass text-[--color-foreground] rounded-tl-sm"
                )}>
                  {msg.content}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* FAQs / Inputs */}
        <div className="border-t border-[--color-border] bg-background/50 p-4">
          <p className="mb-3 text-xs font-medium text-[--color-muted]">Suggested Questions:</p>
          <div className="flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <button
                key={i}
                onClick={() => handleAsk(faq)}
                className="flex items-center justify-between rounded-xl glass px-3 py-2 text-left text-xs text-[--color-muted] transition-colors hover:border-violet-accent hover:text-violet-accent"
              >
                <span className="line-clamp-1">{faq.q}</span>
                <Send className="h-3 w-3 flex-shrink-0 opacity-50" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
