import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemoviedbService } from 'src/app/services/themoviedb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  loader: boolean = false;
  resultsMovies:any[] = [];

  constructor(  private themoviedbservice: ThemoviedbService,
                private router:Router ) { }

  ngOnInit(): void {
  }

  search( term:string ){
    this.loader = true;

    this.themoviedbservice.getSearch( term )
      .subscribe( ( resp:any ) => {
      this.loader = false;
        this.resultsMovies = resp;
    }, ( errService ) =>  {
        console.error(errService)
    })


  }

  getMovieDetails( idMovie:number ){
    this.router.navigate(['/moviedetails', idMovie ]);
  }

  

}
