'use client'

import React, { useState } from 'react'
import { Menu } from 'lucide-react'
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
        <div className='flex items-center justify-between p-4 py-8'>
          <Link href='/' className='flex flex-col md:flex-row items-center'>
            <Image src='/Logo.png' width={80} height={50} alt='Emerge Logo' />
            <span className='p-2 md:ml-4 text-4xl font-bold'>Emerge</span>
          </Link>
          <nav className='hidden md:flex space-x-4'>
            <Link href='/' className='hover:text-secondary'>
              Home
            </Link>
            <Link href='/events' className='hover:text-secondary'>
              Events
            </Link>
            <Link href='/explore' className='hover:text-secondary'>
              Explore
            </Link>
          </nav>
          <div className='hidden md:flex'>
            <SearchBar defaultValue={''} />
          </div>
          <div className='md:hidden flex items-center'>
            <Button
              variant='ghost'
              className='bg-accent'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={24} />
            </Button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className='md:hidden flex flex-col left-0 right-0 bg-primary text-white p-4'>
            <Link
              href='/'
              className='hover:text-gray-400 py-2'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              Home
            </Link>
            <Link
              href='/events'
              className='hover:text-gray-400 py-2'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              Events
            </Link>
            <Link
              href='/explore'
              className='hover:text-gray-400 py-2'
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
