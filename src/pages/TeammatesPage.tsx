
import { useState, useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { UserCard } from "@/components/user/user-card";
import { FilterSidebar } from "@/components/filters/filter-sidebar";
import { FilterOptions, User } from "@/types";
import { filterUsers, hackathons, users } from "@/data/mockData";
import { UsersIcon } from "lucide-react";

export default function TeammatesPage() {
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
  const [filters, setFilters] = useState<Partial<FilterOptions>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Apply filters
  const handleFilterChange = (newFilters: Partial<FilterOptions>) => {
    setFilters(newFilters);
    // Simulate loading state
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      setFilteredUsers(filterUsers(newFilters));
      setIsLoading(false);
    }, 300);
  };

  // Initial load
  useEffect(() => {
    // Simulate initial loading
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onSearchChange={(query) => handleFilterChange({ ...filters, searchQuery: query })} />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Find Teammates</h1>
            <p className="text-gray-600">
              Connect with developers, designers, and creators for your next hackathon
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters */}
            <div className="md:w-72 flex-shrink-0">
              <FilterSidebar
                hackathons={hackathons}
                onFilterChange={handleFilterChange}
                className="sticky top-24"
              />
            </div>
            
            {/* Results */}
            <div className="flex-grow">
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-56 bg-white rounded-lg shadow-sm animate-pulse border border-gray-200"></div>
                  ))}
                </div>
              ) : filteredUsers.length > 0 ? (
                <>
                  <p className="mb-4 text-sm text-gray-500">
                    Showing {filteredUsers.length} {filteredUsers.length === 1 ? 'teammate' : 'teammates'}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredUsers.map(user => (
                      <UserCard key={user.id} user={user} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
                  <UsersIcon className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-1">No teammates found</h3>
                  <p className="text-gray-500 mb-6">
                    Try adjusting your filters to find more teammates
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
