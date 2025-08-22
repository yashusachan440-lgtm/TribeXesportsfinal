'use server';

/**
 * @fileOverview Generates tips for Free Fire tournaments based on the selected tournament.
 *
 * - generateTournamentTips - A function that generates tournament tips.
 * - TournamentTipsInput - The input type for the generateTournamentTips function.
 * - TournamentTipsOutput - The return type for the generateTournamentTips function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TournamentTipsInputSchema = z.object({
  tournamentName: z.string().describe('The name of the Free Fire tournament.'),
});

export type TournamentTipsInput = z.infer<typeof TournamentTipsInputSchema>;

const TournamentTipsOutputSchema = z.object({
  tips: z.string().describe('AI-generated tips for the specified tournament.'),
});

export type TournamentTipsOutput = z.infer<typeof TournamentTipsOutputSchema>;

export async function generateTournamentTips(input: TournamentTipsInput): Promise<TournamentTipsOutput> {
  return tournamentTipsFlow(input);
}

const tournamentTipsPrompt = ai.definePrompt({
  name: 'tournamentTipsPrompt',
  input: {schema: TournamentTipsInputSchema},
  output: {schema: TournamentTipsOutputSchema},
  prompt: `You are an expert Free Fire coach. Generate tips that will help players win the following tournament: {{{tournamentName}}}. Be specific and actionable.`,
});

const tournamentTipsFlow = ai.defineFlow(
  {
    name: 'tournamentTipsFlow',
    inputSchema: TournamentTipsInputSchema,
    outputSchema: TournamentTipsOutputSchema,
  },
  async input => {
    const {output} = await tournamentTipsPrompt(input);
    return output!;
  }
);
