'use client'

import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogFooter
} from '@/components/ui/dialog'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function ProjectPaper () {
  // Handle Dialog open and close
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Handle downloading PDF
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/posters/test-paper.pdf'
    link.download = 'test-paper.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant='default'>View Paper</Button>
      </DialogTrigger>
      <DialogContent className='max-h-screen'>
        <DialogTitle>Project Paper</DialogTitle>
        <div className='w-full' style={{ height: '65vh' }}>
          <iframe
            src='/papers/test-paper.pdf#view=fit'
            title='Paper PDF'
            width='100%'
            height='100%'
            style={{ border: 'none' }}
          />
        </div>
        <DialogFooter>
          <Button variant='default' onClick={handleDownload}>
            Download
          </Button>
          <DialogClose asChild>
            <Button variant='outline' className='w-fit'>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
