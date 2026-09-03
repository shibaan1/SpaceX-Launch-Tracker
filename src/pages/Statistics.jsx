import React, { useMemo } from 'react'
import launches from '../data/launches.json'
import './Statistics.css'

const Statistics = () => {

  const successRate = useMemo(() => {

    const successful = launches.filter((launch) => launch.success === true)

    return Math.round((successful.length / launches.length) * 100)

  }, [])

  const mostUsed = useMemo(() => {

    return launches.reduce((acc, launch) => {

      acc[launch.rocket] = (acc[launch.rocket] || 0) + 1
      return acc

    }, {})
  }, [])

  const topRocket = useMemo(() => {
    return Object.keys(mostUsed).reduce((acc, curr) => {

      return mostUsed[curr] > mostUsed[acc] ? curr : acc

    })
  }, [mostUsed])

  const yearlyLaunches = useMemo(() => {

    return launches.reduce((acc, launch) => {

      acc[launch.date_utc.slice(0, 4)] = (acc[launch.date_utc.slice(0, 4)] || 0) + 1

      return acc

    }, {})
  }, [])


  return (
    <div className='statistics'>

      <div className='stats-div'>
        <p className='stats-name'>Total Launches</p>
        <p>{launches.length}</p>
      </div>

      <div className='stats-div'>
        <p className='stats-name'>Success Rate</p>
        <p>{successRate}%</p>
      </div>

      <div className='stats-div'>
        <p className='stats-name'>Most Used Rocket</p>
        <p> Falcon 1</p>
      </div>

      <div className='yearly-table'>
        <p>Launches Per Year: </p>

        <table className='table'>
          <thead>
            <tr>
              <th>Year</th>
              <th>Launches</th>
            </tr>
          </thead>

          <tbody className='table-body'>
            {Object.entries(yearlyLaunches).map(([year, count]) =>
              <tr key={year}>
                <td> {year}</td>
                <td>{count}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Statistics
