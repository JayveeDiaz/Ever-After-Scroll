'use client';

import { useState, useEffect } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { PhotoCarousel } from '@/components/PhotoCarousel';
import { AnimatedScrollWrapper } from '@/components/AnimatedScrollWrapper';

import { InvitationSection } from '@/components/sections/InvitationSection';
import { AttireSection } from '@/components/sections/AttireSection';
import { ScheduleSection } from '@/components/sections/ScheduleSection';
import { RsvpSection } from '@/components/sections/RsvpSection';
import { Separator } from '@/components/ui/separator';
import { HeroSection } from '@/components/sections/HeroSection';
import { EntourageSection } from '@/components/sections/EntourageSection';

export default function Home() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <HeroSection />

      <InvitationSection />
      <Separator className="my-0 bg-border/50 h-px" />
      <EntourageSection />
      <Separator className="my-0 bg-border/50 h-px" />
      <AttireSection />
      <Separator className="my-0 bg-border/50 h-px" />
      <ScheduleSection />
      <Separator className="my-0 bg-border/50 h-px" />
      <RsvpSection />

      <footer className="bg-background text-center py-8">
        <p className="text-muted-foreground text-sm">
          With love, Ivy & Julius &copy; {year}
        </p>
        <p className="text-xs text-muted-foreground/70 mt-1">
          Ever After Scroll
        </p>
      </footer>
    </>
  );
}
