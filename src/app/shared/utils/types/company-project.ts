import { FirebaseObject } from '@/shared/utils/types';

export type Company = FirebaseObject & {
  name: string;
  description: string;
  logo: string;
};

export type Project = FirebaseObject & {
  role: string;
  startDate: Date;
  isCurrent: boolean;
  endDate?: Date;
  description: string;
  skills: string[];
  attachments?: unknown[];
  urls?: string[];
  content?: string;
};

export type CompanyProjects = Company & {
  projects: Project[];
};
