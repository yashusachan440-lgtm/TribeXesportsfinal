
'use server';

import { generateTournamentTips, type TournamentTipsInput } from '@/ai/flows/tournament-tips';

export async function getAITips(input: TournamentTipsInput) {
  try {
    const result = await generateTournamentTips(input);
    return { data: result, error: null };
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { data: null, error: `Failed to generate tips: ${errorMessage}` };
  }
}
