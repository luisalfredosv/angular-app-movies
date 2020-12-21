import { Movie } from './favorites.model';
import * as MoviesFavoritasActions from './favorites.actions'


// const initialState: MoviesFavoritas[] = [];

export function reducer(  state: Movie[] = [],  
                          action: MoviesFavoritasActions.Actions)
                          {
    switch (action.type){
      case MoviesFavoritasActions.ADD_MOVIE_FAV:
        return [...state, action.payload];
      case MoviesFavoritasActions.DEL_MOVIE_FAV:
        // state.splice(action.id, 1);
        // return state.filter(element => element !== action.id);
        let newState = state.filter( (moviesfavoritas:any) => moviesfavoritas !== action.id );
        return newState;
      default:
        return state;

    }
}