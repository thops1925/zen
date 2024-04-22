import { ModeToggle } from '@/components/ModeToggle'
import {
  EyeNoneIcon,
  HomeIcon,
  MixIcon,
  PinLeftIcon,
  PinRightIcon
} from '@radix-ui/react-icons'

export const sideBarLinks = [
  {
    label: 'Home',
    imgUrl: <HomeIcon />,
    route: '/'
  },
  {
    label: 'Upcoming',
    imgUrl: <PinRightIcon />,
    route: '/upcoming'
  },
  {
    label: 'Previous',
    imgUrl: <PinLeftIcon />,
    route: '/previous'
  },
  {
    label: 'Recordings',
    imgUrl: <MixIcon />,
    route: '/recordings'
  },
  {
    label: 'Private Room',
    imgUrl: <EyeNoneIcon />,
    route: '/personal-room'
  }
]
