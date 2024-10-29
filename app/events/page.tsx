import Link from 'next/link'
import Image from 'next/image'
import projects from '@/public/projects.json'
import { siteConfig } from '@/config/site'
import { formatDate } from '@/lib/utils'

export default function Events () {
  // Extract unique events from projects
  const events = projects.reduce(
    (acc: { key: string; year: number; semester: number }[], project) => {
      const eventKey = `${project.year}-${project.semester}`
      if (!acc.some(event => event.key === eventKey)) {
        acc.push({
          key: eventKey,
          year: project.year,
          semester: project.semester
        })
      }
      return acc
    },
    []
  )

  return (
    <>
      <h1 className='text-4xl text-center font-bold'>Events</h1>

      <h2 className='text-2xl text-center mt-8'>Next Event</h2>
      <p className='text-center mt-4'>
        The next Emerge event will be held on {formatDate(siteConfig.nextEvent)}{' '}
        at 7pm at Te Ōhaka, Ara Institute of Canterbury. We hope to see you
        there, food and drinks will be provided.
      </p>

      <h2 className='text-2xl text-center mt-8'>Previous Events</h2>
      <div className='grid p-4 md:grid-cols-2 gap-4'>
        {events.map((event, index) => (
          <Link
            key={index}
            href={`/explore?year=${event.year}&semester=${event.semester}`}
          >
            <div className='p-4 border rounded-lg cursor-pointer hover:bg-gray-100'>
              <p className='text-xl font-semibold text-center'>
                Semester {event.semester}, {event.year}
              </p>
              <Image
                src='/images/event-group.jpg'
                alt='Event Image'
                width={400}
                height={200}
                className='mx-auto'
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
