import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {

  return (
    <div>
      Error 404 : Data not found
      <Link to= '/'>return home</Link>
    </div>
  )
}

export default NotFound
