import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common'
import {  RouterModule } from '@angular/router'
import { IMovieItem } from '../../models/movie.interface';
import{environment} from '../../../environments/environment'

@Component({
  selector: 'app-movie-component',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './movie-component.component.html',
})
export class MovieComponent {

  @Input() movie: IMovieItem; 
  imageUrl = environment.imgUrl

}
