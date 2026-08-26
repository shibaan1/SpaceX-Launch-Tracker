import React, { useState, useEffect } from 'react'

const Countdown = () => {

  const [difference, setDifference] = useState(0)

  const futureTime = new Date("2026-09-01T00:00:00.000Z")

  useEffect(() => {

    const interval = setInterval(() => {

      const currentTime = Date.now()
      setDifference(futureTime.getTime() - currentTime)

    }, 1000);

    return () => {
      clearInterval(interval)
    }
  }, [])


  return (
    <div>
      <p>time remaining to launch is:</p>
      <p>Days:{Math.floor(difference / (1000 * 60 * 60 * 24))}</p>
      <p>Hours{Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}</p>
      <p>Minutes:{Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))}</p>
      <p>Seconds:{Math.floor((difference % (1000 * 60)) / (1000))}</p>
    </div>
  )
}

export default Countdown
