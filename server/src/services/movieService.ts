import axios from 'axios';
import dotenv from 'dotenv';
import NodeCache from 'node-cache';

dotenv.config(); // Load environment variables from .env file

const TMDB_API_KEY = process.env.TMDB_API_KEY
const cache = new NodeCache({ stdTTL: 86400 });

// Fetch genres and cache them
const fetchGenres = async () => {
  let movieGenres = cache.get('movie_genres');
  let tvGenres = cache.get('tv_genres');
  let genres = cache.get('genres');

  if (!movieGenres || !tvGenres || !genres) {
    const [movieGenresResponse, tvGenresResponse] = await Promise.all([
      axios.get('https://api.themoviedb.org/3/genre/movie/list', {
        params: {
          api_key: TMDB_API_KEY,
          language: 'en-US',
        },
      }),
      axios.get('https://api.themoviedb.org/3/genre/tv/list', {
        params: {
          api_key: TMDB_API_KEY,
          language: 'en-US',
        },
      }),
    ]);

    movieGenres = movieGenresResponse.data.genres;
    tvGenres = tvGenresResponse.data.genres;
    genres = [...movieGenresResponse.data.genres, tvGenresResponse.data.genres].flat().filter((currentGenre, index, allGenres) => 
    index === allGenres.findIndex((genre) => genre.id === currentGenre.id));

    cache.set('movie_genres', movieGenres);
    cache.set('tv_genres', tvGenres);
    cache.set('genres', genres);
  }

  return {genres, movieGenres, tvGenres };
};

export const searchMovies = async (query: string) => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: TMDB_API_KEY,
        query: query,
      },
    });
    return response.data.results;
  } catch (error) {
    throw new Error('Failed to fetch data from TMDb');
  }
};

// Fetch trending movies with genres
export const fetchTrendingData = async (type, timeWindow) => {
  try {
    const { genres } = await fetchGenres();
    const response = await axios.get(`https://api.themoviedb.org/3/trending/${type}/${timeWindow}`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'en-US',
      },
    });

    const trending = response.data.results;
    console.log(genres);
    // Create a map of genre IDs to names
    const genreMap = {};
    genres.forEach(genre => {
      genreMap[genre.id] = genre.name;
    });

    // Map genre IDs to names for each movie
    trending.forEach(item => {
      item.genres = item.genre_ids.map(id => genreMap[id] || 'Unknown');
    });

    return { trending, genres };
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data from TMDb');
  }
};


export const fetchTrailerData = async (type, id) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/${type}/${id}/videos?language=en-US`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'en-US',
      },
    });

    const trailerData = response.data.results;
    
    return { trailerData };
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data from TMDb');
  }
};




// // Fetch trending TV shows with genres
// export const fetchTrendingTVWithGenres = async (type, timeWindow) => {
//   try {
//     const { tvGenres } = await fetchGenres();
//     const response = await axios.get(`https://api.themoviedb.org/3/trending/${type}/${timeWindow}`, {
//       params: {
//         api_key: TMDB_API_KEY,
//         language: 'en-US',
//       },
//     });

//     const tvShows = response.data.results;

//     // Create a map of genre IDs to names
//     const genreMap = {};
//     tvGenres.forEach(genre => {
//       genreMap[genre.id] = genre.name;
//     });

//     // Map genre IDs to names for each TV show
//     tvShows.forEach(tvShow => {
//       tvShow.genres = tvShow.genre_ids.map(id => genreMap[id] || 'Unknown');
//     });

//     return { tvShows, tvGenres };
//   } catch (error) {
//     console.error(error);
//     throw new Error('Failed to fetch data from TMDb');
//   }
// };

// // Fetch both trending movies and TV shows with genres
// export const fetchTrendingMoviesAndTVWithGenres = async () => {
//   try {
//     const [moviesData, tvData] = await Promise.all([
//       fetchTrendingMoviesWithGenres(),
//       fetchTrendingTVWithGenres()
//     ]);

//     return { 
//       movies: moviesData.movies, 
//       // movieGenres: moviesData.movieGenres, 
//       tvShows: tvData.tvShows, 
//       // tvGenres: tvData.tvGenres 
//     };
//   } catch (error) {
//     console.error(error);
//     throw new Error('Failed to fetch data from TMDb');
//   }
// };