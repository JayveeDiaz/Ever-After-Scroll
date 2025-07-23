import { AnimatedScrollWrapper } from '@/components/AnimatedScrollWrapper';
import { HeartHandshake } from 'lucide-react';
import { playfairDisplay } from '@/lib/fonts';
import { cn } from '@/lib/utils';

interface RoleGroupProps {
  title: string;
  people: string[] | { role: string; names: string[] }[];
  className?: string;
  titleClassName?: string;
}

const RoleGroup: React.FC<RoleGroupProps> = ({ title, people, className, titleClassName }) => (
  <div className={cn("text-center", className)}>
    <h3 className={cn("text-2xl mb-4 text-primary", playfairDisplay.className, titleClassName)}>{title}</h3>
    <div className="text-muted-foreground space-y-1">
      {people.map((person, index) => {
        if (typeof person === 'string') {
          return <p key={index}>{person}</p>;
        }
        return (
          <div key={index} className="mt-3">
            <p className="font-semibold text-primary/80">{person.role}</p>
            {person.names.map((name, i) => <p key={i}>{name}</p>)}
          </div>
        );
      })}
    </div>
  </div>
);

export function EntourageSection() {

  const parents = {
    bride: ["Teofilo Diaz Jr.", "Virginia Diaz"],
    groom: ["Leonorito Vinuya Jr.", "Jolinda Vinuya"],
  };

  const principalSponsors = [
    ["Ptr. Fernando Furagganan", "Ma. Divina Furagganan"],
    ["Ptr. Lino Valeriano", "Angela Valeriano"],
    ["Mark Lin", "Daniela Suan-Lin"],
    ["", "Imelda Muego"],
    ["", "Imelda Losabio"],
  ];
  
  const secondarySponsors = [
    { role: "Candle", names: ["Jayvee Diaz", "Coleen Diaz"] },
    { role: "Veil", names: ["Joenie Vinuya", "Joyie Vinuya"] },
    { role: "Cord", names: ["James Muego", "Dithzel Muego"] },
  ];
  
  const weddingParty = {
    bestMan: ["Jofel Benaires"],
    maidOfHonor: ["Nerissa Abian"],
    groomsmen: ["Judel Muego", "Christian Angelo Valeriano", "John Andrew Muego", "Jezreel Furagganan", "Jehezekel Baltazar", "Janperson Vinuya", "Jayco Diaz"],
    bridesmaids: ["Athena David", "Golda Mirr Sagun", "Arielle Faith Mamangon", "Sharmaine Joy Baquiran", "Faithful Joy Muego", "Maynel Grace Brenio", "Patricia Parungao"],
  };

  const juniorParty = [
    { role: "Bible Bearer", names: ["Ryan Azryel Capricho"] },
    { role: "Ring Bearer", names: ["Noah Adriel Furagganan"] },
    { role: "Coin Bearer", names: ["Darwin Adrielle Junio"] },
  ];

  const flowerGirls = ["Gianna Godin", "Gimelle Godin"];


  return (
    <section id="entourage" className="bg-background text-foreground py-20 md:py-24">
      <div className="container mx-auto">
        <AnimatedScrollWrapper className="text-center mb-12">
          <HeartHandshake className="mx-auto h-16 w-16 text-accent mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">The Wedding Party</h2>
          <p className="text-lg text-muted-foreground">With love and gratitude to our beloved entourage.</p>
           <p className="text-md text-muted-foreground mt-4">Officiating Pastor: Rev. Vicente Muego</p>
        </AnimatedScrollWrapper>

        {/* Parents */}
        <AnimatedScrollWrapper delay="delay-150" className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <RoleGroup title="Parents of the Bride" people={parents.bride} />
            <RoleGroup title="Parents of the Groom" people={parents.groom} />
          </div>
        </AnimatedScrollWrapper>
        
        {/* Principal Sponsors */}
        <AnimatedScrollWrapper delay="delay-200" className="mb-12">
            <h3 className={cn("text-3xl text-center mb-6 text-primary", playfairDisplay.className)}>Ninongs & Ninangs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 max-w-4xl mx-auto text-muted-foreground text-center">
                {principalSponsors.flat().map((name, index) => (
                    <p key={index}>{name}</p>
                ))}
            </div>
        </AnimatedScrollWrapper>

         {/* Secondary Sponsors */}
        <AnimatedScrollWrapper delay="delay-250" className="mb-12">
          <h3 className={cn("text-3xl text-center mb-6 text-primary", playfairDisplay.className)}>Secondary Sponsors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {secondarySponsors.map((sponsor, index) => (
                <div key={index} className="text-center">
                    <h4 className={cn("text-2xl mb-2 text-primary/90", playfairDisplay.className)}>{sponsor.role}</h4>
                    <div className="text-muted-foreground space-y-1">
                        {sponsor.names.map((name, i) => <p key={i}>{name}</p>)}
                    </div>
                </div>
            ))}
          </div>
        </AnimatedScrollWrapper>

        {/* Best Man & Maid of Honor */}
        <AnimatedScrollWrapper delay="delay-300" className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <RoleGroup title="Best Man" people={weddingParty.bestMan} />
            <RoleGroup title="Maid of Honor" people={weddingParty.maidOfHonor} />
          </div>
        </AnimatedScrollWrapper>

        {/* Groomsmen & Bridesmaids */}
        <AnimatedScrollWrapper delay="delay-350" className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 max-w-5xl mx-auto">
                <RoleGroup title="Groomsmen" people={weddingParty.groomsmen} />
                <RoleGroup title="Bridesmaids" people={weddingParty.bridesmaids} />
            </div>
        </AnimatedScrollWrapper>

        {/* Junior Party */}
        <AnimatedScrollWrapper delay="delay-400" className="mb-12">
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {juniorParty.map((role, index) => (
                    <RoleGroup key={index} title={role.role} people={role.names} titleClassName="text-2xl" />
                ))}
            </div>
        </AnimatedScrollWrapper>

        {/* Flower Girl */}
        <AnimatedScrollWrapper delay="delay-450" className="mb-12">
          <RoleGroup title="Flower Girl" people={flowerGirls} titleClassName="text-3xl"/>
        </AnimatedScrollWrapper>
      </div>
    </section>
  );
}
