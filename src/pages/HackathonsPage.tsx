
import { useState, useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HackathonCard } from "@/components/hackathon/hackathon-card";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge-list";
import { hackathons } from "@/data/mockData";
import { Calendar, LayoutGrid, Search } from "lucide-react";

export default function HackathonsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState<"all" | "online" | "in-person">("all");
  const [filteredHackathons, setFilteredHackathons] = useState(hackathons);
  const [isLoading, setIsLoading] = useState(true);
  
  // Apply filters
  useEffect(() => {
    setIsLoading(true);
    
    // Filter hackathons based on search query and location
    const filtered = hackathons.filter((hackathon) => {
      // Search query filter (name or location)
      const matchesSearch = searchQuery === "" || 
        hackathon.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        hackathon.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hackathon.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Location type filter
      const matchesLocation = 
        locationFilter === "all" || 
        (locationFilter === "online" && hackathon.isOnline) || 
        (locationFilter === "in-person" && !hackathon.isOnline);
        
      return matchesSearch && matchesLocation;
    });
    
    // Simulate API delay
    setTimeout(() => {
      setFilteredHackathons(filtered);
      setIsLoading(false);
    }, 300);
  }, [searchQuery, locationFilter]);

  // Initial load
  useEffect(() => {
    // Simulate initial loading
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Hackathons</h1>
            <p className="text-gray-600">
              Discover upcoming hackathons and find teammates for your next project
            </p>
          </div>
          
          {/* Filters */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search hackathons..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="w-full md:w-48">
                <Select value={locationFilter} onValueChange={(value) => setLocationFilter(value as any)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="online">Online Only</SelectItem>
                    <SelectItem value="in-person">In-person Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {/* Results */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-64 bg-white rounded-lg shadow-sm animate-pulse border border-gray-200"></div>
              ))}
            </div>
          ) : filteredHackathons.length > 0 ? (
            <>
              <div className="flex justify-between items-center mb-6">
                <p className="text-sm text-gray-500">
                  Showing {filteredHackathons.length} {filteredHackathons.length === 1 ? 'hackathon' : 'hackathons'}
                </p>
                <div className="flex items-center">
                  <Badge color="purple" size="sm" className="mr-2">
                    <Calendar size={12} className="mr-1" /> 
                    Sorted by date
                  </Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredHackathons.map(hackathon => (
                  <HackathonCard key={hackathon.id} hackathon={hackathon} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
              <Calendar className="h-12 w-12 mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">No hackathons found</h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search to find more hackathons
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
