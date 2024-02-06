import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie-service.service';
import{environment} from '../../../environments/environment'
import { IMovieDetails } from '../../models/movie.interface';


@Component({
  selector: 'app-movie-detail-component',
  standalone: true,
  imports: [],
  templateUrl: './movie-detail-component.component.html',
  styleUrl: './movie-detail-component.component.css'
})
export class MovieDetailComponent implements OnInit {

  private movieService = inject(MovieService)
  private route = inject(ActivatedRoute)
  imageUrl = environment.imgUrl
  movie:IMovieDetails;


  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    if (id) {
      this.movieService.getMovieByID(id).subscribe(
        {
          next: movies => this.movie = movies,
          error: err => console.error('Observable emitted an error: ' + err),         
        }     
        );
    }
  }

}
