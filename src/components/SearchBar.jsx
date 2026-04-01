import React from 'react'

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-container">
      <input 
        type="text"
        className="search-input"
        placeholder="Search for movies, actors, directors..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  )
}
