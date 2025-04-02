
import { Button } from "@/components/ui/button";

interface ChatSuggestionsProps {
  onSuggestionClick: (suggestion: string) => void;
}

const ChatSuggestions: React.FC<ChatSuggestionsProps> = ({ onSuggestionClick }) => {
  const suggestions = [
    "What are the symptoms of COVID-19?",
    "Is my headache serious?",
    "How can I reduce fever naturally?",
    "What medicines help with allergies?",
    "Diet recommendations for diabetes",
    "When should I see a doctor about chest pain?",
  ];

  return (
    <div className="my-4 space-y-3">
      <h3 className="font-medium text-sm">Suggested Questions:</h3>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className="bg-white border-medai-secondary text-medai-secondary hover:bg-medai-light hover:text-medai-dark"
            onClick={() => onSuggestionClick(suggestion)}
          >
            {suggestion}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ChatSuggestions;
