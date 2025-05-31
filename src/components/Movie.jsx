import "./style.css"
import Header from "./Header"
import HeroSection from "./HeroSection"
import FilterSection from "./FilterSection"
import MoviesGrid from "./MoviesGrid"
import MovieModel from "./MovieModel"
import Footer from "./Footer"
import React, { useState } from 'react'

export const Movie = ({ 
        
        
        selectGenre,
        setSelectGenre,
        genere,
        setGenere,
        years,
        setYears,
        selectedYear,
        setSelectedYear,
        selectRating,
        setSelectRating,
        rating,
        setRating,
        setSearchItem, 
        searchItem,
        searchResults, 
        setSearchResults  }) =>{



    return (
        <>
        <Header setSearchResults={setSearchResults} setSearchItem={setSearchItem} searchItem={searchItem}/>
        <HeroSection/>
        <FilterSection 
        
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
        />
        <MoviesGrid 
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
        />
        <MovieModel/>
        <Footer/>
        </>

    )
}