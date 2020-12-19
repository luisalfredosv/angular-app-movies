import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemoviedbService } from 'src/app/services/themoviedb.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styles: [
  ]
})
export class MovieDetailsComponent implements OnInit {

  detailsMovie:any[] = [];

  constructor(  private themoviedbservice: ThemoviedbService,
                private router: ActivatedRoute ) { 

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

}
