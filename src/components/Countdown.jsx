import React, { useState, useEffect } from 'react'
import './Countdown.css'

const Countdown = () => {

  const [difference, setDifference] = useState(0)

  useEffect(() => {

    const futureTime = new Date("2027-09-01T00:00:00.000Z")

    const interval = setInterval(() => {

      const currentTime = Date.now()
      setDifference(futureTime.getTime() - currentTime)

    }, 1000);

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className='countdown'>
      <p className='time-remaining'>TIME REMAINING TO LAUNCH IS :</p>
      <div className='timer'>

        <div className='days'>
          <p className='days-number'>{Math.floor(difference / (1000 * 60 * 60 * 24))}</p>
          <p className='days-unit'>Days</p>
        </div>

        <div className='hours'>
          <p className='hours-number'>{Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}</p>
          <p className='hours-unit'>Hours</p>
        </div>

        <div className='minutes'>
          <p className='minutes-number'>{Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))}</p>
          <p className='minutes-unit'>Minutes</p>
        </div>

        <div className='seconds'>
          <p className='seconds-number'>{Math.floor((difference % (1000 * 60)) / (1000))}</p>
          <p className='seconds-unit'>Seconds</p>
        </div>

      </div>
    </div>
  )
}

export default Countdown
