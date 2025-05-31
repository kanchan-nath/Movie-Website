import React, { useState } from 'react'
import { Movie } from './components/Movie'
const App = () => {
const [searchItem, setSearchItem] = useState([])
const [searchResults, setSearchResults] = useState([]);
const [selectGenre, setSelectGenre] = useState('')
const [genere, setGenere] = useState([])
const [years, setYears] = useState([])
const [selectedYear, setSelectedYear] = useState('')
const [selectRating, setSelectRating] = useState('')
const [rating, setRating] = useState([])

  return (
    <Movie 
    searchItem={searchItem}
        searchResults={searchResults}
        selectGenre={selectGenre}
        setSelectGenre={setSelectGenre}
        genere={genere}
        setGenere={setGenere}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        years={years}
        setYears={setYears}
        selectRating={selectRating}
        setSelectRating={setSelectRating}
        rating={rating}
        setRating={setRating}
    setSearchResults={setSearchResults} setSearchItem={setSearchItem} />
  )
}

export default App