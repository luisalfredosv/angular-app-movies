import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from 'src/app/services/themoviedb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  resultsMovies:any[] = [];

  constructor( private themoviedbservice: ThemoviedbService ) { }

  ngOnInit(): void {
  }

  search( term:string ){

    this.themoviedbservice.getSearch( term )
      .subscribe( ( resp:any ) => {
        this.resultsMovies = resp;
    }, ( errService ) =>  {
        console.error(errService)
    })


  }
  

}
