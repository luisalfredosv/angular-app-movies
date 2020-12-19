import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components add
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'  },
  { path: 'home', component: HomeComponent  },
  { path: 'search', component: SearchComponent  },
  { path: 'moviedetails/:id', component: MovieDetailsComponent  },
  { path: 'favorites', component: FavoritesComponent  }
  // { path: '**', pathMatch: 'full', redirectTo: 'home'  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
