import React, { useMemo } from 'react'
import launches from '../data/launches.json'
import './Statistics.css'

const Statistics = () => {

  const successRate = useMemo(() => {

    const successful = launches.filter((launch) => launch.success === true)

    return (successful.length / launches.length) * 100

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


  return (
    <div className='statistics'>

      <div className='stats-div'>
        <p className='stats-total-launch'>total launches</p>
        <p>{launches.length}</p>
      </div>

      <div className='stats-div'>
        <p className='stats-success'>success rate</p>
        <p>{successRate}%</p>
      </div>

      <div className='stats-div'>
        <p className='stats-mostused'>most used rocket</p>
        <p> {topRocket}</p>
      </div>
    </div>
  )
}

export default Statistics
