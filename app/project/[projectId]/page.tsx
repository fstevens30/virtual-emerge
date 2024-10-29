import { Button } from '@/components/ui/button'
import projects from '@/public/projects.json'

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
        <img
          src='/images/profile.png'
          alt={project.studentName}
          className='w-32 h-32 rounded-full'
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
        <p className='text-center font-semibold'>{project.pathway}</p>
        <p className='text-center font-semibold'>
          Semester {project.semester}, {project.year}
        </p>
      </div>
      <div className='flex flex-col mt-8'>
        <div className='my-4 p-8'>
          <h2 className='text-2xl font-bold'>Introduction</h2>
          <p className='mt-2'>{project.introduction}</p>
        </div>

        <div className='flex justify-between'>
          <div className='my-4 p-8'>
            <h2 className='text-2xl font-bold'>Contact</h2>
            <p className='mt-2'>{project.phone}</p>
            <p className='mt-2'>{project.email}</p>
          </div>

          <div className='p-8 my-auto'>
            <Button variant='default'>View Poster</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage
