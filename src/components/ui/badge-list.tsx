
import { cn } from "@/lib/utils";
import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  color?: "purple" | "indigo" | "gray";
  size?: "sm" | "md";
  active?: boolean;
}

export function Badge({
  children,
  className,
  onClick,
  color = "purple",
  size = "md",
  active = false,
}: BadgeProps) {
  const colorClasses = {
    purple: active
      ? "bg-purple-500 text-white"
      : "bg-purple-100 text-purple-700 hover:bg-purple-200",
    indigo: active
      ? "bg-indigo-500 text-white"
      : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200",
    gray: active
      ? "bg-gray-500 text-white"
      : "bg-gray-100 text-gray-700 hover:bg-gray-200",
  };

  const sizeClasses = {
    sm: "text-xs px-2 py-1 rounded",
    md: "text-sm px-3 py-1.5 rounded-md",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-medium transition-colors",
        colorClasses[color],
        sizeClasses[size],
        onClick ? "cursor-pointer" : "",
        className
      )}
      onClick={onClick}
    >
      {children}
    </span>
  );
}

interface BadgeListProps {
  items: string[];
  className?: string;
  color?: "purple" | "indigo" | "gray";
  size?: "sm" | "md";
  onClick?: (item: string) => void;
  activeItems?: string[];
}

export function BadgeList({
  items,
  className,
  color = "purple",
  size = "md",
  onClick,
  activeItems = [],
}: BadgeListProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <Badge
          key={item}
          color={color}
          size={size}
          onClick={onClick ? () => onClick(item) : undefined}
          active={activeItems.includes(item)}
        >
          {item}
        </Badge>
      ))}
    </div>
  );
}
