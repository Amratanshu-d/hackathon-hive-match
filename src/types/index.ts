
export interface User {
  id: string;
  name: string;
  avatar: string;
  location: string;
  bio: string;
  skills: Skill[];
  experience: Experience;
  githubUrl?: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
  interestedHackathons: string[];
}

export interface Skill {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
}

export type SkillCategory = 'frontend' | 'backend' | 'design' | 'devops' | 'mobile' | 'data' | 'ai' | 'blockchain' | 'other';

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export type Experience = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface Hackathon {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  isOnline: boolean;
  url: string;
  imageUrl: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface FilterOptions {
  skills: string[];
  location: string;
  experience: Experience | '';
  hackathonInterest: string;
  searchQuery: string;
}
