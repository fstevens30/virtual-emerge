'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'
import EventCountdown from '@/components/EventCountdown'
import Image from 'next/image'
import { SearchBar } from './SearchBar'

const Header: React.FC = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {isBannerVisible && (
        <EventCountdown onClose={() => setIsBannerVisible(false)} />
      )}
      <header
        className={`flex flex-col fixed top-0 right-0 left-0 bg-primary text-white ${
          isBannerVisible ? 'mt-12' : 'mt-0'
        }`}
      >
        <div className='flex items-center justify-between p-4'>
          {/*Mobile Header Images */}
          <Link href='/' className='items-center flex flex-col'>
            <Image
              src='/logo-landscape.png'
              width={150}
              height={50}
              alt='Emerge Logo'
            />
            <span className='p-2 text-4xl font-bold'>Emerge</span>
          </Link>

          <nav className='hidden md:flex space-x-4'>
            <Link href='/' className='hover:underline'>
              Home
            </Link>
            <Link href='/events' className='hover:underline'>
              Events
            </Link>
            <Link href='/explore' className='hover:underline'>
              Explore
            </Link>
          </nav>
          <div className='hidden md:flex'>
            <SearchBar defaultValue={''} />
          </div>
          <div className='md:hidden flex items-center'>
            <Button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <p className='text-white text-lg'>Menu</p>
              {isMobileMenuOpen ? <X size={100} /> : <Menu size={100} />}
            </Button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className='md:hidden flex flex-col left-0 right-0 bg-primary text-white p-4'>
            <Link
              href='/'
              className='hover:underline py-2'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              Home
            </Link>
            <Link
              href='/events'
              className='hover:underline py-2'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              Events
            </Link>
            <Link
              href='/explore'
              className='hover:underline py-2'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              Explore
            </Link>
            <SearchBar defaultValue={''} />
          </div>
        )}
      </header>
    </>
  )
}

export default Header
