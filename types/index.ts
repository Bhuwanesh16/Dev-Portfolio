export interface Profile {
  name: string;
  title: string;
  roles: string[];
  tagline: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  avatar: string;
  education: Education[];
  currentFocus: string[];
  careerObjective: string;
  stats: Stat[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  experience: string;
  projects: number;
  confidence: number;
  related: string[];
  icon?: string;
}

export type SkillCategory =
  | "Programming"
  | "Frontend"
  | "Backend"
  | "Database"
  | "Cloud"
  | "DevOps"
  | "AI";

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  techStack: string[];
  features: string[];
  challenges: string[];
  metrics: ProjectMetric[];
  github?: string;
  live?: string;
  image: string;
  category: string;
  year: string;
  architecture: ArchitectureNode[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  type: "service" | "database" | "client" | "api" | "queue";
  connections: string[];
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  type: "education" | "work" | "milestone";
}

export interface GitHubStats {
  username: string;
  totalRepos: number;
  totalStars: number;
  topLanguages: LanguageStat[];
  pinnedRepos: PinnedRepo[];
}

export interface LanguageStat {
  name: string;
  percentage: number;
  color: string;
}

export interface PinnedRepo {
  name: string;
  description: string;
  stars: number;
  language: string;
  url: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface AIKnowledgeEntry {
  keywords: string[];
  response: string;
}

export interface TerminalCommand {
  name: string;
  description: string;
  action: () => string | void;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
