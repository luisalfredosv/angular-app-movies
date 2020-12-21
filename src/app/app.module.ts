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
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { PreloaderComponent } from './components/shared/preloader/preloader.component';
import { FooterComponent } from './components/shared/footer/footer.component';

// Carousel
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { StoreModule } from '@ngrx/store';
// import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducer } from './store/favorites/favorites.reducer';
import { LoadimgPipe } from './pipes/loadimg.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailsComponent,
    FavoritesComponent,
    PreloaderComponent,
    FooterComponent,
    LoadimgPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // httpClient
    AppRoutingModule,
    IvyCarouselModule, // Carousel
    StoreModule.forRoot({ moviesfavoritas: reducer // Store
    }),
    StoreDevtoolsModule.instrument({ // Config devtools
      maxAge: 25,
      logOnly: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
