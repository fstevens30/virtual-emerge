'use client'
import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import ProjectCard from '@/components/ProjectCard'
import projects from '@/public/projects.json'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

const Explore = () => {
  const searchParams = useSearchParams()
  const q = searchParams.get('q')
  const initialYear = searchParams.get('year')
  const initialSemester = searchParams.get('semester')
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [year, setYear] = useState<number | ''>(
    initialYear ? parseInt(initialYear) : ''
  )
  const [semester, setSemester] = useState<number | ''>(
    initialSemester ? parseInt(initialSemester) : ''
  )
  const [pathway, setPathway] = useState('')

  const uniqueYears = [...new Set(projects.map(project => project.year))]
  uniqueYears.sort((a, b) => b - a)
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
      filtered = filtered.filter(project => project.year === year)
    }

    if (semester) {
      filtered = filtered.filter(project => project.semester === semester)
    }

    if (pathway) {
      filtered = filtered.filter(project => project.pathway === pathway)
    }

    setFilteredProjects(filtered)
  }, [q, year, semester, pathway])

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
            {year || 'Select Year'}
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
            {semester ? `Semester ${semester}` : 'Select Semester'}
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
            {pathway || 'Select Pathway'}
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
            semester={project.semester.toString()}
            year={project.year.toString()}
            pathway={project.pathway}
            introduction={project.introduction}
            phone={project.phone}
            email={project.email}
          />
        ))}
      </div>
    </>
  )
}

export default Explore
