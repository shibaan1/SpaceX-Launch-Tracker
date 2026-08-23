import React from 'react'
import launches from '../data/launches.json'
import LaunchCard from '../components/LaunchCard.jsx'
import LoadingSpinner from '../components/LoadingSpinner.jsx'

const Home = () => {
  const error = null

  if (launches.length === 0) { return <LoadingSpinner /> }
  if (error) { return <p>error:{error}</p> }

  return (
    <div>
      Home
      <ul>
        {launches.map((launch) =>
          <li key={launch.id}> <LaunchCard launch={launch} />
          </li>
        )}
      </ul>
    </div>
  )
}

export default Home
