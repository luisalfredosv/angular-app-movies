import { MoviesFavoritas } from './favorites/favorites.model';

export interface AppState {
  readonly MoviesFavoritas: MoviesFavoritas[];
}