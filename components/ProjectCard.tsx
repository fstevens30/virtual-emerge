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
          <CardTitle>{projectName}</CardTitle>
          <CardDescription>{studentName}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{pathway}</p>
          <p>
            Semester {semester}, {year}
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}

export default ProjectCard
