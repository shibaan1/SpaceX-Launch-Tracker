import React from 'react'
import './SearchBar.css'

const SearchBar = ({ searchterm, onSearch }) => {

  return (
    <div className='search'>
      <input className='searchbar' placeholder='type here' type="text"
        value={searchterm}
        onChange={(e) => onSearch(e.target.value)}

      />
    </div>
  )
}

export default SearchBar
