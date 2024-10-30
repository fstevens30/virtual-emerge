import React from 'react'
import Link from 'next/link'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription
} from '@/components/ui/card'

interface ProjectCardProps {
  projectId: number
  projectName: string
  studentName: string
  semester: string
  year: string
  pathway: string
  introduction: string
  phone: string
  email: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectId,
  projectName,
  studentName,
  semester,
  year,
  pathway
}) => {
  return (
    <Link href={`/project/${projectId}`}>
      <Card className='mt-4 md:mt-0 cursor-pointer hover:bg-gray-100'>
        <CardHeader>
          <div className='flex flex-col text-center'>
            <CardTitle>{projectName}</CardTitle>
            <CardDescription className='font-bold'>
              {studentName}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className='flex justify-between mt-2'>
            <p className='text-muted-foreground'>{pathway}</p>
            <p className='text-muted-foreground'>
              Semester {semester}, {year}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default ProjectCard
