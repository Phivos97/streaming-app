import { useState, useEffect } from 'react';

const Search = () => {

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      if (query.length < 3) {
        setMovies([]);
        return;
      }

      try {
        const response = await fetch(`http://localhost:3000/api/movies/search?query=${query}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setMovies(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data. Please try again later.');
      }
    };

    const debounceFetch = setTimeout(() => {
      fetchMovies();
    }, 300); // 300ms debounce time

    return () => clearTimeout(debounceFetch); // Cleanup function to clear the timeout
  }, [query]);

  const baseUrl = 'https://image.tmdb.org/t/p/';
  const size = 'w780'; 

  return (
    <div className='z-20'>
    <div className=" top-[300rem] flex gap-4 items-center rounded-full  bg-gray-600 bg-opacity-20 shadow-inner col-start-1  py-2 px-8 ">
    <i className=" ph ph-magnifying-glass text-xl"></i>
    <input className="cursor-default  z-10 bg-transparent h-full w-full focus:outline-none placeholder:text-white " placeholder="Search Movies"  value={query} onChange={(e) => setQuery(e.target.value)}/>
    {error && <p>{error}</p>}
    </div>
    {movies.length > 0 && (
    <div className='mt-4 bg-opacity-80 backdrop-blur-lg bg-gray-600 rounded-3xl flex flex-col overflow-scroll z-20 max-h-[20rem] h-auto p-4 gap-4'>
      <p>results: {movies.length}</p>
        {movies.map((movie) => (movie.backdrop_path &&
          <div className='flex gap-4' key={movie.id}>
            <img className='w-16 h-10' src={`${baseUrl}${size}${movie.backdrop_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
            {/* <p>{movie.description}</p> */}
          </div>
        ))}
      </div>
    )}
    </div>
  )
}

// absolute left-4 top-20

export default Search