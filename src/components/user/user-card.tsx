
import { User } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { AvatarWithInfo } from "@/components/ui/avatar-with-info";
import { BadgeList } from "@/components/ui/badge-list";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface UserCardProps {
  user: User;
  className?: string;
}

export function UserCard({ user, className }: UserCardProps) {
  const topSkills = user.skills.map((skill) => skill.name);
  const experienceLabel = user.experience.charAt(0).toUpperCase() + user.experience.slice(1);

  return (
    <Card className={className}>
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          <Link to={`/profile/${user.id}`}>
            <AvatarWithInfo
              name={user.name}
              avatarUrl={user.avatar}
              location={user.location}
              skills={topSkills}
              badge={experienceLabel}
              size="md"
            />
          </Link>
          
          <p className="text-sm text-gray-600 line-clamp-3">{user.bio}</p>
          
          <div className="mt-2">
            <h4 className="text-xs font-medium text-gray-500 mb-2">Skills</h4>
            <BadgeList
              items={topSkills}
              color="indigo"
              size="sm"
            />
          </div>
          
          <div className="flex space-x-3 pt-3 mt-auto">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50"
              asChild
            >
              <Link to={`/messages/compose/${user.id}`}>
                <MessageSquare className="mr-1 h-4 w-4" />
                Message
              </Link>
            </Button>
            <Button 
              variant="default" 
              size="sm" 
              className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white"
              asChild
            >
              <Link to={`/profile/${user.id}`}>
                <Users className="mr-1 h-4 w-4" />
                View Profile
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
