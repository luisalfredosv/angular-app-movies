export class MoviesFavoritasStateModel {
    MoviesFavoritas: MoviesFavoritas[];
  }

export interface MoviesFavoritas {
    id: number;
    name: string;
    imgUrl: string;
    date: Date;
}