import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { Spaceold } from "@/components/sections/Spaceold";
import { Spaces } from "@/components/sections/Spaces";
import { SpaceEditorial } from "@/components/sections/SpaceEditorial";
import { SpacesAlternative } from "@/components/sections/SpacesAlternative";
import { BookCorner } from "@/components/sections/BookCorner";
import { JeepSpotlight } from "@/components/sections/JeepSpotlight";
import { Reviews } from "@/components/sections/Reviews";
import { Menu } from "@/components/sections/Menu";
import { SocialProof } from "@/components/sections/SocialProof";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f5f2eb]">
      <Hero />
      <Story />
      {/* <Spaceold /> */}
      
      {/* <Spaces /> */}
      <SpaceEditorial />
      {/* <SpacesAlternative /> */}
      <BookCorner />
      <Reviews />
      <JeepSpotlight />
      <Menu />
      <SocialProof />
    </main>
  );
}
