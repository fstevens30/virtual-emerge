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

interface ProjectPaperProps {
  projectId: number
  studentName: string
}

export default function ProjectPaper ({
  projectId,
  studentName
}: ProjectPaperProps) {
  // Handle Dialog open and close
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Handle downloading PDF
  const handleDownload = async () => {
    const response = await fetch(
      `https://teaposgecjvklykdadhd.supabase.co/storage/v1/object/public/paper/${studentName}.pdf`
    )
    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${studentName}-paper.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  const [pdfError, setPdfError] = useState<{ [key: number]: boolean }>({})

  const handlePdfError = (index: number) => {
    setPdfError(prev => ({ ...prev, [index]: true }))
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
            src={
              pdfError[projectId]
                ? '/images/404.png'
                : `https://teaposgecjvklykdadhd.supabase.co/storage/v1/object/public/paper/${studentName}.pdf`
            }
            title='Paper PDF'
            width='100%'
            height='100%'
            style={{ border: 'none' }}
            onError={() => handlePdfError(projectId)}
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
