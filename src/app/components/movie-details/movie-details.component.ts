import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemoviedbService } from 'src/app/services/themoviedb.service';

import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import * as MoviesFavoritasActions from '../../store/favorites/favorites.actions';
import { Location } from '@angular/common';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styles: [
  ]
})
export class MovieDetailsComponent implements OnInit {

  detailsMovie:any[] = [];

  constructor(  private themoviedbservice: ThemoviedbService,
                private router: ActivatedRoute,
                private store: Store,
                private _location:Location ) { 

  }

  ngOnInit(): void {
    this.router.params.subscribe( params =>{
      this.getMovieDetails( params['id'] );
    })  
  }

  getMovieDetails( idMovie:number ){
    this.themoviedbservice.getMovieDetails( idMovie )
      .subscribe( (resp:any) =>{
        this.detailsMovie = resp;
        console.log(this.detailsMovie);
    }, (errService) => {
        console.error(errService);
    })

  }

  addToFavorites( id:number, name:string, imgUrl:any, date:Date ){

    this.store.dispatch(new MoviesFavoritasActions.AddFav(
      {
        id,
        name,
        imgUrl,
        date
      }
    ))
  }


  behind() {
      this._location.back();
  }

}
