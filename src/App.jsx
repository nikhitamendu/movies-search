import React from 'react'
import MovieList from './components/MovieList'

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>MovieSearch</h1>
        <p>Discover your next favorite movie</p>
      </header>
      <main>
        <MovieList/>
      </main>
    </div>
  )
}
