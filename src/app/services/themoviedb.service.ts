import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// map
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {

  api_key = '0485653f382698e469f0eaa5b1d2769c';
  language: string = 'es-ES';



  constructor( private http: HttpClient ) { 

  }

  getQuery(query: string){
    
      const url = `https://api.themoviedb.org/3/${ query }`
      // const headers = new HttpHeaders({
      //   'api_key':'a3935b0e98295857b71dc8062f26899cf6889e97'
      // })
    // return this.http.get(url, { headers })
    return this.http.get(url)
    
  }

  // Obtener movies tendencias
  getTrending(){

    let media_type: string = 'movie';
    let time_window: string= 'day';
     
    return this.getQuery(`trending/${ media_type }/${ time_window }?api_key=${ this.api_key }`)
       //.pipe( map( (data:any) =>  data.results ));

  }

  // Obtener series tv popular
  getTvPopular(){
    
    
    let page: number = 1;

    return this.getQuery(`tv/popular?language=${ this.language }&page=${ page }&api_key=${ this.api_key }`)
      //.pipe( map( (data:any) =>  data.artists.items ));

  }

 // Obtener Peliculas Top
  getTopRated(){
    
    let page: number = 1;
    return this.getQuery(`movie/top_rated?language=${ this.language }&page=${ page }&api_key=${ this.api_key }`)
      .pipe( map( ( resp:any ) => resp.results ))
  }

  
  // Obtener results de busqueda

  getSearch( term:string ){
    
    let page: number = 1;
    let aquamaninclude_adult: boolean = false;
    return this.getQuery(`search/movie?language=${ this.language }&query=${ term }&page=${ page }&api_key=${ this.api_key }`)

  }



  // movie/tv Details

  getMovieDetails( idMovie:number){

    return this.getQuery(`movie/${ idMovie }?language=${ this.language }&api_key=${ this.api_key }`)

  }

  
}

