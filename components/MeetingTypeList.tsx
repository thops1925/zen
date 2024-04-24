'use client'
import React, { useState } from 'react'
import HomeCard from './HomeCard'
import { useRouter } from 'next/navigation'
import {
  DownloadIcon,
  PieChartIcon,
  PlusIcon,
  RocketIcon
} from '@radix-ui/react-icons'

const MeetingTypeList = () => {
  const router = useRouter()
  const [Meeting, setMeeting] = useState<
    'isScheduleMeeting' | 'isJoinMeeting' | 'isInstantMeeting' | undefined
  >()
  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
      <HomeCard
        icon={<PlusIcon />}
        title='new Meeting'
        description='Start an  instant meeting'
        className='bg-orange-600'
        handleClick={() => setMeeting('isJoinMeeting')}
      />
      <HomeCard
        icon={<PieChartIcon />}
        title='Schedule meeting'
        description='plan your meeting'
        className='bg-green-600'
        handleClick={() => setMeeting('isScheduleMeeting')}
      />{' '}
      <HomeCard
        icon={<DownloadIcon />}
        title='View Recordings'
        description='Check out recordings'
        className='bg-purple-600'
        handleClick={() => router.push('/recordings')}
      />{' '}
      <HomeCard
        icon={<RocketIcon />}
        title='Instant link'
        description='Join Meeting'
        className='bg-rose-600'
        handleClick={() => setMeeting('isJoinMeeting')}
      />
    </section>
  )
}

export default MeetingTypeList
