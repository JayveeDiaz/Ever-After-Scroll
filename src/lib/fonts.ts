import { Playfair_Display, Lora, Lato } from 'next/font/google';

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  weight: ['400', '500', '600', '700'], // Added more weights for flexibility
  style: ['normal', 'italic'],
});

export const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['400', '500', '600', '700'], // Added more weights
  style: ['normal', 'italic'],
});

export const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
});
