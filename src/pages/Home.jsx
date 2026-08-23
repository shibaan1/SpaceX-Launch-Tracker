import React, { useMemo, useState } from 'react'
import launches from '../data/launches.json'
import LaunchCard from '../components/LaunchCard.jsx'
import LoadingSpinner from '../components/LoadingSpinner.jsx'
import SearchBar from '../components/SearchBar.jsx'
import Filters from '../components/Filters.jsx'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [selectedStatus, setSelectedStatus] = useState(false)

  const error = null


  const filteredLaunches = useMemo(() => {

    return launches.filter((launch) => {

      const searchedItem = launch.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchedYear = selectedYear === 'ALL' || new Date(launch.date_utc).getFullYear()
      const matchedStatus = selectedStatus === 'ALL' || launch.success

      return searchedItem, matchedStatus, matchedYear

    })

  }, [searchTerm, selectedStatus, selectedYear])


  if (launches.length === 0) { return <LoadingSpinner /> }
  if (error) { return <p>error:{error}</p> }

  return (
    <div>
      Home

      <SearchBar searchterm={searchedItem} />
      <Filters selectedYear={matchedYear} selectedStatus={matchedStatus} />

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
