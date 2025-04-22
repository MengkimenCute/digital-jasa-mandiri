
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const formSchema = z.object({
  websiteType: z.string().min(1, 'Please select a website type'),
  pages: z.coerce.number().min(1, 'Minimum 1 page').max(100, 'Maximum 100 pages'),
  features: z.coerce.number().min(0, 'Cannot be negative').max(20, 'Maximum 20 features'),
  currency: z.enum(['USD', 'IDR']),
});

const basePrice = {
  basic: { USD: 500, IDR: 7500000 },
  ecommerce: { USD: 1500, IDR: 22500000 },
  enterprise: { USD: 3000, IDR: 45000000 },
};

const ProjectCalculator = () => {
  const { toast } = useToast();
  const [isCalculating, setIsCalculating] = useState(false);
  const [totalPrice, setTotalPrice] = useState<{ USD: number | null; IDR: number | null }>({ USD: null, IDR: null });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      websiteType: '',
      pages: 1,
      features: 0,
      currency: 'IDR',
    },
  });

  const calculatePrice = (data: z.infer<typeof formSchema>) => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const baseUSD = basePrice[data.websiteType as keyof typeof basePrice]?.USD || basePrice.basic.USD;
      const baseIDR = basePrice[data.websiteType as keyof typeof basePrice]?.IDR || basePrice.basic.IDR;
      
      const pagesPrice = { USD: data.pages * 100, IDR: data.pages * 1500000 };
      const featuresPrice = { USD: data.features * 200, IDR: data.features * 3000000 };
      
      const totalUSD = baseUSD + pagesPrice.USD + featuresPrice.USD;
      const totalIDR = baseIDR + pagesPrice.IDR + featuresPrice.IDR;
      
      setTotalPrice({ USD: totalUSD, IDR: totalIDR });
      setIsCalculating(false);
      
      const formatter = new Intl.NumberFormat(data.currency === 'IDR' ? 'id-ID' : 'en-US', {
        style: 'currency',
        currency: data.currency,
        maximumFractionDigits: 0,
      });
      
      toast({
        title: "Kalkulasi Selesai",
        description: `Estimasi biaya proyek: ${formatter.format(data.currency === 'IDR' ? totalIDR : totalUSD)}`,
      });
    }, 1500);
  };

  const formatPrice = (price: number | null, currency: string) => {
    if (price === null) return '-';
    return new Intl.NumberFormat(currency === 'IDR' ? 'id-ID' : 'en-US', {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Kalkulator Biaya Proyek</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(calculatePrice)} className="space-y-6">
          <FormField
            control={form.control}
            name="currency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mata Uang</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih mata uang" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="IDR">Rupiah (IDR)</SelectItem>
                    <SelectItem value="USD">Dollar (USD)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="websiteType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Jenis Website</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih jenis website" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="basic">Website Basic</SelectItem>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="enterprise">Enterprise Solution</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pages"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Jumlah Halaman</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    placeholder="Contoh: 5" 
                    {...field}
                    onChange={(e) => field.onChange(e.target.valueAsNumber || 1)}
                  />
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
                <FormLabel>Fitur Tambahan</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    placeholder="Contoh: 3" 
                    {...field}
                    onChange={(e) => field.onChange(e.target.valueAsNumber || 0)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={isCalculating} className="w-full">
            Hitung Biaya
          </Button>
        </form>
      </Form>

      {isCalculating ? (
        <div className="mt-6 space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ) : totalPrice.USD !== null && totalPrice.IDR !== null && (
        <div className="mt-6 p-4 bg-blue-50 rounded-md space-y-2">
          <p className="text-lg font-semibold">Estimasi Biaya:</p>
          <p className="text-xl font-bold text-blue-600">{formatPrice(totalPrice.IDR, 'IDR')}</p>
          <p className="text-sm text-gray-600">{formatPrice(totalPrice.USD, 'USD')}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectCalculator;

