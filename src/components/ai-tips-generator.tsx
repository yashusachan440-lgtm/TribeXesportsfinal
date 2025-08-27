
'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getAITips } from '@/app/actions';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Wand2 } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

const FormSchema = z.object({
  tournamentName: z.string({ required_error: 'Please select a tournament.' }),
});

type FormValues = z.infer<typeof FormSchema>;

const tournaments = [
  'Tribex Grand Opening',
  'Pro Series Qualifiers',
  'Community Cup',
  'Ranked Warriors Challenge',
  'Clash Squad Masters',
];

export default function AITipsGenerator() {
  const { toast } = useToast();
  const [generatedTips, setGeneratedTips] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setGeneratedTips(null);
    const result = await getAITips(data);
    setIsLoading(false);

    if (result.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.error,
      });
    } else if (result.data) {
      setGeneratedTips(result.data.tips);
    }
  };

  return (
    <Card className="bg-card border-primary/20 shadow-lg">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
            <Wand2 className="text-primary h-8 w-8" />
            <CardTitle className="text-3xl font-bold text-primary font-headline">AI Coach</CardTitle>
        </div>
        <CardDescription>Get instant, AI-powered strategies to dominate any tournament.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-lg mx-auto">
            <FormField
              control={form.control}
              name="tournamentName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Tournament</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a tournament to get tips for..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {tournaments.map((tournament) => (
                        <SelectItem key={tournament} value={tournament}>
                          {tournament}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} size="lg" className="w-full bg-primary hover:bg-primary/90 font-bold">
              {isLoading ? 'Generating...' : 'Get Pro Tips'}
            </Button>
          </form>
        </Form>
        <div className="mt-8 max-w-3xl mx-auto">
        {isLoading && (
          <div className="mt-6 space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
             <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        )}
        {generatedTips && (
          <Card className="mt-6 bg-background/50 border-primary/50 max-h-60 overflow-y-auto">
            <CardHeader>
                <CardTitle className="font-headline text-primary">Your Custom Strategy</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="whitespace-pre-wrap text-sm text-foreground/80">{generatedTips}</p>
            </CardContent>
          </Card>
        )}
        </div>
      </CardContent>
    </Card>
  );
}
