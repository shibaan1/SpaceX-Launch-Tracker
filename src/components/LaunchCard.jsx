import React from 'react'


const LaunchCard = ({ launch }) => {

  const result = () => {
    if (launch.success) {
      return 'successfuly launched'

    }
    else {
      return 'failed to launch'
    }
  }

  return (
    <div>
      <p>mission name: {launch.name}</p>
      <p>flight number: {launch.flight_number}</p>
      <p>launch date: {launch.date_utc}</p>
      <p>success: {result()}</p>
      <img src={launch.links.patch.small} alt="no image" />
    </div>
  )
}

export default LaunchCard
