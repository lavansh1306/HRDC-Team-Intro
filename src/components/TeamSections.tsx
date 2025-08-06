import { useEffect, useState } from "react";
import TeamCarousel from "./TeamCarousel";
import creative1 from "@/assets/creative-1.jpg";
import tech1 from "@/assets/tech-1.jpg";
import corporate1 from "@/assets/corporate-1.jpg";
import teamLead1 from "@/assets/team-lead-1.jpg";
import teamLead2 from "@/assets/team-lead-2.jpg";
import teamLead3 from "@/assets/team-lead-3.jpg";

const creativeSquad = [
  {
    id: 1,
    image: creative1,
    name: "Emma Watson",
    role: "Lead UI/UX Designer"
  },
  {
    id: 2,
    image: teamLead2,
    name: "Jordan Blake",
    role: "Creative Director"
  },

];

const technicalNinjas = [
  {
    id: 1,
    image: tech1,
    name: "Marcus Johnson",
    role: "Senior Full-Stack Developer"
  },
  {
    id: 2,
    image: teamLead3,
    name: "Elena Rodriguez",
    role: "Platform Engineer"
  },

];

const corporateGurus = [
  {
    id: 1,
    image: corporate1,
    name: "Michael Thompson",
    role: "Head of Strategy"
  },
  {
    id: 2,
    image: teamLead1,
    name: "Priya Sharma",
    role: "Business Development"
  },

];

const TeamSections = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('team-sections');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="team-sections" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet our{" "}
            <span className="text-primary">Core Teams</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Each team brings unique expertise and passion to create the best developer 
            experience. Together, we're building the future of coding challenges and community.
          </p>
        </div>

        {/* Team Carousels */}
        <div className="space-y-16">
          <TeamCarousel
            title="Creative Lead's"
            members={creativeSquad}
            isVisible={isVisible}
          />
          
          <TeamCarousel
            title="Technical Lead's"
            members={technicalNinjas}
            isVisible={isVisible}
          />
          
          <TeamCarousel
            title="Corporate Lead's"
            members={corporateGurus}
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSections;
