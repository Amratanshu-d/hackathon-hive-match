
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, MessageSquare, Search, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

interface HeaderProps {
  onSearchChange?: (query: string) => void;
}

export function Header({ onSearchChange }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Update search query
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (onSearchChange) {
      onSearchChange(query);
    }
  };

  // Track scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white ${
        isScrolled ? "shadow-md" : ""
      } transition-shadow duration-300`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold">
            HM
          </div>
          <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600">
            HackMatch
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Home
          </Link>
          <Link
            to="/teammates"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Find Teammates
          </Link>
          <Link
            to="/hackathons"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Hackathons
          </Link>
          <Link
            to="/messages"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Messages
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex relative max-w-md w-full mx-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search for teammates or skills..."
            className="pl-10 pr-4 py-2 w-full"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-3">
          <Button
            size="icon"
            variant="ghost"
            className="text-gray-500 hover:text-gray-700"
          >
            <Bell size={20} />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="text-gray-500 hover:text-gray-700"
            asChild
          >
            <Link to="/messages">
              <MessageSquare size={20} />
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-700"
            asChild
          >
            <Link to="/profile/me">
              <UserCircle size={20} />
              <span className="hidden md:inline text-sm font-medium">Profile</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
