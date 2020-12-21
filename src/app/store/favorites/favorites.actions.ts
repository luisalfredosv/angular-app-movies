// 1 - Importaciones
import { Action } from '@ngrx/store'
import { Movie } from './favorites.model'

// 2 - Definición del tipo de acción
export const ADD_MOVIE_FAV = '[MOVIES] Add Fav'
export const DEL_MOVIE_FAV = '[MOVIES] Add Del'


// 3 - Creación de la clase tipo AddTask
export class AddFav implements Action {
  readonly type = ADD_MOVIE_FAV
  constructor(public payload: Movie) { 
    alert("Se agregó la apelicula a tu lista de Favotitas!")
  }
}

export class DelFav implements Action {
  readonly type = DEL_MOVIE_FAV
  constructor(public id: number) {
   }
}

// 4 - Exportación de la acción
export type Actions = AddFav | DelFav