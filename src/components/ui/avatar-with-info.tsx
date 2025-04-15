
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge-list";
import { cn } from "@/lib/utils";
import { MapPin, Star } from "lucide-react";

interface AvatarWithInfoProps {
  name: string;
  avatarUrl: string;
  location?: string;
  skills?: string[];
  badge?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export function AvatarWithInfo({
  name,
  avatarUrl,
  location,
  skills = [],
  badge,
  size = "md",
  className,
  onClick,
}: AvatarWithInfoProps) {
  const avatarSize = {
    sm: "h-10 w-10",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  };

  const nameSize = {
    sm: "text-sm font-medium",
    md: "text-base font-medium",
    lg: "text-lg font-medium",
  };

  const infoSize = {
    sm: "text-xs",
    md: "text-xs",
    lg: "text-sm",
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div
      className={cn(
        "flex items-center gap-3",
        onClick ? "cursor-pointer" : "",
        className
      )}
      onClick={onClick}
    >
      <Avatar className={cn("border-2 border-white shadow", avatarSize[size])}>
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback>{getInitials(name)}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className={nameSize[size]}>{name}</span>
          {badge && (
            <Badge color="indigo" size="sm">
              {badge}
            </Badge>
          )}
        </div>
        <div className="flex flex-col gap-1">
          {location && (
            <div className="flex items-center gap-1">
              <MapPin size={12} className="text-gray-500" />
              <span className={cn("text-gray-500", infoSize[size])}>
                {location}
              </span>
            </div>
          )}
          {skills.length > 0 && (
            <div className="flex items-center gap-1 flex-wrap">
              <Star size={12} className="text-gray-500" />
              <span className={cn("text-gray-500", infoSize[size])}>
                {skills.slice(0, 3).join(", ")}
                {skills.length > 3 && ` +${skills.length - 3} more`}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
