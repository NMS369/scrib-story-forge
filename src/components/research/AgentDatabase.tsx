import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Users, Building2, Mail, ExternalLink, Star, Heart } from "lucide-react";

interface Agent {
  id: string;
  name: string;
  agency: string;
  genres: string[];
  status: "Open" | "Closed" | "Limited";
  lastUpdated: string;
  clientList: string[];
  mswl: string[];
  queryGuidelines: string;
  responseTime: string;
  successRate: number;
  matchScore?: number;
}

interface AgentDatabaseProps {
  storyGenre?: string;
  onAgentSelect: (agent: Agent) => void;
}

const mockAgents: Agent[] = [
  {
    id: "1",
    name: "Sarah Chen",
    agency: "Meridian Literary Agency",
    genres: ["Literary Fiction", "Women's Fiction", "Historical Fiction"],
    status: "Open",
    lastUpdated: "2 days ago",
    clientList: ["Emma Straub", "Celeste Ng", "Min Jin Lee"],
    mswl: [
      "Character-driven literary fiction",
      "Stories exploring identity and belonging", 
      "Diverse voices and perspectives",
      "Beautiful prose with emotional depth"
    ],
    queryGuidelines: "Query letter + first 5 pages in email body. No attachments.",
    responseTime: "4-6 weeks",
    successRate: 85,
    matchScore: 92
  },
  {
    id: "2", 
    name: "Marcus Rodriguez",
    agency: "BookForward Literary",
    genres: ["Science Fiction", "Fantasy", "Speculative Fiction"],
    status: "Open",
    lastUpdated: "1 week ago",
    clientList: ["Andy Weir", "Martha Wells", "N.K. Jemisin"],
    mswl: [
      "Hard science fiction with accurate science",
      "Fantasy with unique magic systems",
      "Climate fiction and dystopian futures",
      "Diverse characters in genre fiction"
    ],
    queryGuidelines: "Query letter + synopsis + first chapter as attachment.",
    responseTime: "6-8 weeks", 
    successRate: 78,
    matchScore: 88
  },
  {
    id: "3",
    name: "Jennifer Walsh",
    agency: "Creative Artists Agency",
    genres: ["Romance", "Women's Fiction", "Young Adult"],
    status: "Limited",
    lastUpdated: "3 days ago",
    clientList: ["Colleen Hoover", "Christina Lauren", "Rainbow Rowell"],
    mswl: [
      "Contemporary romance with diverse characters",
      "Young adult with authentic teen voices",
      "Women's fiction exploring relationships",
      "LGBTQ+ romance stories"
    ],
    queryGuidelines: "Query letter only. No attachments or sample pages.",
    responseTime: "8-12 weeks",
    successRate: 91,
    matchScore: 75
  },
  {
    id: "4",
    name: "David Kim",
    agency: "New Leaf Literary",
    genres: ["Mystery", "Thriller", "Crime"],
    status: "Open",
    lastUpdated: "5 days ago", 
    clientList: ["Tana French", "Louise Penny", "John Hart"],
    mswl: [
      "Police procedurals with complex characters",
      "Psychological thrillers",
      "International crime fiction",
      "Mystery with social commentary"
    ],
    queryGuidelines: "Query letter + first 3 chapters pasted in email.",
    responseTime: "3-5 weeks",
    successRate: 82,
    matchScore: 70
  }
];

export const AgentDatabase = ({ storyGenre, onAgentSelect }: AgentDatabaseProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [genreFilter, setGenreFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("match");

  const filteredAgents = mockAgents
    .filter(agent => {
      const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           agent.agency.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = genreFilter === "all" || agent.genres.some(g => g.toLowerCase().includes(genreFilter.toLowerCase()));
      const matchesStatus = statusFilter === "all" || agent.status.toLowerCase() === statusFilter.toLowerCase();
      
      return matchesSearch && matchesGenre && matchesStatus;
    })
    .sort((a, b) => {
      if (sortBy === "match") return (b.matchScore || 0) - (a.matchScore || 0);
      if (sortBy === "success") return b.successRate - a.successRate;
      if (sortBy === "updated") return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Agent Research Database
          </CardTitle>
          <CardDescription>
            Explore agents' manuscript wish lists and query preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search agents or agencies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={genreFilter} onValueChange={setGenreFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Genres" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Genres</SelectItem>
                <SelectItem value="literary">Literary Fiction</SelectItem>
                <SelectItem value="romance">Romance</SelectItem>
                <SelectItem value="fantasy">Fantasy</SelectItem>
                <SelectItem value="mystery">Mystery/Thriller</SelectItem>
                <SelectItem value="science">Science Fiction</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="limited">Limited</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="match">Best Match</SelectItem>
                <SelectItem value="success">Success Rate</SelectItem>
                <SelectItem value="updated">Recently Updated</SelectItem>
                <SelectItem value="name">Name A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Agent Results */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredAgents.map((agent) => (
          <Card key={agent.id} className="hover-scale cursor-pointer" onClick={() => onAgentSelect(agent)}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{agent.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Building2 className="h-4 w-4" />
                    {agent.agency}
                  </CardDescription>
                </div>
                <div className="text-right">
                  {agent.matchScore && (
                    <Badge variant="default" className="mb-2">
                      {agent.matchScore}% match
                    </Badge>
                  )}
                  <Badge variant={
                    agent.status === "Open" ? "default" :
                    agent.status === "Limited" ? "secondary" : "outline"
                  }>
                    {agent.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Genres */}
              <div>
                <h4 className="text-sm font-medium mb-2">Represents:</h4>
                <div className="flex flex-wrap gap-1">
                  {agent.genres.map(genre => (
                    <Badge key={genre} variant="outline" className="text-xs">
                      {genre}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Notable Clients */}
              <div>
                <h4 className="text-sm font-medium mb-2">Notable Clients:</h4>
                <p className="text-sm text-muted-foreground">
                  {agent.clientList.slice(0, 2).join(", ")}
                  {agent.clientList.length > 2 && "..."}
                </p>
              </div>

              {/* MSWL Preview */}
              <div>
                <h4 className="text-sm font-medium mb-2">Seeking:</h4>
                <ScrollArea className="h-20">
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {agent.mswl.slice(0, 2).map((item, index) => (
                      <li key={index} className="flex items-start gap-1">
                        <Heart className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>{agent.successRate}% success rate</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{agent.responseTime}</span>
                </div>
              </div>

              <Button variant="outline" className="w-full gap-2">
                <ExternalLink className="h-4 w-4" />
                View Full Profile & Research
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};