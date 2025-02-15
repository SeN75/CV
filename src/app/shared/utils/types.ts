import { EntityState } from '@ngrx/entity';

export interface SPEntity<T> extends EntityState<T> {
  isLoading: boolean;
  error: string | null;
}
