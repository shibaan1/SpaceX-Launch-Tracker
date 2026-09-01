import React from 'react'
import { Link, useParams } from 'react-router'
import launches from '../data/launches.json'
import './LaunchDetails.css'

const LaunchDetail = () => {

  const { id } = useParams()

  const findResult = launches.find((launch) => launch.id === id)

  const statusResult = () => {
    if (findResult.success) {
      return 'successfuly launched'
    }

    else {
      return 'failed to launch'
    }
  }

  return (
    <div className='launch-details'>

      <Link className='back-link' to='/'>back to home </Link>

      <div className='launch'>

        <div >
          <img className='launch-img' src={findResult.links.patch.small} alt="" />
        </div>

        <div className='launch-details-info'>
          <p className='launch-details-name'>mission name: {findResult.name}</p>
          <p className='launch-num'>Flight number: {findResult.flight_number}</p>
          <p className='launch-date'>Launch date: {findResult.date_utc.slice(0, 10)}</p>
          <p className={findResult.success ? 'launchdetails-success' : 'launchdetails-failed'}>Status: {statusResult()}</p>
          <p className='laucnch-details'>details: {findResult.details}</p>
          <a className='launchdetails-vedio' href={findResult.links.webcast}>vedio Link</a>
        </div>

      </div>
    </div>
  )
}

export default LaunchDetail
