import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";

interface MapDialogProps {
  venueName: string;
  address: string;
  children: React.ReactNode;
}

export function MapDialog({ venueName, address, children }: MapDialogProps) {
  const mapQuery = encodeURIComponent(`${venueName}, ${address}`);
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${mapQuery}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl h-[80vh] p-0 flex flex-col">
        <DialogHeader className="p-4 border-b">
          <DialogTitle>{venueName}</DialogTitle>
        </DialogHeader>
        <div className="flex-grow">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={embedUrl}>
          </iframe>
        </div>
        <div className="p-4 border-t bg-background">
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full">
                    Get Directions
                </Button>
            </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}
