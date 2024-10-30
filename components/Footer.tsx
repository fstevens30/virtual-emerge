import Link from 'next/link'

export default function Footer () {
  return (
    <footer className='flex flex-col md:flex-row justify-between bottom-0 mt-8 p-4 py-8 bg-primary text-white'>
      <div>
        <p>&copy; Ara Institute of Canterbury 2024</p>
        <p>Made by Flynn Stevens</p>
      </div>
      <div className='flex flex-col mt-8 md:mt-0 md:mr-4 md:text-end'>
        <Link href='https://www.ara.ac.nz/' target='_blank'>
          <p className='hover:underline'>Ara Website</p>
        </Link>
        <Link
          href='https://www.ara.ac.nz/products/programme/ch3866-gene-bachelor-of-information-and-communication-technologies/'
          target='_blank'
        >
          <p className='hover:underline'>Bachelor ICT Information</p>
        </Link>
      </div>
    </footer>
  )
}
