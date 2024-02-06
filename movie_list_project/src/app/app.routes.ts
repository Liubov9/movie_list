import { Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list-component/movie-list-component.component';
import { MovieDetailComponent } from './components/movie-detail-component/movie-detail-component.component';

export const routes: Routes = [
    { path: '', redirectTo:'/movie', pathMatch:'full' },
    { path: 'movie',  loadComponent: () => MovieListComponent},
    { path: "movie/movie-details/:id", loadComponent: () => MovieDetailComponent },
    { path: "**", redirectTo:'/movie', pathMatch:'full' },
];
