
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Copy, 
  Share2 
} from "lucide-react";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from "@/components/ui/tooltip";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

interface SocialShareProps {
  url?: string;
  title?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const SocialShare = ({ 
  url = window.location.href, 
  title = "Lihat layanan TechConsult",
  size = "md",
  className
}: SocialShareProps) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  
  const iconSize = {
    sm: 16,
    md: 20,
    lg: 24
  }[size];
  
  const buttonSize = size === "sm" ? "sm" : "default";
  
  const shareLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "bg-[#1877F2] hover:bg-[#0E65D9] text-white"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: "bg-[#1DA1F2] hover:bg-[#0D8ECE] text-white"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "bg-[#0A66C2] hover:bg-[#084E96] text-white"
    },
    {
      name: "WhatsApp",
      icon: Instagram,
      url: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      color: "bg-[#25D366] hover:bg-[#1CA953] text-white"
    }
  ];
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    toast({
      title: "Tautan disalin!",
      description: "Tautan telah disalin ke clipboard Anda."
    });
  };
  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      copyToClipboard();
    }
  };
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {navigator.share ? (
        <Button 
          onClick={handleShare}
          variant="outline"
          size={buttonSize}
          className="gap-2"
        >
          <Share2 size={iconSize} />
          <span>Bagikan</span>
        </Button>
      ) : (
        <>
          <TooltipProvider>
            {shareLinks.map((social) => (
              <Tooltip key={social.name}>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size={buttonSize}
                    className={`p-0 w-9 h-9 ${social.color}`}
                    onClick={() => window.open(social.url, "_blank")}
                  >
                    <social.icon size={iconSize} />
                    <span className="sr-only">{social.name}</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Bagikan ke {social.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size={buttonSize}
                  className="p-0 w-9 h-9"
                  onClick={copyToClipboard}
                >
                  <Copy size={iconSize} />
                  <span className="sr-only">Salin tautan</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Salin tautan</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </>
      )}
    </div>
  );
};

export default SocialShare;
