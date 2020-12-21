import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MoviesFavoritas } from '../../store/favorites/favorites.model'
import { AppState } from '../../store/app.state'
import * as MoviesFavoritasActions from '../../store/favorites/favorites.actions';



@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styles: [
  ]
})


export class FavoritesComponent implements OnInit {

  public listFavorites: Observable<MoviesFavoritas[]>

  // listFavorites: any[] = [];
  constructor(private store: Store<AppState>) {
    
    this.listFavorites = store.select("MoviesFavoritas");
    // this.store.select('MoviesFavoritas').subscribe(( MoviesFavoritas: any[] ) =>{
      // this.listFavorites = MoviesFavoritas;
    // })
  }


  ngOnInit(): void {

  }


public removeMovieToFavorites(index: number) {
    this.store.dispatch(new MoviesFavoritasActions.DelFav(index));
    console.log("Delete");
  }

}

  