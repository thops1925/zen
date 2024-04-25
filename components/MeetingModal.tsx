import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Button } from './ui/button'

interface MeetingProps {
  isOpen: boolean
  isClose: () => void
  title: string
  className?: string
  buttonText?: string
  handleClick: () => void
  image?: string
  buttonIcon?: string
}

const MeetingModal = ({
  isOpen,
  isClose,
  title,
  className,
  buttonText,
  handleClick,
  image,
  buttonIcon
}: MeetingProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={isClose}>
      <DialogContent className='flex w-full max-w-[520px] flex-col gap-6 border-none px-6 py-9 '>
        <div className='flex flex-col  gap-6 '>
          {image && (
            <div className='flex flex-col gap-6'>
              <Image src={image} alt='image' width={72} height={72} />
            </div>
          )}
          <h1 className={cn('text-3xl font-bold leading-[42px]', className)}>
            {title}
          </h1>
          <Button
            className='bg-sky-600 focus-visible:0 focus-visible:ring-offset-0'
            onClick={handleClick}
          >
            {buttonIcon && (
              <Image
                src={buttonIcon}
                alt='buttonicon '
                width={13}
                height={13}
              />
            )}
            {buttonText || 'Schedule Meeting'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default MeetingModal
