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
    <div className='mt-96'>
      <h1 className='text-4xl text-center font-bold'>{project.projectName}</h1>
      <p className='text-xl text-center'>{project.studentName}</p>
      <p className='text-center'>{project.pathway}</p>
      <p className='text-center'>
        Semester {project.semester}, {project.year}
      </p>
      <p className='text-center'>{project.introduction}</p>
      <p className='text-center'>{project.phone}</p>
      <p className='text-center'>{project.email}</p>
    </div>
  )
}

export default ProjectPage
