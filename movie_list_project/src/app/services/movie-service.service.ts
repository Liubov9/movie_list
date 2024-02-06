
import {HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RemoteService } from './remote-service.service';
import { Observable } from 'rxjs';
import { IMovieDetails, IMoviePage } from '../models/movie.interface';


@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private remote: RemoteService) {
  }


  getMovieList(): Observable<IMoviePage> {
    return this.remote.get('/discover/movie');
  }

  getMovieByID(id:string): Observable<IMovieDetails> {
    return this.remote.get(`/movie/${id}`);
  }

  getMovieByTitle( query: string): Observable<IMoviePage> {
    let params = new HttpParams();
    params = params.append('query', query);

    return this.remote.get('/search/movie', null, params);
  }
  

  


 

 
}
