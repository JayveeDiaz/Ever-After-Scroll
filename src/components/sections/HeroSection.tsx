'use client';

import Image from 'next/image';
import { AnimatedScrollWrapper } from '@/components/AnimatedScrollWrapper';
import { Button } from '@/components/ui/button';
import { ArrowDown, Calendar, MapPin } from 'lucide-react';
import { PhotoCarousel } from '@/components/PhotoCarousel';
import { cn } from '@/lib/utils';
import { playfairDisplay } from '@/lib/fonts';

export function HeroSection() {
  return (
    <section id="home" className="relative bg-[#eaf4fa] pt-12 md:pt-20 text-center overflow-hidden">
      {/* Top-left */}
      <Image
        src="/images/BlueSmudge.svg"
        alt="Blue flower"
        className="absolute left-0 top-0 translate-x-[-20%] translate-y-[-20%] w-[60vw] max-w-[500px] select-none pointer-events-none"
        aria-hidden="true"
        width={600}
        height={600}
      />

      {/* Top-right */}
      <Image
        src="/images/BlueFlower.svg"
        alt="Blue smudge"
        className="absolute right-0 top-0 translate-x-[20%] translate-y-[-20%] w-[60vw] max-w-[500px] select-none pointer-events-none rotate-180"
        aria-hidden="true"
        width={600}
        height={600}
      />

      {/* Bottom-left */}
      <Image
        src="/images/BlueFlower.svg"
        alt="Blue flower"
        className="absolute left-0 bottom-0 translate-x-[-20%] translate-y-[20%] w-[60vw] max-w-[500px] select-none pointer-events-none scale-x-[-1]"
        aria-hidden="true"
        width={600}
        height={600}
      />

      {/* Bottom-right */}
      <Image
        src="/images/BlueSmudge.svg"
        alt="Blue smudge"
        className="absolute right-0 bottom-0 translate-x-[20%] translate-y-[20%] w-[60vw] max-w-[500px] select-none pointer-events-none"
        aria-hidden="true"
        width={600}
        height={600}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedScrollWrapper delay="delay-150" className="text-center text-foreground">
          <h1 className={cn("text-6xl md:text-8xl font-bold text-primary", playfairDisplay.className)}>
            Ivy & Julius
          </h1>
          <p className="text-2xl md:text-3xl text-primary/80 mt-2">
            #IVYLongToUYONG
          </p>
        </AnimatedScrollWrapper>

        <AnimatedScrollWrapper delay="delay-300" className="w-full my-8">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
            <PhotoCarousel />
          </div>
        </AnimatedScrollWrapper>

        <AnimatedScrollWrapper delay="delay-450" className="text-center text-foreground space-y-2">
          <div className="flex items-center justify-center gap-2 text-lg">
            <Calendar className="w-5 h-5 text-accent" />
            <span>September 15, 2025</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-md">
            <MapPin className="w-5 h-5 text-accent" />
            <span>Timmy in The Woods, Woodland Hills</span>
          </div>
        </AnimatedScrollWrapper>
      </div>

      <div className="relative mt-8 pb-12 z-10">
        <a href="#invitation" aria-label="Scroll down for more details">
          <ArrowDown className="h-8 w-8 text-foreground/80 animate-bounce drop-shadow-lg mx-auto" />
        </a>
      </div>
    </section>
  );
}
