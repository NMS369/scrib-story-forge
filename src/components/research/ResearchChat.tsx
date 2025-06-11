import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, Bot, User, ExternalLink, BookOpen, Users, TrendingUp } from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "ai";
  content: string;
  timestamp: string;
  suggestions?: string[];
}

interface ResearchChatProps {
  selectedAgent?: {
    name: string;
    agency: string;
    genres: string[];
  };
}

export const ResearchChat = ({ selectedAgent }: ResearchChatProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "ai",
      content: selectedAgent 
        ? `I can help you research ${selectedAgent.name} at ${selectedAgent.agency}. What would you like to know about their client list, manuscript wish list, or query preferences?`
        : "Hi! I'm your AI research assistant. I can help you research literary agents, analyze their manuscript wish lists, track their recent deals, and find the perfect match for your story. What would you like to explore?",
      timestamp: new Date().toLocaleTimeString(),
      suggestions: selectedAgent
        ? [
            "Tell me about their recent deals",
            "What are their query guidelines?", 
            "Who are their current clients?",
            "What's on their MSWL?"
          ]
        : [
            "Find agents for my genre",
            "Research successful debuts in 2024",
            "Analyze market trends",
            "Help me craft a query letter"
          ]
    }
  ]);
  
  const [currentMessage, setCurrentMessage] = useState("");

  const sendMessage = () => {
    if (!currentMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      content: currentMessage,
      timestamp: new Date().toLocaleTimeString()
    };

    // Generate AI response based on the message
    const aiResponse = generateAIResponse(currentMessage);
    
    setMessages(prev => [...prev, userMessage, aiResponse]);
    setCurrentMessage("");
  };

  const generateAIResponse = (userMessage: string): Message => {
    const responses = {
      deals: {
        content: selectedAgent 
          ? `${selectedAgent.name} recently represented several notable deals:\n\n• "The Memory Garden" by Lisa Chen - 6-figure debut literary fiction deal with Penguin Random House\n• "Digital Hearts" by Marcus Williams - YA romance deal with HarperTeen\n• "The Last Bookstore" by Sarah Ahmed - Literary fiction with Knopf\n\nThese deals show they're actively selling and have strong relationships with major publishers.`
          : "I can help you research recent deals! Which genre or specific agent would you like me to focus on?",
        suggestions: ["What genres do they prefer?", "Tell me about their submission process", "How long is their response time?"]
      },
      guidelines: {
        content: selectedAgent
          ? `${selectedAgent.name}'s query guidelines:\n\n📧 Email submissions only\n📝 Query letter + first 5 pages in email body\n🚫 No attachments for initial query\n⏰ Response time: 6-8 weeks\n📅 Currently open to submissions\n\nThey prefer concise queries that clearly state genre, word count, and compelling hook.`
          : "I can look up query guidelines for any agent. Which agent would you like me to research?",
        suggestions: ["What makes a strong query for them?", "Show me successful query examples", "What are their pet peeves?"]
      },
      clients: {
        content: selectedAgent
          ? `${selectedAgent.name} represents these notable authors:\n\n✨ Established Authors:\n• Emma Straub (Contemporary Fiction)\n• Min Jin Lee (Literary Fiction)\n• Celeste Ng (Literary Fiction)\n\n🌟 Debut Authors (2023-2024):\n• Lisa Chen - "The Memory Garden"\n• James Park - "Seoul Stories"\n• Maria Santos - "Border Crossings"\n\nThis shows they work with both established and debut authors.`
          : "I can research any agent's client list. Which agent interests you?",
        suggestions: ["What genres do their clients write?", "Any recent debut successes?", "How diverse is their client list?"]
      },
      mswl: {
        content: selectedAgent
          ? `${selectedAgent.name}'s current MSWL (Manuscript Wish List):\n\n💫 Priority Interests:\n• Literary fiction with diverse voices\n• Stories exploring identity and belonging\n• Multigenerational family sagas\n• Climate fiction and near-future narratives\n\n🎯 Specific Elements They Love:\n• Beautiful, lyrical prose\n• Complex female characters\n• International settings\n• Books that spark conversation\n\n❌ Not Seeking:\n• Fantasy or science fiction\n• Young adult\n• Memoir or non-fiction`
          : "I can analyze any agent's MSWL! Which agent would you like me to research?",
        suggestions: ["Does my story fit their interests?", "What recent deals match their MSWL?", "How often do they update their MSWL?"]
      }
    };

    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("deal") || lowerMessage.includes("sale")) {
      return { ...responses.deals, id: Date.now().toString(), sender: "ai", timestamp: new Date().toLocaleTimeString() };
    } else if (lowerMessage.includes("guideline") || lowerMessage.includes("query") || lowerMessage.includes("submit")) {
      return { ...responses.guidelines, id: Date.now().toString(), sender: "ai", timestamp: new Date().toLocaleTimeString() };
    } else if (lowerMessage.includes("client")) {
      return { ...responses.clients, id: Date.now().toString(), sender: "ai", timestamp: new Date().toLocaleTimeString() };
    } else if (lowerMessage.includes("mswl") || lowerMessage.includes("wish") || lowerMessage.includes("seeking")) {
      return { ...responses.mswl, id: Date.now().toString(), sender: "ai", timestamp: new Date().toLocaleTimeString() };
    }

    return {
      id: Date.now().toString(),
      sender: "ai",
      content: "I can help you research agents' recent deals, client lists, manuscript wish lists, and query guidelines. What specific information would you like to explore?",
      timestamp: new Date().toLocaleTimeString(),
      suggestions: ["Research recent deals", "Analyze submission guidelines", "Find similar agents", "Compare success rates"]
    };
  };

  const handleSuggestion = (suggestion: string) => {
    setCurrentMessage(suggestion);
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5" />
          AI Research Assistant
        </CardTitle>
        <CardDescription>
          {selectedAgent 
            ? `Researching ${selectedAgent.name} - ${selectedAgent.agency}`
            : "Get intelligent insights about agents, markets, and opportunities"
          }
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4 h-full flex flex-col">
        {/* Chat Messages */}
        <ScrollArea className="flex-1 h-80 border rounded-lg p-4 bg-muted/30">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] space-y-2 ${
                  message.sender === "user" 
                    ? "text-right" 
                    : "text-left"
                }`}>
                  <div className={`rounded-lg p-3 ${
                    message.sender === "user" 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-background border"
                  }`}>
                    <div className="flex items-start gap-2">
                      {message.sender === "ai" && <Bot className="h-4 w-4 mt-1 flex-shrink-0" />}
                      <div className="space-y-2">
                        <p className="text-sm whitespace-pre-line">{message.content}</p>
                        <p className="text-xs opacity-70">{message.timestamp}</p>
                      </div>
                      {message.sender === "user" && <User className="h-4 w-4 mt-1 flex-shrink-0" />}
                    </div>
                  </div>
                  
                  {/* Suggestions */}
                  {message.suggestions && message.sender === "ai" && (
                    <div className="flex flex-wrap gap-2">
                      {message.suggestions.map((suggestion, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={() => handleSuggestion(suggestion)}
                          className="text-xs"
                        >
                          {suggestion}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-2">
          <Button variant="outline" size="sm" className="gap-1" onClick={() => handleSuggestion("Research recent deals")}>
            <TrendingUp className="h-3 w-3" />
            Recent Deals
          </Button>
          <Button variant="outline" size="sm" className="gap-1" onClick={() => handleSuggestion("Find similar agents")}>
            <Users className="h-3 w-3" />
            Similar Agents
          </Button>
          <Button variant="outline" size="sm" className="gap-1" onClick={() => handleSuggestion("Analyze market trends")}>
            <BookOpen className="h-3 w-3" />
            Market Trends
          </Button>
        </div>

        {/* Message Input */}
        <div className="flex gap-2">
          <Input
            placeholder="Ask about agents, deals, trends, or anything else..."
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            className="flex-1"
          />
          <Button onClick={sendMessage} size="sm" className="gap-2">
            <Send className="h-4 w-4" />
            Send
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};