import HeroSection from "@/components/HeroSection";
import CoreTeamGrid from "@/components/CoreTeamGrid";
import TeamSections from "@/components/TeamSections";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <CoreTeamGrid />
      <TeamSections />
    </div>
  );
};

export default Index;
