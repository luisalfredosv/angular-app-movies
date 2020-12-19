import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Router
import { AppRoutingModule } from './app-routing.module';

// Nucleo
import { AppComponent } from './app.component';

// http client
import { HttpClient, HttpClientModule } from "@angular/common/http";


// Components
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { PreloaderComponent } from './components/shared/preloader/preloader.component';
import { FooterComponent } from './components/shared/footer/footer.component';

// Carousel
import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailsComponent,
    FavoritesComponent,
    PreloaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // httpClient
    AppRoutingModule,
    IvyCarouselModule // Carousel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
