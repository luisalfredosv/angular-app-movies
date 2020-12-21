import { MoviesFavoritasStateModel } from './favorites/favorites.model';

export interface AppState {
   readonly moviesfavoritas: MoviesFavoritasStateModel[];
}
