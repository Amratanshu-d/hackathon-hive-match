
import { User, Hackathon, Message, Skill, FilterOptions } from '../types';
import { v4 as uuidv4 } from '@/lib/uuid';

export const users: User[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    avatar: 'https://i.pravatar.cc/150?img=1',
    location: 'San Francisco, USA',
    bio: 'Frontend developer with a passion for React and beautiful UIs. Looking for hackathon partners!',
    skills: [
      { name: 'React', category: 'frontend', level: 'expert' },
      { name: 'TypeScript', category: 'frontend', level: 'advanced' },
      { name: 'UI/UX', category: 'design', level: 'intermediate' },
    ],
    experience: 'advanced',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://linkedin.com',
    portfolioUrl: 'https://alexjohnson.dev',
    interestedHackathons: ['1', '3']
  },
  {
    id: '2',
    name: 'Sophia Chen',
    avatar: 'https://i.pravatar.cc/150?img=5',
    location: 'New York, USA',
    bio: 'Full-stack developer specializing in Node.js and React. Always excited to build innovative solutions!',
    skills: [
      { name: 'Node.js', category: 'backend', level: 'expert' },
      { name: 'React', category: 'frontend', level: 'advanced' },
      { name: 'MongoDB', category: 'backend', level: 'intermediate' },
    ],
    experience: 'advanced',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://linkedin.com',
    interestedHackathons: ['1', '2']
  },
  {
    id: '3',
    name: 'Marcus Williams',
    avatar: 'https://i.pravatar.cc/150?img=3',
    location: 'London, UK',
    bio: 'UX/UI designer with a background in graphic design. Looking to collaborate on hackathons with innovative ideas!',
    skills: [
      { name: 'Figma', category: 'design', level: 'expert' },
      { name: 'UI/UX', category: 'design', level: 'expert' },
      { name: 'HTML/CSS', category: 'frontend', level: 'intermediate' },
    ],
    experience: 'intermediate',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://linkedin.com',
    portfolioUrl: 'https://marcusdesigns.co',
    interestedHackathons: ['2', '3']
  },
  {
    id: '4',
    name: 'Priya Sharma',
    avatar: 'https://i.pravatar.cc/150?img=9',
    location: 'Bangalore, India',
    bio: 'Backend developer with expertise in microservices and cloud infrastructure. Excited about hackathon collaboration!',
    skills: [
      { name: 'Java', category: 'backend', level: 'expert' },
      { name: 'AWS', category: 'devops', level: 'advanced' },
      { name: 'Spring Boot', category: 'backend', level: 'advanced' },
    ],
    experience: 'expert',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://linkedin.com',
    interestedHackathons: ['1', '4']
  },
  {
    id: '5',
    name: 'David Kim',
    avatar: 'https://i.pravatar.cc/150?img=7',
    location: 'Seoul, South Korea',
    bio: 'Mobile app developer focused on React Native. Always looking for new challenges and hackathons!',
    skills: [
      { name: 'React Native', category: 'mobile', level: 'expert' },
      { name: 'JavaScript', category: 'frontend', level: 'advanced' },
      { name: 'Firebase', category: 'backend', level: 'intermediate' },
    ],
    experience: 'intermediate',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://linkedin.com',
    interestedHackathons: ['3', '4']
  },
  {
    id: '6',
    name: 'Emily Davis',
    avatar: 'https://i.pravatar.cc/150?img=2',
    location: 'Remote/Online',
    bio: 'AI enthusiast and machine learning engineer. Looking for hackathon partners for AI/ML projects!',
    skills: [
      { name: 'Python', category: 'backend', level: 'expert' },
      { name: 'TensorFlow', category: 'ai', level: 'advanced' },
      { name: 'Data Analysis', category: 'data', level: 'advanced' },
    ],
    experience: 'advanced',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://linkedin.com',
    portfolioUrl: 'https://emilydavis.ai',
    interestedHackathons: ['2', '4']
  },
];

