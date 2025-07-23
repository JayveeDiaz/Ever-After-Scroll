import { z } from 'zod';

export const rsvpSchema = z.object({
  guestName: z.string().min(2, { message: "Name must be at least 2 characters." }).max(100),
  attendanceStatus: z.enum(['yes', 'no'], { required_error: "Please select your attendance status." }),
  numberOfGuests: z.coerce.number().min(1, {message: "You must bring at least one guest (yourself)!"}).optional(),
  comments: z.string().max(500, { message: "Comments cannot exceed 500 characters." }).optional(),
}).refine(data => {
  if (data.attendanceStatus === 'yes' && (data.numberOfGuests === undefined || data.numberOfGuests < 1)) {
    return false;
  }
  return true;
}, {
  message: "Please specify the number of guests if you are attending.",
  path: ['numberOfGuests'], // Point error to numberOfGuests field
});

export type RsvpFormData = z.infer<typeof rsvpSchema>;
