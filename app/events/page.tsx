const events = [
  {
    semester: 1,
    year: 2024
  },
  {
    semester: 2,
    year: 2023
  },
  {
    semester: 1,
    year: 2023
  },
  {
    semester: 2,
    year: 2022
  }
]

export default function Events () {
  return (
    <>
      <h1 className='text-4xl text-center font-bold'>Events</h1>

      <h2 className='text-2xl text-center mt-4'>Next Event</h2>
      <p>Next event details</p>

      <h2 className='text-2xl text-center mt-4'>Previous Events</h2>
      <div className='grid md:grid-cols-2 md:max-w-screen-md gap-4'>
        {events.map((event, index) => (
          <div key={index} className='p-4 border rounded-lg'>
            <p>
              Semester {event.semester}, {event.year}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}
