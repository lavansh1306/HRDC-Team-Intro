import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TeamCard from "./TeamCard";

interface TeamMember {
  id: number;
  image: string;
  name: string;
  role: string;
}

interface TeamCarouselProps {
  title: string;
  members: TeamMember[];
  isVisible: boolean;
}

const TeamCarousel = ({ title, members, isVisible }: TeamCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const itemsPerView = 3;
  const maxIndex = Math.max(0, members.length - itemsPerView);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const newIndex = Math.max(0, Math.min(index, maxIndex));
      setCurrentIndex(newIndex);
      
      const cardWidth = carouselRef.current.offsetWidth / itemsPerView;
      carouselRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const goToPrevious = () => {
    scrollToIndex(currentIndex - 1);
  };

  const goToNext = () => {
    scrollToIndex(currentIndex + 1);
  };

  return (
    <div className={`mb-20 transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-foreground">
          {title}
        </h3>
        
        {/* Navigation Buttons */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="scroll-indicator"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            className="scroll-indicator"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="carousel-container">
        <div 
          ref={carouselRef}
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
          }}
        >
          {members.map((member, index) => (
            <div 
              key={member.id} 
              className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3"
            >
              <TeamCard
                image={member.image}
                name={member.name}
                role={member.role}
                delay={index * 100}
                className={isVisible ? 'animate-fade-in-scale' : ''}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary w-6' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamCarousel;