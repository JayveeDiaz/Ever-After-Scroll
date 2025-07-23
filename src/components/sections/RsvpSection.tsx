'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { rsvpSchema, type RsvpFormData } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedScrollWrapper } from '@/components/AnimatedScrollWrapper';
import { ThankYouNoteGenerator } from '@/components/ThankYouNoteGenerator';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send } from 'lucide-react';

export function RsvpSection() {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');
  const [submittedData, setSubmittedData] = useState<RsvpFormData | null>(null);
  const { toast } = useToast();

  const form = useForm<RsvpFormData>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      guestName: '',
      attendanceStatus: undefined,
      numberOfGuests: 1,
      comments: '',
    },
  });

  const attendanceValue = form.watch('attendanceStatus');

  const onSubmit: SubmitHandler<RsvpFormData> = async (data) => {
    setSubmissionStatus('submitting');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For now, we'll just show the success state without saving to a database.
    setSubmittedData(data);
    setSubmissionStatus('submitted');
    toast({
      title: "RSVP Received!",
      description: `Thank you, ${data.guestName}! Your response has been recorded.`,
    });
    form.reset();
  };

  if (submissionStatus === 'submitted' && submittedData) {
    return (
      <section id="rsvp" className="bg-secondary text-foreground">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <AnimatedScrollWrapper className="w-full max-w-lg text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Thank You, {submittedData.guestName}!</h2>
            <p className="text-lg mb-8">Your RSVP has been successfully submitted.</p>
          </AnimatedScrollWrapper>
          <ThankYouNoteGenerator
            guestName={submittedData.guestName}
            attendanceStatus={submittedData.attendanceStatus as 'yes' | 'no'}
          />
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="bg-secondary text-foreground">
      <div className="container mx-auto flex flex-col items-center">
        <AnimatedScrollWrapper className="w-full max-w-lg">
          <Card className="shadow-xl bg-card border-primary/20">
            <CardHeader className="text-center">
              <Send className="mx-auto h-12 w-12 text-accent mb-4" />
              <CardTitle className="text-3xl md:text-4xl text-primary font-bold">Confirm Your Attendance</CardTitle>
              <CardDescription className="text-md">We can't wait to celebrate with you! Please let us know if you'll be joining us by September 15th, 2025.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="guestName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} className="bg-background"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="attendanceStatus"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Will you attend?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1 md:flex-row md:space-y-0 md:space-x-4"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="yes" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">
                                Joyfully Accepts
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="no" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">
                                Regretfully Declines
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {attendanceValue === 'yes' && (
                     <FormField
                        control={form.control}
                        name="numberOfGuests"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Number of Guests (including yourself)</FormLabel>
                            <FormControl>
                              <Input 
                                type="number" 
                                placeholder="1" 
                                {...field} 
                                onChange={event => field.onChange(+event.target.value)}
                                min="1"
                                className="bg-background"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                  )}

                  <FormField
                    control={form.control}
                    name="comments"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message or Dietary Restrictions (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Any well wishes, song requests, or dietary needs?"
                            className="resize-none bg-background"
                            {...field}
                            rows={4}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={submissionStatus === 'submitting'}
                  >
                    {submissionStatus === 'submitting' ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="mr-2 h-4 w-4" />
                    )}
                    {submissionStatus === 'submitting' ? 'Submitting...' : 'Send RSVP'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </AnimatedScrollWrapper>
      </div>
    </section>
  );
}
