import React from 'react'

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="poster-container">
        <img 
          src={movie.poster || 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1159&auto=format&fit=crop'} 
          alt={movie.name} 
          className="poster"
          loading="lazy"
        />
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.name}</h3>
        <div className="movie-meta">
          <span className="movie-year">{movie.year}</span>
          <span className="movie-category">{movie.category}</span>
        </div>
      </div>
    </div>
  )
}
