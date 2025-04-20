
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Skeleton } from './ui/skeleton';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const formSchema = z.object({
  websiteType: z.string().min(1, 'Please select a website type'),
  pages: z.string().transform(Number).pipe(
    z.number().min(1, 'Minimum 1 page').max(100, 'Maximum 100 pages')
  ),
  features: z.string().transform(Number).pipe(
    z.number().min(0, 'Cannot be negative').max(20, 'Maximum 20 features')
  ),
});

const basePrice = {
  basic: 500,
  ecommerce: 1500,
  enterprise: 3000,
};

const ProjectCalculator = () => {
  const { toast } = useToast();
  const [isCalculating, setIsCalculating] = useState(false);
  const [totalPrice, setTotalPrice] = useState<number | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      websiteType: '',
      pages: '',
      features: '',
    },
  });

  const calculatePrice = (data: z.infer<typeof formSchema>) => {
    setIsCalculating(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      const base = basePrice[data.websiteType as keyof typeof basePrice] || basePrice.basic;
      const pagesPrice = data.pages * 100;
      const featuresPrice = data.features * 200;
      const total = base + pagesPrice + featuresPrice;
      
      setTotalPrice(total);
      setIsCalculating(false);
      
      toast({
        title: "Calculation Complete",
        description: `Estimated project cost: $${total}`,
      });
    }, 1500);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Project Cost Calculator</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(calculatePrice)} className="space-y-6">
          <FormField
            control={form.control}
            name="websiteType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website Type</FormLabel>
                <FormControl>
                  <select
                    {...field}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">Select type...</option>
                    <option value="basic">Basic Website</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="enterprise">Enterprise Solution</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pages"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Pages</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="e.g., 5" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="features"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Custom Features</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="e.g., 3" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={isCalculating}>
            Calculate Cost
          </Button>
        </form>
      </Form>

      {isCalculating ? (
        <div className="mt-6 space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ) : totalPrice && (
        <div className="mt-6 p-4 bg-blue-50 rounded-md">
          <p className="text-lg font-semibold">Estimated Cost:</p>
          <p className="text-3xl font-bold text-blue-600">${totalPrice}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectCalculator;
