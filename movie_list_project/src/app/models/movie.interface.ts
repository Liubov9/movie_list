export interface IMovieItem {
adult: boolean;
backdrop_path: string;
genre_ids: number[];
id: number;
original_language: string;
original_title: string;
overview: string;
popularity: number;
poster_path: string;
release_date: string;
title: string;
video: boolean;
vote_average: number;
vote_count: number;
}

export interface IMoviePage {
    page: number;
    results: IMovieItem[];
    }

export interface IMovieDetails {
  "adult": boolean;
  "backdrop_path": string,
  "belongs_to_collection": unknown,
  "budget": number,
  "genres": IMovieDetailsGenres[];  
  "homepage": string;
  "id": number;
  "imdb_id": string;
  "original_language": string;
  "original_title": string;
  "overview": string;
  "popularity": null;
  "poster_path": string;
  "production_companies": IMovieProductionCompanies[];
  "production_countries": IMovieProductionCompanies[];
  "release_date": string;
  "revenue": number;
  "runtime": number;
  "spoken_languages": IMovieSpokenLanguages[],
  "status": string;
  "tagline": string;
  "title": string;
  "video": boolean;
  "vote_average": number;
  "vote_count": number;
}

export interface IMovieDetailsGenres {
    "id": null;
    "name": string;
}

export interface IMovieProductionCountries{
    "id": number
      "logo_path": string;
      "name": string;
      "origin_country": string;
}


export interface IMovieProductionCompanies{
    "iso_3166_1": string;
      "name": string;
}

export interface IMovieSpokenLanguages{
    "english_name": string;
    "iso_639_1": string;
    "name": string;
}