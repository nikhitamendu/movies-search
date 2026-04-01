import React, { useState ,useEffect } from 'react'
import moviesData from '../data.json'
import SearchBar from './SearchBar'
import CategoryFilter from './CategoryFilter'
import MovieCard from './MovieCard'

export default function MovieList() {
    const[movies,setMovies]=useState([])
    const[searchTerm,setSearchTerm]=useState("")
    const[selectedCategory,setSelectedCategory]=useState("")
    const[filteredMovies,setFilteredMovies]=useState([])

    useEffect(()=>{
        setMovies(moviesData)
        setFilteredMovies(moviesData)                     
    },[])

    useEffect(()=>{
      const newFiltered=movies.filter((i)=>{
        const matchMovieName=i.name.toLowerCase().includes(searchTerm.toLowerCase())
        const matchSelectedcategory=selectedCategory? i.category===selectedCategory:true
        return matchMovieName && matchSelectedcategory
      })
      setFilteredMovies(newFiltered)
    },[searchTerm,selectedCategory,movies])

    const categories=[...new Set(movies.map((i)=>i.category))]

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <CategoryFilter categories={categories}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}/>
      
      <div className="movie-grid">
        {filteredMovies.length === 0 ? (
          <div className="no-results">
            <p>No movies found matching your criteria</p>
          </div>
        ) : (
          filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </>
  )
}
