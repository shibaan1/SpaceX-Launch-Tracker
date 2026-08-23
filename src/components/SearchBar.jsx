import React from 'react'

const SearchBar = ({ searchterm, onSearch }) => {

  return (
    <div>
      <input type="text"
        value={searchterm}
        onChange={(e) => onSearch(e.target.value)}

      />
    </div>
  )
}

export default SearchBar
