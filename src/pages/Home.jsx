import React, { useMemo, useState, useEffect } from 'react'
import launches from '../data/launches.json'
import LaunchCard from '../components/LaunchCard.jsx'
import LoadingSpinner from '../components/LoadingSpinner.jsx'
import SearchBar from '../components/SearchBar.jsx'
import Filters from '../components/Filters.jsx'
import Countdown from '../components/Countdown.jsx'
import './Home.css'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedYear, setSelectedYear] = useState('All')
  const [selectedStatus, setSelectedStatus] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)

  const error = null

  const filteredLaunches = useMemo(() => {

    return launches.filter((launch) => {

      const searchedItem = launch.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchedYear = selectedYear === 'All' || selectedYear === String(new Date(launch.date_utc).getFullYear())
      const matchedStatus = selectedStatus === 'All' || launch.success === (selectedStatus === 'success')

      return searchedItem && matchedStatus && matchedYear
    })
  }, [searchTerm, selectedStatus, selectedYear])

  const currentLaunches = filteredLaunches.slice((currentPage - 1) * 6, currentPage * 6)
  const totalPages = Math.ceil(filteredLaunches.length / 6)


  const handlePrev = () => {

    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1)
    }
  }

  useEffect(() => {
    setCurrentPage(1)

  }, [searchTerm, selectedStatus, selectedYear])


  if (launches.length === 0) { return <LoadingSpinner /> }
  if (error) { return <p>error:{error}</p> }

  return (
    <div className='home-container'>

      <Countdown />
      <div className='search-filter-bar'>
        <SearchBar searchterm={searchTerm} onSearch={setSearchTerm} />
        <Filters selectedYear={selectedYear} onYearChange={setSelectedYear} onStatusChange={setSelectedStatus} selectedStatus={selectedStatus} />

      </div>
      <div className='pagination'>
        <button className='prev-btn' onClick={handlePrev} disabled={currentPage === 1}>prev</button>
        <p className='page-no'>page: {currentPage}/{totalPages}</p>
        <button className='next-btn' onClick={handleNext} disabled={currentPage === totalPages}>next</button>

      </div>

      {filteredLaunches.length === 0 ?
        (<p>no launches to display</p>
        ) : (
          <ul className='launchcard-home'>
            {currentLaunches.map((launch) =>
              <li key={launch.id}> <LaunchCard launch={launch} />
              </li>
            )}
          </ul>
        )}
    </div>
  )
}

export default Home
