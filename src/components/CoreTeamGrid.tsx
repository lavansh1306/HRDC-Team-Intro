import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";
import teamLead1 from "@/assets/team-lead-1.jpg";
import teamLead2 from "@/assets/team-lead-2.jpg";
import teamLead3 from "@/assets/team-lead-3.jpg";
import teamLead4 from "@/assets/team-lead-4.jpg";

const coreTeamMembers = [
  {
    id: 1,
    image: teamLead1,
    name: "Sarah Chen",
    role: "Community Lead"
  },
  {
    id: 2,
    image: teamLead2,
    name: "Alex Rodriguez",
    role: "Technical Director"
  },
  {
    id: 3,
    image: teamLead3,
    name: "David Kim",
    role: "Platform Architect"
  },
  {
    id: 4,
    image: teamLead4,
    name: "Maya Patel",
    role: "Developer Experience"
  }
];

const CoreTeamGrid = () => {
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

    const element = document.getElementById('core-team');
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
    <section id="core-team" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our{" "}
            <span className="text-primary">Core Team</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            The passionate individuals leading our mission to connect and empower 
            developers worldwide through innovative challenges and community building.
          </p>
        </div>

        {/* Core Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {coreTeamMembers.map((member, index) => (
            <TeamCard
              key={member.id}
              image={member.image}
              name={member.name}
              role={member.role}
              delay={index * 100}
              className={`animate-fade-in-scale ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTeamGrid;