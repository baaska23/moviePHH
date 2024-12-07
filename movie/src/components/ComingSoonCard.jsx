// components/ComingSoonCard.jsx
import React from 'react';

function ComingSoonCard({ title, poster, airDate }) {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="w-full h-96 object-cover rounded-t-lg" src={poster} alt={title} />
      </a>
      <div className="p-4">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Air Date: {new Date(airDate).toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default ComingSoonCard;