'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription
} from '@/components/ui/card'
import Image from 'next/image'

interface ProjectCardProps {
  projectId: number
  projectName: string
  studentName: string
  semester: string
  year: number
  pathway: string
  introduction: string
  phone: string | undefined
  email: string | undefined
  linkedin: string | undefined
  website: string | undefined
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectId,
  projectName,
  studentName,
  semester,
  year,
  pathway
}) => {
  // Image error handling
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({})

  const handleImageError = (index: number) => {
    setImageError(prev => ({ ...prev, [index]: true }))
  }

  // Remove spaces from the student name to use in the image URL
  // Format John Doe to JohnDoe
  const shortStudentName = studentName.split(' ').join('')

  return (
    <Link href={`/project/${projectId}`}>
      <Card className='mt-4 md:mt-0 cursor-pointer hover:bg-gray-100'>
        <CardHeader>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <CardTitle>{projectName}</CardTitle>
              <CardDescription className='font-bold'>
                {studentName}
              </CardDescription>
            </div>
            <Image
              src={
                imageError[projectId]
                  ? '/images/profile.png'
                  : `https://teaposgecjvklykdadhd.supabase.co/storage/v1/object/public/headshot/${shortStudentName}.jpg`
              }
              alt={studentName}
              width={128}
              height={128}
              className='rounded-md'
              onError={() => handleImageError(projectId)}
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className='flex justify-between mt-2'>
            <p className='text-muted-foreground text-sm'>{pathway}</p>
            <p className='text-muted-foreground text-sm'>
              Semester {semester}, {year}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default ProjectCard
