
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, MessageCircle } from "lucide-react";
import { useToast } from "@/components/ui/toast";

interface ChatSession {
  id: string;
  title: string;
  date: Date;
  preview: string;
}

const ChatHistory = () => {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    // In a real app, this would fetch from an API
    // For now, we'll use mock data
    const mockSessions: ChatSession[] = [
      {
        id: "1",
        title: "Headache Consultation",
        date: new Date(Date.now() - 24 * 60 * 60 * 1000),
        preview: "What could be causing my recurring headaches?",
      },
      {
        id: "2",
        title: "Diet Recommendations",
        date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        preview: "Can you suggest a diet plan for type 2 diabetes?",
      },
      {
        id: "3",
        title: "Medication Information",
        date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        preview: "What are the side effects of ibuprofen?",
      },
    ];
    
    setSessions(mockSessions);
  }, []);

  const handleDelete = (id: string) => {
    setSessions((prev) => prev.filter((session) => session.id !== id));
    
    toast({
      title: "Chat deleted",
      description: "The chat session has been removed.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Recent Conversations</CardTitle>
      </CardHeader>
      <CardContent>
        {sessions.length > 0 ? (
          <div className="space-y-4">
            {sessions.map((session) => (
              <div 
                key={session.id} 
                className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium flex items-center">
                      <MessageCircle className="h-4 w-4 mr-2 text-medai-primary" />
                      {session.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      }).format(session.date)}
                    </p>
                    <p className="text-sm mt-2 line-clamp-2">{session.preview}</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    onClick={() => handleDelete(session.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <h3 className="font-medium text-lg">No conversations yet</h3>
            <p className="text-sm mt-1">
              Start a new chat to get personalized health guidance.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ChatHistory;
