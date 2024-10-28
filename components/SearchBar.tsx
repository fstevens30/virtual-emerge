/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from '@/components/ui/input'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState, ChangeEvent } from 'react'

interface iDefault {
  defaultValue: string | null
}

export const SearchBar = ({ defaultValue }: iDefault) => {
  const router = useRouter()

  const [inputValue, setValue] = useState(defaultValue)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value

    setValue(inputValue)
  }

  const handleSearch = () => {
    if (inputValue) return router.push(`/explore?q=${inputValue}`)

    if (!inputValue) return router.push('/')
  }

  const handleKeyPress = (event: { key: any }) => {
    if (event.key === 'Enter') return handleSearch()
  }

  return (
    <div className='flex items-center'>
      <Input
        type='text'
        placeholder='Search...'
        value={inputValue ?? ''}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        className='bg-transparent text-white'
      />
      <Button
        variant='default'
        className='ml-2 bg-accent hover:bg-accent'
        onClick={handleSearch}
      >
        <Search size={24} />
      </Button>
    </div>
  )
}
