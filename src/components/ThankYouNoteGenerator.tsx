'use client';

import { useState, useEffect, useCallback } from 'react';
import { generateThankYouNote } from '@/ai/flows/generate-thank-you-note';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2, Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ThankYouNoteGeneratorProps {
  guestName: string;
  attendanceStatus: 'yes' | 'no';
}

export function ThankYouNoteGenerator({ guestName, attendanceStatus }: ThankYouNoteGeneratorProps) {
  const [note, setNote] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const fetchNote = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await generateThankYouNote({ guestName, attendanceStatus });
      setNote(result.thankYouNote);
    } catch (err) {
      console.error("Failed to generate thank you note:", err);
      setError('Failed to generate thank you note. Please try again.');
      toast({
        title: "Error",
        description: "Could not generate thank you note.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [guestName, attendanceStatus, toast]);

  useEffect(() => {
    fetchNote();
  }, [fetchNote]);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(note).then(() => {
      setIsCopied(true);
      toast({
        title: "Copied!",
        description: "Thank you note copied to clipboard.",
      });
      setTimeout(() => setIsCopied(false), 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
      toast({
        title: "Error",
        description: "Failed to copy note.",
        variant: "destructive",
      });
    });
  };

  return (
    <Card className="w-full max-w-lg mt-8 bg-card shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Your Suggested Thank You Note</CardTitle>
        <CardDescription>Here's a personalized thank you note generated for {guestName}.</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading && (
          <div className="flex items-center justify-center min-h-[150px]">
            <Loader2 className="h-8 w-8 animate-spin text-accent" />
            <p className="ml-2 text-muted-foreground">Generating note...</p>
          </div>
        )}
        {error && <p className="text-destructive">{error}</p>}
        {!isLoading && !error && note && (
          <>
            <Textarea
              value={note}
              readOnly
              rows={6}
              className="mb-4 bg-background border-border focus:ring-accent"
              aria-label="Generated thank you note"
            />
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={fetchNote} disabled={isLoading}>
                <Loader2 className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : 'hidden'}`} />
                Regenerate
              </Button>
              <Button onClick={handleCopyToClipboard} disabled={!note || isLoading}>
                {isCopied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                {isCopied ? 'Copied!' : 'Copy Note'}
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
