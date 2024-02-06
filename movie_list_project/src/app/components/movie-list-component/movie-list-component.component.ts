import { Component, inject , OnInit, OnDestroy} from '@angular/core'
import { CommonModule } from '@angular/common'
import { MovieService } from '../../services/movie-service.service';
import{IMovieItem, IMoviePage} from '../../models/movie.interface'
import {MovieComponent} from '../movie-component/movie-component.component'
import {  Subject, debounceTime, distinctUntilChanged, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-movie-list-component',
  standalone: true,
  imports: [CommonModule, MovieComponent],
  templateUrl: './movie-list-component.component.html'
})
export class MovieListComponent implements OnInit, OnDestroy   {

 private movieService = inject(MovieService)
 private searchTerms = new Subject<string>();
 private destroy$ = new Subject<void>();
 movies:IMovieItem[] = [];

 ngOnInit(): void {
  this.loadInitialMovieList()

  this.searchTerms.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap(term => term ? this.movieService.getMovieByTitle(term) : this.movieService.getMovieList()),
    takeUntil(this.destroy$)
  ).subscribe({
    next: (data: IMoviePage) => {
      this.movies = data?.results;
    },
    error: (err) => console.error('Observable emitted an error: ' + err),
  });
 }


 loadInitialMovieList() {
  this.movieService.getMovieList().subscribe({
      next: movies => this.movies = movies?.results,
      error: err => console.error('Observable emitted an error: ' + err),         
    } 
  );
}

search(term: string): void {
  this.searchTerms.next(term);
}

ngOnDestroy(): void {
  this.destroy$.next();
  this.destroy$.complete();
}

}
