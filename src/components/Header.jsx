import React from 'react'
import InputApi from '../FetchApi/InputApi'
const Header = ({ searchItem, setSearchItem, setSearchResults }) => {

const handleSearchInput = (e) =>{
    setSearchItem(e.target.value)
}
// console.log(InputApi())
const handleButton = async() =>{
    try {
        const res = await InputApi(searchItem)
        setSearchResults(res.data.results)
        // console.log(res.data.results)
        // setSearchItem("");
    } catch (error) {
        console.log(error.message)
    }
}

  return (
    <>
    {/* <!-- Header --> */}
    <header className ="header">
        <nav className ="navbar">
            <div className ="nav-brand">
                <i className ="fas fa-film"></i>
                <span>MovieHub</span>
            </div>
            <div className ="nav-search">
                <input type="text" placeholder="Search movies..." className ="search-input" 
                onChange={handleSearchInput} 
                value ={searchItem}/>
                <button className ="search-btn" onClick={()=>handleButton()}>
                    <i className ="fas fa-search"></i>
                </button>
            </div>
            <div className ="nav-menu">
                <a href="#" onClick="">Home</a>
                <a href="#" onClick="">Popular</a>
                <a href="#" onClick="">Top Rated</a>
                <a href="#" onClick="">Upcoming</a>
            </div>
        </nav>
    </header>

    </>
  )
}

export default Header