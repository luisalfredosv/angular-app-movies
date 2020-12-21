import { MoviesFavoritas } from './favorites.model';
import * as MoviesFavoritasActions from './favorites.actions'


const initialState: MoviesFavoritas = {
  id: 0,
  name: '',
  imgUrl: '',
  date:null
}


export function reducer( state: MoviesFavoritas[] = [initialState],  action: MoviesFavoritasActions.Actions){
    switch (action.type){
      case MoviesFavoritasActions.ADD_MOVIE_FAV:
        return [...state, action.payload];
      case MoviesFavoritasActions.DEL_MOVIE_FAV:
        
        // state.splice(action.payload, 1);
        return state;
      default:
        return state;

    }
}