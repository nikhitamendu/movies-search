import React from 'react'

export default function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="filters">
      <button 
        className={`filter-pill ${selectedCategory === "" ? "active" : ""}`}
        onClick={() => setSelectedCategory("")}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-pill ${selectedCategory === category ? "active" : ""}`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
