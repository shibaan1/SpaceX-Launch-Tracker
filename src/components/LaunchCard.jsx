import React from 'react'
import { Link } from 'react-router'
import './LaunchCard.css'

const LaunchCard = React.memo(
  ({ launch }) => {

    const result = () => {
      if (launch.success) {
        return 'successfuly launched'

      }
      else {
        return 'failed to launch'
      }
    }

    return (
      <div className='launchcard'>
        <Link className='launchcard-link' to={`/launch/${launch.id}`}>

          <div className='launch-info'>
            <p className='launch-name'>mission name: {launch.name}</p>
            <p className='launch-flight-number'>flight number: {launch.flight_number}</p>
            <p className='launch-date'>launch date: {launch.date_utc.slice(0, 10)}</p>
            <p className={launch.success ? 'success' : 'failed'}>success: {result()}</p>
          </div>
          <div className='launch-img'>
            <img src={launch.links.patch.small} alt="no image" />

          </div>
        </Link>
      </div>
    )
  }

)
export default LaunchCard