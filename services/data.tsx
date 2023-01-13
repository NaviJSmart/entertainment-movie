const base_URI = 'https://api.themoviedb.org/3'
const API_KEY = process.env.NEXT_PUBLIC_TMDB_KEY

export const getTrending = () => {
  return `${base_URI}/trending/all/week?api_key=${API_KEY}`;
};
