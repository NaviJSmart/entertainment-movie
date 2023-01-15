import { ShowOrMovieType } from "./combineTypes";

export interface RootTrendingType {
  page: number;
  results: ShowOrMovieType[];
  total_pages: number;
  total_results: number;
}

export interface MovieType {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TVShowType {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
}






export interface Genre {
	id: number;
	name: string;
}

export interface MovieDetailType {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: {};
	budget: number;
	genres: Genre[];
	homepage: string;
	id: number;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: any[];
	production_countries: any[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: any[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}


export interface Date {}

export interface upcomingMovieType {
	dates: Date;
	page: number;
	results: ShowOrMovieType[];
	total_pages: number;
	total_results: number;
}