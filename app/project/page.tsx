import { Button } from '@/components/ui/button'

enum pathway {
  'Software Development',
  'Networking',
  'Information Systems'
}

interface ProjectPageProps {
  projectName: string
  studentName: string
  semesterYear: string
  pathway: pathway
  introduction: string
  phone?: string
  email?: string
  linkedin?: string
}

export default function ProjectPage ({
  projectName,
  studentName,
  semesterYear,
  pathway,
  introduction,
  phone,
  email,
  linkedin
}: ProjectPageProps) {
  return (
    <div>
      <h1>{projectName}</h1>
      <h2>
        {studentName} - {semesterYear}
      </h2>
      <h2>{pathway}</h2>
      <div>{introduction}</div>

      <div>
        <h2>Contact</h2>
        {phone && <p>{phone}</p>}
        {email && <p>{email}</p>}
        {linkedin && <p>{linkedin}</p>}
      </div>
      <Button>View Poster</Button>
    </div>
  )
}
