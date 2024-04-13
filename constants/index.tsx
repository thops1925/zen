import { ModeToggle } from '@/components/ModeToggle'
import { HomeIcon } from '@radix-ui/react-icons'

export const sideBarLinks = [
  {
    label: 'Home',
    imgUrl: '/icons/Home.svg',
    route: '/'
  },
  {
    label: 'Upcoming',
    imgUrl: '/icons/upcoming.svg',
    route: '/upcoming'
  },
  {
    label: 'Previous',
    imgUrl: '/icons/previous.svg',
    route: '/previous'
  },
  {
    label: 'Recordings',
    imgUrl: '/icons/recordings.svg',
    route: '/recordings'
  },
  {
    label: 'Private Room',
    imgUrl: '/icons/add-personal.svg',
    route: '/personal-room'
  }
]
