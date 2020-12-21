// 1 - Importaciones
import { Action } from '@ngrx/store'
import { MoviesFavoritas } from './favorites.model'

// 2 - Definición del tipo de acción
export const ADD_MOVIE_FAV = '[MOVIES] Add Fav'
export const DEL_MOVIE_FAV = '[MOVIES] Add Del'


// 3 - Creación de la clase tipo AddTask
export class AddFav implements Action {
  readonly type = ADD_MOVIE_FAV
  constructor(public payload: MoviesFavoritas) { }
}

export class DelFav implements Action {
  readonly type = DEL_MOVIE_FAV
  constructor(public payload: number) {
   }
}

// 4 - Exportación de la acción
export type Actions = AddFav | DelFav