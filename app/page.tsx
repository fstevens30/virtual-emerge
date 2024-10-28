import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home () {
  return (
    <div className='bg-white p-4'>
      <main className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-4xl font-bold'>Emerge</h1>
        <h2 className='text-xl font-semibold mt-2'>
          Celebrating the success of our Bachelor of ICT and Graduate Diploma in
          ICT students.
        </h2>
        <p className='text-lg mt-4 max-w-3xl'>
          Capstone projects play an important part in preparing our IT students
          for the workplace. Industry contributes significantly to this, by
          providing innovative real-world project opportunities, and by
          providing supportive mentorship.
        </p>
        <p className='text-lg mt-4 max-w-3xl'>
          Throughout their projects students are gaining valuable workplace
          skills, they are expanding their knowledge in business operations, and
          they are encouraged and motivated to think about the future and what
          their part will be in designing technologies for the future.
        </p>

        <Link href='/projects'>
          <Button className='mt-8 bg-accent'>
            <p>Explore</p>
          </Button>
        </Link>
      </main>

      <aside className='bg-gray-800 text-white p-4 mt-4'>
        <h2 className='text-xl font-bold'>Important Dates</h2>
        <ul className='mt-4'>
          <li>Project Showcase: 12th November 2021</li>
          <li>Project Showcase: 13th November 2021</li>
          <li>Project Showcase: 14th November 2021</li>
        </ul>
      </aside>
    </div>
  )
}
