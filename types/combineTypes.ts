import { ShowDetailsType } from './tvTypes';
import { MovieDetailType, MovieType, TVShowType } from "./movieTypes";

export interface ShowOrMovieType extends MovieType, TVShowType {}

