import React from 'react'
import { Link , useParams } from 'react-router'
import launches from '../data/launches.json'

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
    <div>
      
      <Link to='/'>back to home </Link>
      launch details
      <p>mission name: {findResult.name}</p>
      <p>Flight number: {findResult.flight_number}</p>
      <p>Launch date: {findResult.date_utc}</p>
      <p>Status: {statusResult()}</p>
      <img src={findResult.links.patch.small} alt="" />
      <p>details: {findResult.details}</p>
      <a href={findResult.links.webcast}>vedio Link</a>
    </div>
  )
}

export default LaunchDetail
