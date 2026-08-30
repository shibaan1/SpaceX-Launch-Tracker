import React from 'react'
import './SearchBar.css'

const SearchBar = ({ searchterm, onSearch }) => {

  return (
    <div className='search'>
      <input className='searchbar'  type="text"
        value={searchterm}
        onChange={(e) => onSearch(e.target.value)}

      />
    </div>
  )
}

export default SearchBar
