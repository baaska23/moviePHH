import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

export default function BookTicket() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3001/movies');
        console.log(response.data); 
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleTimingClick = (movieTitle, timing, moviePoster) => {
    console.log(moviePoster)
    navigate('/selectSeat', {
      state: {
        movieTitle,
        moviePoster, // Ensure moviePoster is passed
        timing,
      },
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-6">Book a Ticket</h1>
      <div className="px-32 border-r-black">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            poster={movie.poster}
            description={movie.description}
            timings={movie.timings}
            onTimingClick={handleTimingClick}
          />
        ))}
      </div>
    </div>
  );
}