export const hackathons: Hackathon[] = [
  {
    id: '1',
    name: 'GlobalTech Hackathon',
    description: 'A 48-hour hackathon focused on building innovative solutions for global challenges.',
    startDate: '2024-06-15',
    endDate: '2024-06-17',
    location: 'San Francisco, USA',
    isOnline: false,
    url: 'https://globaltechhack.com',
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '2',
    name: 'AI for Good Hackathon',
    description: 'Build AI solutions that address social and environmental challenges.',
    startDate: '2024-07-10',
    endDate: '2024-07-12',
    location: 'Remote/Online',
    isOnline: true,
    url: 'https://aiforgoodhack.org',
    imageUrl: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '3',
    name: 'WebDev Summit Hackathon',
    description: 'A web development hackathon focused on creating innovative web applications.',
    startDate: '2024-08-05',
    endDate: '2024-08-07',
    location: 'Berlin, Germany',
    isOnline: false,
    url: 'https://webdevsummit.dev',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '4',
    name: 'Blockchain Innovation Challenge',
    description: 'Build decentralized applications that solve real-world problems.',
    startDate: '2024-09-20',
    endDate: '2024-09-22',
    location: 'Remote/Online',
    isOnline: true,
    url: 'https://blockchainhack.io',
    imageUrl: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
];

export const messages: Message[] = [
  {
    id: '1',
    senderId: '1',
    receiverId: '2',
    content: 'Hey, I saw you\'re interested in the GlobalTech Hackathon. Would you like to team up?',
    timestamp: '2024-04-05T10:30:00Z',
    read: true
  },
  {
    id: '2',
    senderId: '2',
    receiverId: '1',
    content: 'Hi! Yes, I would love to. I have been working with Node.js backends that would complement your React experience well.',
    timestamp: '2024-04-05T11:45:00Z',
    read: true
  },
  {
    id: '3',
    senderId: '3',
    receiverId: '1',
    content: 'Hello! Your profile mentions React expertise. I am a designer looking for a frontend dev for the WebDev Summit Hackathon.',
    timestamp: '2024-04-06T09:15:00Z',
    read: false
  }
];

export const skillsList: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', level: 'intermediate' },
  { name: 'Angular', category: 'frontend', level: 'intermediate' },
  { name: 'Vue', category: 'frontend', level: 'intermediate' },
  { name: 'JavaScript', category: 'frontend', level: 'intermediate' },
  { name: 'TypeScript', category: 'frontend', level: 'intermediate' },
  { name: 'HTML/CSS', category: 'frontend', level: 'intermediate' },
  
  // Backend
  { name: 'Node.js', category: 'backend', level: 'intermediate' },
  { name: 'Python', category: 'backend', level: 'intermediate' },
  { name: 'Java', category: 'backend', level: 'intermediate' },
  { name: 'C#', category: 'backend', level: 'intermediate' },
  { name: 'Ruby', category: 'backend', level: 'intermediate' },
  { name: 'PHP', category: 'backend', level: 'intermediate' },
  { name: 'Go', category: 'backend', level: 'intermediate' },
  { name: 'Rust', category: 'backend', level: 'intermediate' },
  { name: 'MongoDB', category: 'backend', level: 'intermediate' },
  { name: 'SQL', category: 'backend', level: 'intermediate' },
  { name: 'Spring Boot', category: 'backend', level: 'intermediate' },
  { name: 'Express', category: 'backend', level: 'intermediate' },
  { name: 'Django', category: 'backend', level: 'intermediate' },
  { name: 'Flask', category: 'backend', level: 'intermediate' },
  { name: 'Firebase', category: 'backend', level: 'intermediate' },
  
  // Design
  { name: 'UI/UX', category: 'design', level: 'intermediate' },
  { name: 'Figma', category: 'design', level: 'intermediate' },
  { name: 'Adobe XD', category: 'design', level: 'intermediate' },
  { name: 'Sketch', category: 'design', level: 'intermediate' },
  { name: 'Illustrator', category: 'design', level: 'intermediate' },
  { name: 'Photoshop', category: 'design', level: 'intermediate' },
  
  // DevOps
  { name: 'Docker', category: 'devops', level: 'intermediate' },
  { name: 'Kubernetes', category: 'devops', level: 'intermediate' },
  { name: 'AWS', category: 'devops', level: 'intermediate' },
  { name: 'Azure', category: 'devops', level: 'intermediate' },
  { name: 'GCP', category: 'devops', level: 'intermediate' },
  { name: 'CI/CD', category: 'devops', level: 'intermediate' },
  { name: 'Jenkins', category: 'devops', level: 'intermediate' },
  
  // Mobile
  { name: 'React Native', category: 'mobile', level: 'intermediate' },
  { name: 'Flutter', category: 'mobile', level: 'intermediate' },
  { name: 'Swift', category: 'mobile', level: 'intermediate' },
  { name: 'Kotlin', category: 'mobile', level: 'intermediate' },
  { name: 'Android', category: 'mobile', level: 'intermediate' },
  { name: 'iOS', category: 'mobile', level: 'intermediate' },
  
  // AI/ML
  { name: 'TensorFlow', category: 'ai', level: 'intermediate' },
  { name: 'PyTorch', category: 'ai', level: 'intermediate' },
  { name: 'Machine Learning', category: 'ai', level: 'intermediate' },
  { name: 'Natural Language Processing', category: 'ai', level: 'intermediate' },
  { name: 'Computer Vision', category: 'ai', level: 'intermediate' },
  
  // Data
  { name: 'Data Analysis', category: 'data', level: 'intermediate' },
  { name: 'Data Science', category: 'data', level: 'intermediate' },
  { name: 'Data Visualization', category: 'data', level: 'intermediate' },
  { name: 'Pandas', category: 'data', level: 'intermediate' },
  { name: 'R', category: 'data', level: 'intermediate' },
  { name: 'Tableau', category: 'data', level: 'intermediate' },
  { name: 'Power BI', category: 'data', level: 'intermediate' },
  
  // Blockchain
  { name: 'Ethereum', category: 'blockchain', level: 'intermediate' },
  { name: 'Solidity', category: 'blockchain', level: 'intermediate' },
  { name: 'Smart Contracts', category: 'blockchain', level: 'intermediate' },
  { name: 'Web3.js', category: 'blockchain', level: 'intermediate' },
];

