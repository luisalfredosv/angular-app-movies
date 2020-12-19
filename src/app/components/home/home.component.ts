import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Service MoviesDB
import { ThemoviedbService } from 'src/app/services/themoviedb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})

export class HomeComponent implements OnInit {

listTrending: any[] = [];
listTvPopular: any[] = [];
listTopRated: any[] = [];

images : any[]= [
  {path: 'assets/img/test.jpg', action: console.log('hi')},
  {path: 'assets/img/test.jpg', action: console.log('hi')},
  {path: 'assets/img/test.jpg', action: console.log('hi')},
  {path: 'assets/img/test.jpg', action: console.log('hi')},
  {path: 'assets/img/test.jpg', action: console.log('hi')},
  {path: 'assets/img/test.jpg', action: console.log('hi')},
  {path: 'assets/img/test.jpg', action: console.log('hi')}

];

  constructor(  private themoviedbservice: ThemoviedbService,
                private router:Router ) { 

    // Obtener trending
    this.themoviedbservice.getTrending()
      .subscribe( (resp: any) => {
        this.listTrending = resp;
        console.log(this.listTrending);
    }, (errService) => {

        console.error(errService);
  
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

}
