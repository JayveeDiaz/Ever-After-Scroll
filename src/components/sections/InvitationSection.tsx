
import Image from 'next/image';
import { AnimatedScrollWrapper } from '@/components/AnimatedScrollWrapper';
import { MapPin, Mail } from 'lucide-react';
import { MapDialog } from '@/components/MapDialog';

export function InvitationSection() {
  return (
    <section id="invitation" className="bg-background text-foreground">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <AnimatedScrollWrapper className="w-full">
            <div className="relative aspect-square max-w-md mx-auto rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105">
                <Image
                // To change this image, add your photo to the 'public' folder
                // and update the path here (e.g., "/your-venue-image.jpg").
                src="/images/TimmyInTheWoods.jpg"
                alt="A beautiful forest wedding venue"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                data-ai-hint="forest venue wedding"
                />
            </div>
        </AnimatedScrollWrapper>

        <AnimatedScrollWrapper delay="delay-200" className="text-center md:text-left">
          <Mail className="mx-auto md:mx-0 h-16 w-16 text-accent mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            You're Invited!
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed text-muted-foreground">
            With joyous hearts, we, Julius and Ivy, invite you to share in our
            happiness as we exchange vows at a place dear to our hearts.
          </p>
          <MapDialog
            venueName="Timmy in The Woods"
            address="123 Enchanted Forest Lane, Woodland Hills"
          >
            <div
              className="inline-block transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="inline-flex items-center justify-center bg-card p-4 rounded-lg shadow-md border hover:border-accent">
                <MapPin className="h-8 w-8 mr-4 text-accent" />
                <div>
                  <p className="text-xl font-bold text-primary">Timmy in The Woods</p>
                  <p className="italic text-md text-muted-foreground">
                    123 Enchanted Forest Lane, Woodland Hills
                  </p>
                </div>
              </div>
            </div>
          </MapDialog>
        </AnimatedScrollWrapper>

      </div>
    </section>
  );
}
