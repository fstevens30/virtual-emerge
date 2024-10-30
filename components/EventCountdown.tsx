'use client'
import React, { useState, useEffect } from 'react'

export default function EventCountdown () {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const eventDate = new Date('2024-11-30').getTime()

  useEffect(() => {
    const updateCountdown = () => {
      const currentDate = new Date().getTime()
      const distance = eventDate - currentDate

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }

    const intervalId = setInterval(updateCountdown, 1000)

    return () => clearInterval(intervalId)
  }, [eventDate])

  return (
    <div className='bg-red-500 text-white flex justify-center text-center py-1 fixed top-0 left-0 right-0'>
      <h1 className='text-lg p-2'>Next Emerge Event</h1>
      <h2 className='text-lg p-2'>
        {timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} :{' '}
        {timeLeft.seconds}
      </h2>
    </div>
  )
}
