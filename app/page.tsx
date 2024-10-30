import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home () {
  return (
    <div className='bg-white w-full'>
      <main className='flex flex-col items-center mx-auto p-4 justify-center max-w-3xl h-3/4'>
        <h1 className='text-4xl font-bold mt-8'>Virtual Emerge</h1>
        <h2 className='text-xl font-semibold mt-2'>
          Celebrating the success of our Bachelor of ICT and Graduate Diploma in
          ICT students.
        </h2>
        <p className='text-lg mt-4'>
          Capstone projects play an important part in preparing our IT students
          for the workplace. Industry contributes significantly to this, by
          providing innovative real-world project opportunities, and by
          providing supportive mentorship.
        </p>
        <p className='text-lg mt-4'>
          Throughout their projects students are gaining valuable workplace
          skills, they are expanding their knowledge in business operations, and
          they are encouraged and motivated to think about the future and what
          their part will be in designing technologies for the future.
        </p>

        <Link href='/explore'>
          <Button className='mt-8'>Explore</Button>
        </Link>

        <div className='my-16 p-4'>
          <Image
            src='/images/event-image.jpg'
            width={800}
            height={400}
            alt='Hero'
            className='rounded-lg'
          />
        </div>
      </main>

      <div className='flex flex-col items-center justify-center mx-auto mt-8 p-4'>
        <h2 className='text-xl font-semibold'>About</h2>
        <div className='max-w-3xl'>
          <p className='text-lg mt-4'>
            Emerge is an event for ICT students at Ara to showcase their final
            year projects. It is open to industry, students and the community.
            This site acts as a digital repository for previous events and
            student work.{' '}
            <Link className='hover:underline' href='/explore'>
              Explore
            </Link>{' '}
            using the menu above to search and filter all projects.
          </p>

          <p className='text-lg mt-4'>
            Emerge is held twice per year, one event for each semester. Visit
            the{' '}
            <Link className='hover:underline' href='/events'>
              Events
            </Link>{' '}
            page to view upcoming and previous events.
          </p>
        </div>
      </div>
    </div>
  )
}
