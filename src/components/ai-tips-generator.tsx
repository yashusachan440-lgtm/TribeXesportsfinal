
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
  'FFX Grand Opening',
  'Pro Series Qualifiers',
  'Community Cup',
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
    <Card className="bg-transparent border-primary/20 h-full">
      <CardHeader>
        <div className="flex items-center gap-3">
            <Wand2 className="text-primary h-8 w-8" />
            <div>
                <CardTitle className="text-2xl font-bold text-primary font-headline">AI Coach</CardTitle>
                <CardDescription>Get AI-powered tips for any tournament.</CardDescription>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
            <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90">
              {isLoading ? 'Generating...' : 'Get Pro Tips'}
            </Button>
          </form>
        </Form>
        {isLoading && (
          <div className="mt-6 space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        )}
        {generatedTips && (
          <Card className="mt-6 bg-background/50 border-primary/50 max-h-48 overflow-y-auto">
            <CardHeader>
                <CardTitle className="font-headline">Your Custom Strategy</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="whitespace-pre-wrap text-sm text-foreground/80">{generatedTips}</p>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}
