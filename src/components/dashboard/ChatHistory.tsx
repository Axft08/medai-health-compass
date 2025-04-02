
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, MessageCircle, LightbulbIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

interface ChatSession {
  id: string;
  title: string;
  date: Date;
  preview: string;
}

const ChatHistory = () => {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const { user } = useAuth();

  useEffect(() => {
    const fetchChatHistory = async () => {
      if (!user?.id) return;

      try {
        const { data, error } = await supabase
          .from('chat_history')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (error) throw error;

        if (data && data.length > 0) {
          const formattedSessions: ChatSession[] = data.map(chat => ({
            id: chat.id,
            title: chat.user_query.substring(0, 30) + (chat.user_query.length > 30 ? '...' : ''),
            date: new Date(chat.created_at),
            preview: chat.user_query,
          }));
          setSessions(formattedSessions);
        }
      } catch (error) {
        console.error("Error fetching chat history:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChatHistory();
  }, [user]);

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from('chat_history')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setSessions((prev) => prev.filter((session) => session.id !== id));
      
      toast({
        title: "Chat deleted",
        description: "The chat session has been removed.",
      });
    } catch (error) {
      console.error("Error deleting chat:", error);
      toast({
        title: "Error",
        description: "Failed to delete the chat session.",
        variant: "destructive",
      });
    }
  };

  const suggestedQuestions = [
    "What are common symptoms of seasonal allergies?",
    "How can I improve my sleep quality?",
    "What foods are good for heart health?",
    "How much exercise is recommended weekly?",
    "What are the signs of vitamin D deficiency?",
    "How can I manage stress naturally?"
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Recent Conversations</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-pulse">Loading conversations...</div>
          </div>
        ) : sessions.length > 0 ? (
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
          <div className="space-y-6 py-4">
            <div className="text-center py-4 text-muted-foreground">
              <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <h3 className="font-medium text-lg">No conversations yet</h3>
              <p className="text-sm mt-1 mb-6">
                Start a new chat to get personalized health guidance.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium mb-3 flex items-center">
                <LightbulbIcon className="h-4 w-4 mr-2 text-amber-500" />
                Try asking about:
              </h3>
              <div className="space-y-2">
                {suggestedQuestions.map((question, index) => (
                  <div 
                    key={index} 
                    className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => {
                      // Find the chat input and focus it with this text
                      const inputElement = document.querySelector("input[placeholder='Type your health question...']") as HTMLInputElement;
                      if (inputElement) {
                        inputElement.value = question;
                        inputElement.focus();
                        
                        // Create and dispatch an input event
                        const event = new Event("input", { bubbles: true });
                        inputElement.dispatchEvent(event);
                      }
                    }}
                  >
                    <p className="text-sm">{question}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ChatHistory;
