
'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/ui/card';

// These are your uploaded photos.
// The paths now point to the 'public/images/' directory.
const photos = [
  { src: '/images/Pic1_Compressed.jpg', alt: 'A photo of Ivy and Julius', hint: 'happy couple' },
  { src: '/images/Pic2_Compressed.jpg', alt: 'A photo of Ivy and Julius', hint: 'wedding couple' },
  { src: '/images/Pic3_Compressed.jpg', alt: 'A photo of Ivy and Julius', hint: 'couple smiling' },
  { src: '/images/Pic4_Compressed.jpg', alt: 'A photo of Ivy and Julius', hint: 'wedding celebration' },
  { src: '/images/Pic5_Compressed.jpg', alt: 'A photo of Ivy and Julius', hint: 'couple love' },
];

export function PhotoCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="-ml-4">
        {photos.map((photo, index) => (
          <CarouselItem key={index} className="pl-4">
            <div className="p-1">
              <Card className="overflow-hidden rounded-xl shadow-lg border-primary/20">
                <CardContent className="flex aspect-[2/3] items-center justify-center p-0">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={600}
                    height={900}
                    className="w-full h-full object-cover"
                    data-ai-hint={photo.hint}
                    priority={index === 0}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex bg-white/50 hover:bg-white/80 text-primary" />
      <CarouselNext className="hidden sm:flex bg-white/50 hover:bg-white/80 text-primary" />
    </Carousel>
  );
}
