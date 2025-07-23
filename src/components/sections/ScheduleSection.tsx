import { AnimatedScrollWrapper } from '@/components/AnimatedScrollWrapper';
import type { ReactElement } from 'react';

const scheduleItems: { time: string; event: string; description: string; side: 'left' | 'right' }[] = [
  {
    time: "3:30 PM",
    event: "Ceremony",
    description: "Witness our vows in a heartfelt ceremony.",
    side: 'right',
  },
  {
    time: "5:00 PM",
    event: "Cocktail Hour",
    description: "Enjoy drinks and light bites.",
    side: 'left',
  },
  {
    time: "6:30 PM",
    event: "Dinner",
    description: "A delicious meal to celebrate.",
    side: 'right',
  },
  {
    time: "8:00 PM",
    event: "Reception",
    description: "Let's dance the night away!",
    side: 'left',
  },
];

// Custom SVG Illustrations to match the hand-drawn style
const svgIcons: { [key: string]: ReactElement } = {
  Ceremony: (
    <svg viewBox="0 0 100 100" className="w-12 h-12 text-accent">
      <path d="M50 10 L80 30 L80 90 L20 90 L20 30 Z" stroke="currentColor" strokeWidth="3" fill="none" />
      <path d="M50 30 L50 50" stroke="currentColor" strokeWidth="3" fill="none" />
      <path d="M40 90 L40 60 L60 60 L60 90" stroke="currentColor" strokeWidth="3" fill="none" />
      <path d="M45 10 L55 10" stroke="currentColor" strokeWidth="3" fill="none" />
      <path d="M50 5 L50 15" stroke="currentColor" strokeWidth="3" fill="none" />
    </svg>
  ),
  'Cocktail Hour': (
    <svg viewBox="0 0 100 100" className="w-12 h-12 text-accent" transform="rotate(-15)">
      <path d="M20 20 L40 40 L60 20" stroke="currentColor" strokeWidth="3" fill="none"/>
      <path d="M40 40 L40 80" stroke="currentColor" strokeWidth="3" fill="none"/>
      <path d="M30 80 L50 80" stroke="currentColor" strokeWidth="3" fill="none"/>
      <path d="M80 30 L60 50 L40 30" stroke="currentColor" strokeWidth="3" fill="none" transform="translate(15, -5)"/>
      <path d="M60 50 L60 90" stroke="currentColor" strokeWidth="3" fill="none" transform="translate(15, -5)"/>
      <path d="M50 90 L70 90" stroke="currentColor" strokeWidth="3" fill="none" transform="translate(15, -5)"/>
    </svg>
  ),
  Dinner: (
     <svg viewBox="0 0 100 100" className="w-12 h-12 text-accent">
      <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="3" fill="none" />
      <path d="M20 80 L30 20" stroke="currentColor" strokeWidth="3" fill="none" transform="rotate(-15 25 50)"/>
      <path d="M80 80 L70 20" stroke="currentColor" strokeWidth="3" fill="none" transform="rotate(15 75 50)"/>
    </svg>
  ),
  Reception: (
    <svg viewBox="0 0 100 100" className="w-12 h-12 text-accent">
        <path d="M30 80 C 30 40, 70 40, 70 80" stroke="currentColor" strokeWidth="3" fill="none" />
        <circle cx="30" cy="80" r="5" fill="currentColor" />
        <circle cx="70" cy="80" r="5" fill="currentColor" />
        <path d="M50 40 L 50 20" stroke="currentColor" strokeWidth="3" fill="none" />
        <path d="M40 20 L 60 20" stroke="currentColor" strokeWidth="3" fill="none" />
        <path d="M50 40 L 40 50" stroke="currentColor" strokeWidth="3" fill="none" />
        <path d="M50 40 L 60 50" stroke="currentColor" strokeWidth="3" fill="none" />
    </svg>
  ),
};

export function ScheduleSection() {
  return (
    <section id="schedule" className="bg-background text-foreground py-20 md:py-32">
      <div className="container mx-auto px-4">
        <AnimatedScrollWrapper className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Our Wedding Day</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            A timeline of our special day. We can't wait to share these moments with you.
          </p>
        </AnimatedScrollWrapper>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-border/70"></div>
          
          <div className="space-y-24">
            {scheduleItems.map((item, index) => (
              <AnimatedScrollWrapper 
                key={index} 
                delay={`delay-${index * 150}`} 
                className="relative flex items-center"
              >
                {item.side === 'left' ? (
                  <>
                    {/* Text on the Left */}
                    <div className="w-5/12 text-right pr-8 md:pr-12">
                      <p className="text-xl md:text-2xl font-bold text-primary">{item.event}</p>
                      <p className="text-md text-muted-foreground">{item.time}</p>
                      <p className="text-sm text-muted-foreground mt-1 hidden md:block">{item.description}</p>
                    </div>
                    {/* Icon in the Middle */}
                    <div className="w-2/12 flex justify-center">
                       <div className="z-10 bg-background p-2 rounded-full border-2 border-border/80 shadow-md">
                        {svgIcons[item.event]}
                      </div>
                    </div>
                    {/* Empty Space on the Right */}
                    <div className="w-5/12"></div>
                  </>
                ) : (
                  <>
                    {/* Empty Space on the Left */}
                    <div className="w-5/12"></div>
                     {/* Icon in the Middle */}
                    <div className="w-2/12 flex justify-center">
                      <div className="z-10 bg-background p-2 rounded-full border-2 border-border/80 shadow-md">
                        {svgIcons[item.event]}
                      </div>
                    </div>
                    {/* Text on the Right */}
                    <div className="w-5/12 text-left pl-8 md:pl-12">
                      <p className="text-xl md:text-2xl font-bold text-primary">{item.event}</p>
                      <p className="text-md text-muted-foreground">{item.time}</p>
                      <p className="text-sm text-muted-foreground mt-1 hidden md:block">{item.description}</p>
                    </div>
                  </>
                )}
              </AnimatedScrollWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
