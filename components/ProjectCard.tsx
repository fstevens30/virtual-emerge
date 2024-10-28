import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription
} from '@/components/ui/card'

interface ProjectCardProps {
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
  projectName,
  studentName,
  semester,
  year,
  pathway
}) => {
  return (
    <Card className='mt-4 md:mt-0'>
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
  )
}

export default ProjectCard
