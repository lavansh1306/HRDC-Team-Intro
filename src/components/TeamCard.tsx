import { useState } from "react";
import { Button } from "@/components/ui/button";

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
  delay?: number;
  className?: string;
}

const TeamCard = ({ image, name, role, delay = 0, className = "" }: TeamCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className={`team-card team-card-glow p-6 text-center group ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Profile Image */}
      <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full ring-4 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse"></div>
        )}
        <img
          src={image}
          alt={`${name} - ${role}`}
          className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Name */}
      <h3 className="font-montserrat text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {name}
      </h3>

      {/* Role */}
      <p className="font-inter text-muted-foreground mb-4 text-sm font-medium">
        {role}
      </p>

      {/* Connect Button - Appears on Hover */}
      <Button className="btn-connect" size="sm">
        Connect
      </Button>
    </div>
  );
};

export default TeamCard;