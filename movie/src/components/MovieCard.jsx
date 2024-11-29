import React from "react";

const MovieCard = ({ title, poster, description, timings }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-md p-4 mb-6 flex items-start space-x-4">
      {/* Movie Poster */}
      <img
        src={poster}
        alt={title}
        className="w-24 h-36 rounded-lg object-cover"
      />
      
      {/* Movie Details */}
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-400 mb-4">{description}</p>

        {/* Timings */}
        <div className="flex flex-wrap gap-2">
          {timings.map((time, index) => (
            <button
              key={index}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-1 rounded"
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
