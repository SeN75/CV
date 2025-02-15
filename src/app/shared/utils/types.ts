import { EntityState } from '@ngrx/entity';

export interface SPEntity<T> extends EntityState<T> {
  isLoading: boolean;
  error: string | null;
}

export type FirebaseObject = {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type SystemConfig = FirebaseObject & {
  title: string;
  name: string;
  keyswords: string[];
  description: string;
  logo: string;
  theme: string;
  email: string;
  phone: string;
  address: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    muted: string;
  };
};
