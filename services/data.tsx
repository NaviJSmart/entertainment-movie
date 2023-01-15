const base_URI = "https://api.themoviedb.org/3";
const API_KEY = `api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`;

export const getTrending = () => {
  return `${base_URI}/trending/all/week?${API_KEY}`;
};

export const getSingleMovie = (movie_id: string | string[]) => {
  return `${base_URI}/movie/${movie_id}?${API_KEY}`;
};

export const getSingleTV = (tv_id: string | string[]) => {
  return `${base_URI}/tv/${tv_id}?${API_KEY}`;
};

export const upcomingMovies = () => {
  return` ${base_URI}/movie/upcoming?${API_KEY}&language=en-US&page=1`
}

export const getTopRatedMovie = () => {
  return ` ${base_URI}/movie/top_rated?${API_KEY}&language=en-US&page=1`
}

export const getSingleMovieOrTV = () => {};
