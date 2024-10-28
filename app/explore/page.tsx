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

const Explore = () => {
  const searchParams = useSearchParams()
  const q = searchParams.get('q')
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [year, setYear] = useState<number | ''>('')
  const [semester, setSemester] = useState<number | ''>('')
  const [pathway, setPathway] = useState('')

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
  }

  return (
    <>
      <h1 className='text-4xl text-center font-bold mt-56'>Explore</h1>
      <div className='flex md:flex-row flex-col items-center justify-center mt-4'>
        <DropdownMenu>
          <DropdownMenuTrigger className='mx-2 p-2 border w-1/3 mt-2'>
            {year || 'Select Year'}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => setYear('')}>
              All Years
            </DropdownMenuItem>
            {uniqueYears.map((year, index) => (
              <DropdownMenuItem key={index} onSelect={() => setYear(year)}>
                {year}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className='mx-2 p-2 border w-1/3 mt-2'>
            {semester || 'Select Semester'}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => setSemester('')}>
              All Semesters
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setSemester(1)}>
              1
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setSemester(2)}>
              2
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className='mx-2 p-2 border w-1/3 mt-2'>
            {pathway || 'Select Pathway'}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => setPathway('')}>
              All Pathways
            </DropdownMenuItem>
            {uniquePathways.map((pathway, index) => (
              <DropdownMenuItem
                key={index}
                onSelect={() => setPathway(pathway)}
              >
                {pathway}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className='flex justify-center mt-4'>
        <button
          onClick={handleReset}
          className='mx-2 p-2 border bg-red-500 text-white'
        >
          Reset
        </button>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 lg:max-w-screen-lg md:max-w-screen-md mx-auto md:gap-4 p-4'>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              projectName={project.projectName}
              studentName={project.studentName}
              year={project.year.toString()}
              semester={project.semester.toString()}
              pathway={project.pathway}
              introduction={project.introduction}
              phone={project.phone}
              email={project.email}
            />
          ))
        ) : (
          <div className='col-span-full text-center text-gray-500'>
            No projects found
          </div>
        )}
      </div>
    </>
  )
}

export default Explore
