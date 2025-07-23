'use client';

import { type ReactNode, useRef } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useScroll, useTransform, m, LazyMotion, domAnimation } from 'framer-motion';

interface ParallaxBackgroundProps {
  imageUrl: string;
  altText: string;
  children: ReactNode;
  className?: string;
  overlayOpacity?: number; // 0 to 1
  overlayColor?: 'black' | 'white';
  minHeight?: string; // e.g., 'min-h-screen'
  dataAiHint?: string;
}

export function ParallaxBackground({
  imageUrl,
  altText,
  children,
  className,
  overlayOpacity = 0.3,
  overlayColor = 'black',
  minHeight = 'min-h-screen',
  dataAiHint
}: ParallaxBackgroundProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section
      ref={ref}
      className={cn('relative overflow-hidden flex items-center justify-center', minHeight, className)}
    >
        <LazyMotion features={domAnimation}>
            <m.div className="absolute inset-0 z-0" style={{ y }}>
                <Image
                    src={imageUrl}
                    alt={altText}
                    fill
                    className="object-cover"
                    quality={90}
                    priority
                    data-ai-hint={dataAiHint}
                />
                {overlayOpacity > 0 && (
                <div
                    className={cn('absolute inset-0', {
                      'bg-black': overlayColor === 'black',
                      'bg-white': overlayColor === 'white',
                    })}
                    style={{ opacity: overlayOpacity }}
                ></div>
                )}
            </m.div>
        </LazyMotion>
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center text-white">
        {children}
      </div>
    </section>
  );
}
