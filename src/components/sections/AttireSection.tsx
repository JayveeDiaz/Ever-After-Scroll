
import Image from 'next/image';
import { AnimatedScrollWrapper } from '@/components/AnimatedScrollWrapper';
import { Shirt } from 'lucide-react';

export function AttireSection() {
  return (
    <section id="attire" className="bg-secondary text-foreground">
      <div className="container mx-auto text-center">
        <AnimatedScrollWrapper>
          <Shirt className="mx-auto h-16 w-16 text-accent mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Dress Code</h2>
        </AnimatedScrollWrapper>
        
        <AnimatedScrollWrapper delay="delay-200" className="max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl mb-4 font-semibold">Formal Elegance</p>
          <p className="text-lg mb-8 leading-relaxed">
            We kindly request guests to dress in formal attire. Think floor-length gowns or elegant cocktail dresses for ladies, and suits or tuxedos for gentlemen. Let's make this a night of sophisticated celebration!
          </p>
          <p className="text-md mb-4 font-semibold">Color Palette For Dress Code:</p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#192A56] shadow-md" title="Navy Blue"></div>
                <p className="text-xs text-muted-foreground">NAVY BLUE</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#829AB1] shadow-md" title="Dusty Blue"></div>
                <p className="text-xs text-muted-foreground">DUSTY BLUE</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#A6CDE8] shadow-md" title="Baby Blue"></div>
                <p className="text-xs text-muted-foreground">BABY BLUE</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#4A4A4A] shadow-md" title="Dark Gray"></div>
                <p className="text-xs text-muted-foreground">DARK GRAY</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#000000] shadow-md" title="Black"></div>
                <p className="text-xs text-muted-foreground">BLACK</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#F5F5DC] shadow-md border border-border" title="Cream"></div>
                <p className="text-xs text-muted-foreground">CREAM</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#D2B48C] shadow-md" title="Beige"></div>
                <p className="text-xs text-muted-foreground">BEIGE</p>
            </div>
          </div>
        </AnimatedScrollWrapper>

        <AnimatedScrollWrapper delay="delay-400" className="mt-10">
          <div className="relative aspect-video max-w-2xl mx-auto rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/attire-hanging.jpg"
              alt="Attire inspiration collage of wedding clothes hanging"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              data-ai-hint="attire hanging"
            />
          </div>
        </AnimatedScrollWrapper>
      </div>
    </section>
  );
}
