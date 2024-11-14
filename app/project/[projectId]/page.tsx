'use client'
import ProjectPaper from '@/components/ProjectPaper'
import ProjectPoster from '@/components/ProjectPoster'
import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import { supabase } from '@/app/utils/supabase/supabase'
import { useState, useEffect } from 'react'

type ProjectPageProps = {
  params: Promise<{
    projectId: number
  }>
}

const ProjectPage = ({ params }: ProjectPageProps) => {
  const [projectId, setProjectId] = useState<number | null>(null)

  useEffect(() => {
    const unwrapParams = async () => {
      const resolvedParams = await params
      setProjectId(resolvedParams.projectId)
    }

    unwrapParams()
  }, [params])

  // Image error handling
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({})

  type Project = {
    projectName: string
    studentName: string
    pathway: string
    semester: number
    year: number
    introduction: string
    phone?: string
    email?: string
    linkedin?: string
    website?: string
  }

  const [project, setProject] = useState<Project | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (projectId !== null) {
      const fetchProject = async () => {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .eq('projectId', Number(projectId))
          .single()

        if (error) {
          setError('Project not found')
        } else {
          setProject(data)
        }
      }

      fetchProject()
    }
  }, [projectId])

  if (error) {
    return <div>{error}</div>
  }

  if (!project) {
    return <div>Loading...</div>
  }

  const handleImageError = (index: number) => {
    setImageError(prev => ({ ...prev, [index]: true }))
  }

  // Remove spaces from the student name to use in the image URL
  // Format John Doe to JohnDoe
  const shortStudentName = project.studentName.split(' ').join('')

  return (
    <div className='p-4'>
      <div className='flex justify-center'>
        <Image
          src={
            projectId !== null && imageError[projectId]
              ? '/images/profile.png'
              : `https://teaposgecjvklykdadhd.supabase.co/storage/v1/object/public/headshot/${shortStudentName}.jpg`
          }
          alt={project.studentName}
          width={150}
          height={150}
          className='rounded-lg'
          onError={() => projectId !== null && handleImageError(projectId)}
        />
        <div className='flex flex-col justify-center ml-4'>
          <h1 className='text-4xl text-center font-bold'>
            {project.projectName}
          </h1>
          <p className='text-xl font-semibold text-center'>
            {project.studentName}
          </p>
        </div>
      </div>
      <hr className='my-4' />

      <div className='flex flex-col justify-center'>
        <p className='text-center font-bold text-muted-foreground'>
          {project.pathway}
        </p>
        <p className='text-center font-bold text-muted-foreground '>
          Semester {project.semester}, {project.year}
        </p>
      </div>
      <div className='flex flex-col mt-8'>
        <div className='my-4 p-8'>
          <h2 className='text-2xl font-bold'>Introduction</h2>
          <p className='mt-2'>{project.introduction}</p>
        </div>

        <div className='flex flex-col md:flex-row justify-between'>
          <div className='flex flex-col justify-center'>
            {project.phone && (
              <div className='flex items-center'>
                <Phone className='mr-2' />
                <p className='mt-2'>{project.phone}</p>
              </div>
            )}

            {project.email && (
              <div className='flex items-center'>
                <Mail className='mr-2' />
                <p className='mt-2'>{project.email}</p>
              </div>
            )}
            {project.linkedin && (
              <div className='flex justify-between'>
                <a
                  href={
                    project.linkedin.startsWith('http')
                      ? project.linkedin
                      : `https://${project.linkedin}`
                  }
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center'
                >
                  LinkedIn
                </a>
              </div>
            )}
            {project.website && (
              <div className='flex justify-between'>
                <a
                  href={
                    project.website.startsWith('http')
                      ? project.website
                      : `https://${project.website}`
                  }
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center'
                >
                  Website
                </a>
              </div>
            )}
          </div>

          <div className='flex'>
            {projectId !== null && (
              <>
                <ProjectPoster
                  projectId={projectId}
                  studentName={project.studentName.split(' ').join('')}
                />
                <div className='w-4' />
                <ProjectPaper
                  projectId={projectId}
                  studentName={project.studentName.split(' ').join('')}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage
