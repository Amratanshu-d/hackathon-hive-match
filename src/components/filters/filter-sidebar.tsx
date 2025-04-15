
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge, BadgeList } from "@/components/ui/badge-list";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FilterX, Search, Sliders } from "lucide-react";
import { skillsList } from "@/data/mockData";
import { FilterOptions, Hackathon, SkillCategory, Experience } from "@/types";

interface FilterSidebarProps {
  hackathons?: Hackathon[];
  onFilterChange: (filters: Partial<FilterOptions>) => void;
  className?: string;
}

export function FilterSidebar({
  hackathons = [],
  onFilterChange,
  className,
}: FilterSidebarProps) {
  const [filters, setFilters] = useState<Partial<FilterOptions>>({
    skills: [],
    location: "",
    experience: "" as "" | Experience,
    hackathonInterest: "",
    searchQuery: "",
  });

  const [skillSearch, setSkillSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | "all">("all");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Get unique skill categories for the filter
  const skillCategories = Array.from(
    new Set(skillsList.map((skill) => skill.category))
  ) as SkillCategory[];

  // Filter skills based on search and category
  const filteredSkills = skillsList
    .filter((skill) =>
      skill.name.toLowerCase().includes(skillSearch.toLowerCase())
    )
    .filter((skill) =>
      selectedCategory === "all" ? true : skill.category === selectedCategory
    )
    .map((skill) => skill.name);

  // Update filters and notify parent
  const updateFilters = (newFilters: Partial<FilterOptions>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  // Toggle skill selection
  const toggleSkill = (skillName: string) => {
    const skills = [...(filters.skills || [])];
    const index = skills.findIndex(
      (s) => s.toLowerCase() === skillName.toLowerCase()
    );

    if (index >= 0) {
      skills.splice(index, 1);
    } else {
      skills.push(skillName);
    }

    updateFilters({ skills });
  };

  // Reset filters
  const resetFilters = () => {
    const resetValues = {
      skills: [],
      location: "",
      experience: "" as "" | Experience,
      hackathonInterest: "",
      searchQuery: "",
    };
    setFilters(resetValues);
    onFilterChange(resetValues);
    setSkillSearch("");
    setSelectedCategory("all");
  };

  useEffect(() => {
    // Apply initial filters
    onFilterChange(filters);
  }, []);

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="md:hidden flex justify-between items-center mb-4 px-4">
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
        >
          <Sliders size={16} />
          Filters
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={resetFilters}
          className="text-gray-500"
        >
          <FilterX size={16} className="mr-1" />
          Reset
        </Button>
      </div>

      {/* Filter Sidebar */}
      <div
        className={`${
          showMobileFilters ? "block" : "hidden"
        } md:block bg-white border border-gray-200 rounded-lg shadow-sm p-5 space-y-6 ${className}`}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-lg">Filters</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={resetFilters}
            className="text-gray-500 text-xs"
          >
            Reset all
          </Button>
        </div>

        {/* Location Filter */}
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            placeholder="City, Country or Online"
            value={filters.location}
            onChange={(e) => updateFilters({ location: e.target.value })}
          />
        </div>

        {/* Experience Level Filter */}
        <div className="space-y-2">
          <Label htmlFor="experience">Experience Level</Label>
          <Select
            value={filters.experience}
            onValueChange={(value) => updateFilters({ experience: value as any })}
          >
            <SelectTrigger id="experience">
              <SelectValue placeholder="Select experience level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Any Experience</SelectItem>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
              <SelectItem value="expert">Expert</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Hackathon Filter */}
        {hackathons.length > 0 && (
          <div className="space-y-2">
            <Label htmlFor="hackathon">Interested in Hackathon</Label>
            <Select
              value={filters.hackathonInterest}
              onValueChange={(value) =>
                updateFilters({ hackathonInterest: value })
              }
            >
              <SelectTrigger id="hackathon">
                <SelectValue placeholder="Select hackathon" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Any Hackathon</SelectItem>
                {hackathons.map((hackathon) => (
                  <SelectItem key={hackathon.id} value={hackathon.id}>
                    {hackathon.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Skills Filter */}
        <div className="space-y-3">
          <Label>Skills</Label>
          
          {/* Skills search and category filter */}
          <div className="flex space-x-2">
            <div className="relative flex-grow">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search skills"
                value={skillSearch}
                onChange={(e) => setSkillSearch(e.target.value)}
                className="pl-8"
              />
            </div>
            <Select
              value={selectedCategory}
              onValueChange={(value) => setSelectedCategory(value as any)}
            >
              <SelectTrigger className="w-[110px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                {skillCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Selected Skills */}
          {filters.skills && filters.skills.length > 0 && (
            <div className="mb-2">
              <p className="text-xs text-gray-500 mb-1">Selected Skills:</p>
              <BadgeList
                items={filters.skills}
                color="purple"
                size="sm"
                onClick={toggleSkill}
                activeItems={filters.skills}
              />
            </div>
          )}

          {/* Available Skills */}
          <div className="max-h-[200px] overflow-y-auto">
            {filteredSkills.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {filteredSkills.map((skill) => (
                  <Badge
                    key={skill}
                    color="gray"
                    size="sm"
                    onClick={() => toggleSkill(skill)}
                    active={filters.skills?.includes(skill)}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 italic text-center py-2">
                No skills found
              </p>
            )}
          </div>
        </div>
        
        {/* Mobile Apply Button */}
        <div className="md:hidden">
          <Button 
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
            onClick={() => setShowMobileFilters(false)}
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </>
  );
}
