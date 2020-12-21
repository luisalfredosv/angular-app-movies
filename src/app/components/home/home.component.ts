import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { max } from 'rxjs/operators';

// Service MoviesDB
import { ThemoviedbService } from 'src/app/services/themoviedb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})

export class HomeComponent implements OnInit {

mostPopularMovie: any[] = [];

listTrending: any[] = [];
listTvPopular: any[] = [];
listTopRated: any[] = [];

loader : boolean = false;

// images : any[]= [
//   {path: 'assets/img/test.jpg', action: console.log('hi')},
//   {path: 'assets/img/test.jpg', action: console.log('hi')},
//   {path: 'assets/img/test.jpg', action: console.log('hi')},
//   {path: 'assets/img/test.jpg', action: console.log('hi')},
//   {path: 'assets/img/test.jpg', action: console.log('hi')},
//   {path: 'assets/img/test.jpg', action: console.log('hi')},
//   {path: 'assets/img/test.jpg', action: console.log('hi')}

// ];

  constructor(  private themoviedbservice: ThemoviedbService,
                private router:Router ) { 
    
  this.loader = true;

    // Obtener trending
    this.themoviedbservice.getTrending()
      .subscribe( (resp: any) => {
        this.listTrending = resp;
        console.log(this.listTrending);

        this.getMovieTrending(this.listTrending);
        this.loader = false;

    }, (errService) => {

        console.error(errService);
        this.loader = false;

  
    });

   


    // Obtener tvPopular
    this.themoviedbservice.getTvPopular()
      .subscribe(( resp:any ) => {
        this.listTvPopular = resp;
        console.log(this.listTvPopular);
        
    }, (errService) => {
          console.error(errService);
    })

    // Obetener top Rated
    this.themoviedbservice.getTopRated()
      .subscribe(( resp:any ) => {
        this.listTopRated = resp;
        console.log(this.listTopRated);
    }, (errService) => {
        console.error(errService)
    })


  }

  ngOnInit(): void {
  }


  getMovieDetails( idMovie:number ){
    this.router.navigate(['/moviedetails', idMovie ]);
  }
  
  // Obtener trending 1
  getMovieTrending( arrayTrending:any[] ){

    // this.mostPopularMovie =  arrayTrending.reduce((max, popularity) => popularity.title > max ? popularity.title : max, arrayTrending[0]);
    // console.log( this.mostPopularMovie );
    let maxRating = Math.max(...arrayTrending.map( (arrayTrending:any) => arrayTrending.popularity),0);
    this.mostPopularMovie = arrayTrending.find((arrayTrending:any)  =>arrayTrending.popularity === maxRating);

  }

}
