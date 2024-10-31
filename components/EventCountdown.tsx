'use client'
import { X } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

interface EventCountdownProps {
  onClose: () => void
}

export default function EventCountdown ({ onClose }: EventCountdownProps) {
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

  const currentDate = new Date().getTime()
  const daysUntilEvent = Math.floor(
    (eventDate - currentDate) / (1000 * 60 * 60 * 24)
  )

  return (
    <Link href='/events'>
      <div className='bg-red-400 text-white flex justify-center text-center py-1 fixed top-0 left-0 right-0'>
        <button
          onClick={onClose}
          className='absolute top-0 right-0 mt-3 mr-3 text-white font-bold'
        >
          <X size={24} />
        </button>
        <h1 className='text-lg font-bold p-2'>Next Emerge Event</h1>
        <h2 className='text-lg font-bold p-2'>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{' '}
          {timeLeft.seconds}s
        </h2>
      </div>
    </Link>
  )
}
