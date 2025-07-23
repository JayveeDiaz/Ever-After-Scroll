'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedScrollWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: string; // e.g., 'delay-200' (Tailwind class)
  threshold?: number;
  once?: boolean; // Animate only once
}

export function AnimatedScrollWrapper({
  children,
  className,
  delay = '',
  threshold = 0.1,
  once = true,
}: AnimatedScrollWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (once) {
            observer.unobserve(element);
          }
        }
      },
      {
        threshold,
      }
    );

    observer.observe(element);

    return () => {
      if(element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-1000 ease-out',
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        delay,
        className
      )}
    >
      {children}
    </div>
  );
}
