import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import Image from 'next/image'

export default function HeroCarousel () {
  return (
    <Carousel className='my-16'>
      <CarouselContent>
        <CarouselItem>
          <Image
            src='/images/event-image.jpg'
            width={800}
            height={800}
            alt='Emerge Event Image'
            className='rounded-lg'
          />
        </CarouselItem>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
