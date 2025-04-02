
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { SendIcon, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { getMockResponse } from "@/lib/mockAi";

type Message = {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
};

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hello! I'm MedAI Health Compass. How can I assist with your health questions today? Remember, I'm here to provide information, not to replace medical advice from your doctor.",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);
    
    try {
      // In a real application, this would call an AI API
      // For now, we'll use a mock response
      const response = await getMockResponse(inputValue);
      
      // Add AI response
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: "ai",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      
      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I encountered an error. Please try again later.",
        sender: "ai",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleNewChat = () => {
    setMessages([
      {
        id: "welcome",
        content: "Hello! I'm MedAI Health Compass. How can I assist with your health questions today?",
        sender: "ai",
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <Card className="w-full h-full flex flex-col">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-medium">Health Assistant</h2>
        <Button 
          variant="outline" 
          size="sm"
          onClick={handleNewChat}
          className="flex items-center gap-1"
        >
          <PlusCircle className="h-4 w-4" />
          <span>New Chat</span>
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 message-list">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "message",
              message.sender === "user" ? "user-message" : "ai-message"
            )}
          >
            <div className="flex flex-col">
              <span className="text-sm font-medium">
                {message.sender === "user" ? "You" : "MedAI"}
              </span>
              <p className="whitespace-pre-line">{message.content}</p>
              <span className="text-xs opacity-70 self-end mt-1">
                {new Intl.DateTimeFormat("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                }).format(message.timestamp)}
              </span>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="message ai-message">
            <div className="typing-indicator">
              MedAI is typing<span>.</span><span>.</span><span>.</span>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSendMessage} className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            placeholder="Type your health question..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1"
            disabled={isTyping}
          />
          <Button 
            type="submit" 
            className="bg-medai-primary hover:bg-medai-dark"
            disabled={!inputValue.trim() || isTyping}
          >
            <SendIcon className="h-5 w-5" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Disclaimer: This AI assistant provides information only and is not a substitute for professional medical advice.
        </p>
      </form>
    </Card>
  );
};

export default ChatInterface;
