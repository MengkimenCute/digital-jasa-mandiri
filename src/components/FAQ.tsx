
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  description?: string;
}

const FAQ = ({ items, title, description }: FAQProps) => {
  const [openItem, setOpenItem] = useState<string | null>("item-0");

  return (
    <div className="w-full max-w-4xl mx-auto">
      {title && (
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
      )}
      {description && (
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          {description}
        </p>
      )}
      <Accordion
        type="single"
        collapsible
        value={openItem || undefined}
        onValueChange={(value) => setOpenItem(value)}
        className="space-y-4"
      >
        {items.map((item, index) => (
          <AccordionItem
            key={`item-${index}`}
            value={`item-${index}`}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white"
          >
            <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-gray-600">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
