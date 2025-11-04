import React,{useState,useEffect} from 'react'
import moviesData from "../data.json"
import SearchBar from './SearchBar.jsx'
import CategoryFilter from './CategoryFilter.jsx'

export default function MoviesList() {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")
    const [filteredMovies,setFilteredMovies] = useState([])
    useEffect(()=>{
        setMovies(moviesData)
        setFilteredMovies(moviesData)
    },[])

    useEffect(()=>{
      const newFiltered = movies.filter((i)=>{
        const matchMovieName=i.name.toLowerCase().includes(searchTerm.toLowerCase())
        console.log(selectedCategory)
        const matchSelectedCategory = selectedCategory? i.category === selectedCategory: true
        console.log(matchMovieName)
        return matchMovieName && matchSelectedCategory  
    })
    setFilteredMovies(newFiltered)
  },[searchTerm,selectedCategory,movies])


    const categories = [...new Set(movies.map((m)=>m.category))]

  return (
    <div>
      <h1>Movie Search App</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/> 

      <CategoryFilter
      categories={categories}
      selectedCategory={selectedCategory}
      setSelectedCategory = {setSelectedCategory}/>

      {
        filteredMovies.length===0?(
            <div>No movies found</div>
        ):(
            filteredMovies.map((i)=>(
                <div key={i.id}>
                    <h3>Title:{i.name}</h3>
                    <p>Category:{i.category}</p>
                    <p>Year:{i.year}</p>
                </div>
            ))
        )
      }
    </div>
  )
}
