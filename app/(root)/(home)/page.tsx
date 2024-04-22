import MeetingTypeList from '@/components/MeetingTypeList'
import React from 'react'

const Home = () => {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  })
  const date = now.toLocaleDateString('en-US', { dateStyle: 'full' })
  return (
    <section className='w-full'>
      <div className='h-[300px] w-full rounded-[20px] bg-fill bg-center bg-hero border-2 border-zinc-900 flex-col justify-between max-md:px-5 max-md:py:8 lg:p-11'>
        <div className='flex h-full gap-10 flex-col max-md:py-8 lg:p-15 sm:p-5 w-full'>
          <h2 className='backdrop-blur-sm  bg-white/10  max-w-[270px] rounded py-2 text-center text-base font-semibold capitalize'>
            upcomming
          </h2>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-extrabold lg:text-7xl'>{time}</h1>
            <p className='text-lg lg:text-2xl font-medium '>{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  )
}
export default Home
