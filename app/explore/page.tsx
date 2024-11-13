'use client'
import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import ProjectCard from '@/components/ProjectCard'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Filter } from 'lucide-react'
import { supabase } from '../utils/supabase/supabase'

interface ProjectType {
  projectId: number
  projectName: string
  studentName: string
  semester: string
  year: number
  pathway: string
  introduction: string
  phone?: string
  email?: string
  linkedin?: string
  website?: string
  eventId: string
}

const Explore = () => {
  const searchParams = useSearchParams()
  const q = searchParams.get('q')
  const initialYear = searchParams.get('year')
  const initialSemester = searchParams.get('semester')
  const [projects, setProjects] = useState<ProjectType[]>([]) // Initialize projects state
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>([])
  const [year, setYear] = useState<number | ''>(
    initialYear ? parseInt(initialYear) : ''
  )
  const [semester, setSemester] = useState<number | ''>(
    initialSemester ? parseInt(initialSemester) : ''
  )
  const [pathway, setPathway] = useState('')

  useEffect(() => {
    async function getData () {
      const { data: projects } = await supabase.from('projects').select('*')

      if (projects && projects.length > 0) {
        const mappedProjects = projects.map(
          (project: {
            projectId: number
            projectName: string
            studentName: string
            semester: string
            year: number
            pathway: string
            introduction: string
            phone: string
            email: string
            linkedin: string
            website: string
            eventId: string
          }) => ({
            projectId: project.projectId,
            projectName: project.projectName,
            studentName: project.studentName,
            semester: project.semester,
            year: project.year,
            pathway: project.pathway,
            introduction: project.introduction,
            phone: project.phone,
            email: project.email,
            linkedin: project.linkedin,
            website: project.website,
            eventId: project.eventId
          })
        )

        setProjects(mappedProjects)
      }
    }

    getData()
  }, [])

  const uniqueYears = [...new Set(projects.map(project => project.year))]
  const uniquePathways = [...new Set(projects.map(project => project.pathway))]

  useEffect(() => {
    let filtered = projects

    if (q) {
      filtered = filtered.filter(
        project =>
          project.projectName.toLowerCase().includes(q.toLowerCase()) ||
          project.studentName.toLowerCase().includes(q.toLowerCase()) ||
          project.pathway.toLowerCase().includes(q.toLowerCase())
      )
    }

    if (year) {
      filtered = filtered.filter(
        project => parseInt(project.year.toString()) === year
      )
    }

    if (semester) {
      filtered = filtered.filter(
        project => parseInt(project.semester || '0') === semester
      )
    }

    if (pathway) {
      filtered = filtered.filter(project => project.pathway === pathway)
    }

    setFilteredProjects(filtered)
  }, [q, year, semester, pathway, projects])

  const handleReset = () => {
    setYear('')
    setSemester('')
    setPathway('')
    history.pushState({}, '', '/explore')
  }

  return (
    <>
      <h1 className='text-4xl text-center font-bold'>Explore</h1>
      <div className='flex md:flex-row flex-col items-center justify-center mt-4'>
        <DropdownMenu>
          <DropdownMenuTrigger className='mx-2 p-2 border w-1/2 mt-2'>
            {year || (
              <p>
                Select Year
                <Filter className='inline ml-2' />
              </p>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => setYear('')}>
              <strong>All Years</strong>
            </DropdownMenuItem>
            {uniqueYears.map(year => (
              <DropdownMenuItem key={year} onSelect={() => setYear(year)}>
                {year}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className='mx-2 p-2 border w-1/2 mt-2'>
            {semester ? (
              `Semester ${semester}`
            ) : (
              <p>
                Select Semester
                <Filter className='inline ml-2' />
              </p>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => setSemester('')}>
              <strong>All Semesters</strong>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setSemester(1)}>
              Semester 1
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setSemester(2)}>
              Semester 2
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className='mx-2 p-2 border w-1/2 mt-2'>
            {pathway || (
              <p>
                Select Pathway
                <Filter className='inline ml-2' />
              </p>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => setPathway('')}>
              <strong>All Pathways</strong>
            </DropdownMenuItem>
            {uniquePathways.map(pathway => (
              <DropdownMenuItem
                key={pathway}
                onSelect={() => setPathway(pathway)}
              >
                {pathway}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Button
        variant='outline'
        onClick={handleReset}
        className='mt-4 mx-auto flex'
      >
        Clear
      </Button>
      <div className='grid p-4 md:p-2 md:grid-cols-2  gap-4 mt-4'>
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            projectId={project.projectId}
            projectName={project.projectName}
            studentName={project.studentName}
            semester={project.semester}
            year={project.year}
            pathway={project.pathway}
            introduction={project.introduction}
            phone={project.phone}
            email={project.email}
            linkedin={project.linkedin}
            website={project.website}
          />
        ))}
      </div>
    </>
  )
}

export default Explore
