
import { Hackathon } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge-list";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin } from "lucide-react";
import { formatDistance } from "date-fns";
import { Link } from "react-router-dom";

interface HackathonCardProps {
  hackathon: Hackathon;
  className?: string;
}

export function HackathonCard({ hackathon, className }: HackathonCardProps) {
  // Calculate time until hackathon
  const timeUntil = formatDistance(
    new Date(hackathon.startDate),
    new Date(),
    { addSuffix: true }
  );
  
  // Format date range
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };
  
  const dateRange = `${formatDate(hackathon.startDate)} - ${formatDate(hackathon.endDate)}`;

  return (
    <Card className={className}>
      <div className="relative h-36 overflow-hidden rounded-t-lg">
        <img
          src={hackathon.imageUrl}
          alt={hackathon.name}
          className="object-cover w-full h-full"
        />
        <div className="absolute top-3 right-3">
          <Badge color={hackathon.isOnline ? "indigo" : "purple"} size="sm">
            {hackathon.isOnline ? "Online" : "In-person"}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-5">
        <div className="flex flex-col space-y-3">
          <Link to={`/hackathons/${hackathon.id}`}>
            <h3 className="font-semibold text-lg hover:text-purple-600 transition-colors">
              {hackathon.name}
            </h3>
          </Link>
          
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <div className="flex items-center">
              <CalendarDays size={14} className="mr-1" />
              {dateRange}
            </div>
            <div className="flex items-center">
              <MapPin size={14} className="mr-1" />
              {hackathon.location}
            </div>
          </div>
          
          <p className="text-sm text-gray-600 line-clamp-2">{hackathon.description}</p>
          
          <div className="flex items-center justify-between pt-3">
            <span className="text-xs font-medium text-purple-600">
              Starts {timeUntil}
            </span>
            
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="border-purple-200 hover:border-purple-300 hover:bg-purple-50"
              >
                Find Teams
              </Button>
              <Button 
                variant="default" 
                size="sm" 
                className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white"
                asChild
              >
                <Link to={`/hackathons/${hackathon.id}`}>
                  Details
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
