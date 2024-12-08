import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ComingSoonCard from '../components/ComingSoonCard';

export default function ComingSoon() {
  const [movies, setMovies] = useState([]);

  // database-с дуудсан киноны мэдээллийг дэлгэцэд харуулах
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3001/coming_soon_movies');
        console.log(response.data)
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  // тун удахгүй гарах киноны мэдээллүүдийг харуулах хэсэг
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Тун Удахгүй</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie, index) => (
          <ComingSoonCard
            key={index}
            title={movie.title}
            poster={movie.poster}
            airDate={movie.air_date}
          />
        ))}
      </div>
    </div>
  );
}