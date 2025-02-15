import { FirebaseObject } from '../types';

export type Skill = FirebaseObject & {
  name: string;
  description: string;
  logo: string;
  theme: string;
};

export type SkillCategory = FirebaseObject & {
  name: string;
  description: string;
  skills: Skill[];
};
