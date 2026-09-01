import React from 'react'
import { Link } from 'react-router'
import './NotFound.css'

const NotFound = () => {

  return (
    <div className='not-found'>
      <p className='error'>Error 404: Data not found</p>
      <Link className='link' to= '/'>return home</Link>
    </div>
  )
}

export default NotFound
