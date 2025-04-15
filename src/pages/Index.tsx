
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { UserCard } from "@/components/user/user-card";
import { HackathonCard } from "@/components/hackathon/hackathon-card";
import { hackathons, users } from "@/data/mockData";
import { ArrowRight, Code, Globe, Search, Users } from "lucide-react";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const featuredUsers = users.slice(0, 3);
  const featuredHackathons = hackathons.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onSearchChange={setSearchQuery} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-y-0 right-0 w-full md:w-1/2 bg-gradient-to-l from-white/10 to-transparent transform skew-x-12"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/10 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Find Your Perfect Hackathon Team
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Connect with skilled teammates who share your vision and build amazing projects together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-indigo-700 hover:bg-gray-100"
                asChild
              >
                <Link to="/teammates">
                  <Search className="mr-2 h-5 w-5" />
                  Find Teammates
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/20"
                asChild
              >
                <Link to="/hackathons">
                  <Code className="mr-2 h-5 w-5" />
                  Browse Hackathons
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Teammates */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Featured Teammates</h2>
              <p className="text-gray-600">Connect with talented developers, designers, and creators</p>
            </div>
            <Button variant="ghost" className="text-purple-600" asChild>
              <Link to="/teammates">
                View All
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredUsers.map(user => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Hackathons */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Upcoming Hackathons</h2>
              <p className="text-gray-600">Discover exciting challenges and opportunities</p>
            </div>
            <Button variant="ghost" className="text-purple-600" asChild>
              <Link to="/hackathons">
                View All
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredHackathons.map(hackathon => (
              <HackathonCard key={hackathon.id} hackathon={hackathon} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose HackMatch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make finding the perfect hackathon team simple, efficient, and effective
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Skilled Network</h3>
              <p className="text-gray-600">
                Connect with teammates who have complementary skills to bring your ideas to life
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mb-4">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
              <p className="text-gray-600">
                Find teammates from around the world for both in-person and online hackathons
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-4">
                <Search size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Matching</h3>
              <p className="text-gray-600">
                Our filters help you find the perfect teammates based on skills, location, and experience
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to find your perfect hackathon team?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join our community of developers, designers, and innovators today and start building amazing projects together.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-indigo-700 hover:bg-gray-100"
            asChild
          >
            <Link to="/teammates">
              <Users className="mr-2 h-5 w-5" />
              Find Teammates Now
            </Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
