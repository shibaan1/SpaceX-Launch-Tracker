import React from 'react'
import launches from '../data/launches.json'
import LaunchCard from '../components/LaunchCard.jsx'

const Home = () => {

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
