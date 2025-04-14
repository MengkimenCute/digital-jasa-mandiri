
import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface TestimonialProps {
  name: string;
  company: string;
  text: string;
  rating: number;
  image?: string;
}

const Testimonial = ({ name, company, text, rating, image }: TestimonialProps) => {
  return (
    <Card className="h-full shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
            {image ? (
              <img src={image} alt={name} className="h-full w-full object-cover" />
            ) : (
              <div className="h-full w-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                {name.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-600">{company}</p>
          </div>
        </div>
        
        <div className="flex mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
        
        <p className="text-gray-700 italic">{text}</p>
      </CardContent>
    </Card>
  );
};

export default Testimonial;
