'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabase/supabase'
import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '../../lib/utils'
import { siteConfig } from '../../config/site'

const Page = () => {
  interface Event {
    id: number
    year: string
    semester: string
  }

  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    async function getEvents () {
      const { data: events } = await supabase.from('events').select('*')

      if (events && events.length > 1) {
        const mappedEvents = events.map(
          (event: { ID: number; semester: string; year: string }) => ({
            id: event.ID,
            semester: event.semester,
            year: event.year
          })
        )
        console.log(mappedEvents)
        setEvents(mappedEvents)
      }
    }

    getEvents()
  }, [])

  // Image error handling
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({})

  const handleImageError = (index: number) => {
    setImageError(prev => ({ ...prev, [index]: true }))
  }

  // Sort events by year and semester
  const sortedEvents = events.sort((a, b) => {
    if (a.year === b.year) {
      return parseInt(a.semester) - parseInt(b.semester)
    }
    return parseInt(b.year) - parseInt(a.year)
  })

  return (
    <>
      <h1 className='text-4xl text-center font-bold'>Events</h1>

      <h2 className='text-2xl text-center mt-8'>Next Event</h2>
      <p className='text-center mt-4 p-4'>
        The next Emerge event will be held on {formatDate(siteConfig.nextEvent)}{' '}
        at 7pm at Te Ōhaka, Ara Institute of Canterbury. We hope to see you
        there, food and drinks will be provided.
      </p>
      <div className='mt-4 p-4'>
        <Image
          src='/images/te-ohaka.webp'
          width={800}
          height={400}
          alt='Te Ōhaka'
          className='rounded-lg'
        />
      </div>

      <h2 className='text-2xl text-center mt-6'>Previous Events</h2>
      <div className='grid p-4 md:grid-cols-2 gap-4'>
        {sortedEvents.map((event, index) => (
          <Link
            key={index}
            href={`/explore?year=${event.year}&semester=${event.semester}`}
          >
            <div className='p-4 border rounded-lg cursor-pointer hover:bg-gray-100'>
              <p className='text-xl font-semibold text-center'>
                Semester {event.semester}, {event.year}
              </p>
              <Image
                src={
                  imageError[index]
                    ? '/images/event-group.jpg'
                    : `https://teaposgecjvklykdadhd.supabase.co/storage/v1/object/public/eventgroup/S${event.semester}${event.year}.jpg`
                }
                alt='Event Image'
                width={400}
                height={200}
                className='mx-auto rounded-md'
                onError={() => handleImageError(index)}
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Page
