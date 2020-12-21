export class MoviesFavoritasStateModel {
    MoviesFavoritas: Movie[];
  }

export interface Movie {
    id: number;
    name: string;
    imgUrl: string;
    date: Date;
}