// Helper function to simulate getting a user by ID
export function getUserById(id: string): User | undefined {
  return users.find(user => user.id === id);
}

// Helper function to simulate getting hackathon by ID
export function getHackathonById(id: string): Hackathon | undefined {
  return hackathons.find(hackathon => hackathon.id === id);
}

// Helper function to get messages for a user
export function getMessagesForUser(userId: string): Message[] {
  return messages.filter(msg => msg.senderId === userId || msg.receiverId === userId);
}

// Helper function to filter users based on criteria
export function filterUsers(options: Partial<FilterOptions>): User[] {
  let filteredUsers = [...users];
  
  if (options.searchQuery) {
    const query = options.searchQuery.toLowerCase();
    filteredUsers = filteredUsers.filter(user => 
      user.name.toLowerCase().includes(query) || 
      user.bio.toLowerCase().includes(query) ||
      user.skills.some(skill => skill.name.toLowerCase().includes(query))
    );
  }
  
  if (options.skills && options.skills.length > 0) {
    filteredUsers = filteredUsers.filter(user => 
      options.skills!.some(skillName => 
        user.skills.some(skill => skill.name.toLowerCase() === skillName.toLowerCase())
      )
    );
  }
  
  if (options.location) {
    const locationQuery = options.location.toLowerCase();
    filteredUsers = filteredUsers.filter(user => 
      user.location.toLowerCase().includes(locationQuery)
    );
  }
  
  if (options.experience) {
    filteredUsers = filteredUsers.filter(user => 
      user.experience === options.experience
    );
  }
  
  if (options.hackathonInterest) {
    filteredUsers = filteredUsers.filter(user => 
      user.interestedHackathons.includes(options.hackathonInterest!)
    );
  }
  
  return filteredUsers;
}
