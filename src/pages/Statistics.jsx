import React, { useMemo } from 'react'
import launches from '../data/launches.json'

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
  },[ mostUsed])


  return (
    <div>
      statistics
      <p>total launches: {launches.length}</p>
      <p>success rate: {successRate}%</p>
      <p>most used rocket : {topRocket}</p>
    </div>
  )
}

export default Statistics
