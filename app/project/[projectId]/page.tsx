import ProjectPaper from '@/components/ProjectPaper'
import ProjectPoster from '@/components/ProjectPoster'
import projects from '@/public/projects.json'
import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'

type ProjectPageProps = {
  params: {
    projectId: string
  }
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { projectId } = await params
  const project = projects.find(
    project => project.projectId === Number(projectId)
  )

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className='p-4'>
      <div className='flex justify-center'>
        <Image
          src='/images/profile.png'
          alt={project.studentName}
          width={150}
          height={150}
          className='rounded-lg'
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

        <div className='flex justify-between'>
          <div className=' p-8'>
            <h2 className='text-2xl font-bold'>Contact</h2>
            <div className='flex'>
              <Phone />
              <p className='mt-2'>{project.phone}</p>
            </div>
            <div className='flex justify-between'>
              <Mail />
              <p className='mt-2'>{project.email}</p>
            </div>
          </div>

          <div className='flex flex-col justify-evenly'>
            <ProjectPoster />
            <ProjectPaper />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage
