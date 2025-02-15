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

export type AdditionalContent = Partial<FirebaseObject> & Record<string, any>;
