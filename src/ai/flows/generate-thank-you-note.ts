
'use server';
/**
 * @fileOverview Generates a personalized thank you note based on the RSVP response.
 *
 * - generateThankYouNote - A function that generates a thank you note.
 * - GenerateThankYouNoteInput - The input type for the generateThankYouNote function.
 * - GenerateThankYouNoteOutput - The return type for the generateThankYouNote function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateThankYouNoteInputSchema = z.object({
  guestName: z.string().describe('The name of the guest who RSVPd.'),
  attendanceStatus: z
    .string()
    .describe(
      'Indicates if the guest will be attending. The value will be "yes" if they are attending, or "no" if they are not.'
    ),
});
export type GenerateThankYouNoteInput = z.infer<typeof GenerateThankYouNoteInputSchema>;

const GenerateThankYouNoteOutputSchema = z.object({
  thankYouNote: z.string().describe('A personalized thank you note for the guest.'),
});
export type GenerateThankYouNoteOutput = z.infer<typeof GenerateThankYouNoteOutputSchema>;

export async function generateThankYouNote(input: GenerateThankYouNoteInput): Promise<GenerateThankYouNoteOutput> {
  return generateThankYouNoteFlow(input);
}

const thankYouNotePrompt = ai.definePrompt({
  name: 'thankYouNotePrompt',
  input: {schema: GenerateThankYouNoteInputSchema},
  output: {schema: GenerateThankYouNoteOutputSchema},
  prompt: `You are a helpful assistant for Julius and Ivy, a couple who are getting married.
Your task is to generate a personalized thank you note for a guest who has just RSVPd to their wedding.
The note should be signed off as from "Julius & Ivy" or imply it's from them.

Guest Details:
- Name: {{{guestName}}}
- Attending: {{{attendanceStatus}}}

Based on whether the guest is attending ("yes" or "no"), please compose an appropriate thank you message.

If 'Attending' is "yes":
- Express heartfelt thanks for their RSVP.
- Mention looking forward to celebrating with them.
- Keep it warm and enthusiastic.

If 'Attending' is "no":
- Express thanks for letting them know.
- Convey understanding and that they will be missed.
- Maintain a polite and gracious tone.

The note should be a single piece of text suitable for the 'thankYouNote' field.`,
});

const generateThankYouNoteFlow = ai.defineFlow(
  {
    name: 'generateThankYouNoteFlow',
    inputSchema: GenerateThankYouNoteInputSchema,
    outputSchema: GenerateThankYouNoteOutputSchema,
  },
  async (input: GenerateThankYouNoteInput) => {
    const {output} = await thankYouNotePrompt(input);
    if (!output) {
      // This case should ideally not happen if the LLM respects the output schema.
      // Adding a fallback or error for robustness.
      console.error('Thank You Note Generation: LLM did not return an output.');
      return { thankYouNote: "We appreciate you letting us know! - Julius & Ivy" };
    }
    return output!;
  }
);
