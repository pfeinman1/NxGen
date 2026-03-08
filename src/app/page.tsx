import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero";

import Thesis from "@/components/Thesis";
import FlagshipEvent from "@/components/FlagshipEvent";
import WingsWheelsWater from "@/components/WingsWheelsWater";
import Pillars from "@/components/Pillars";
import WhoWeAre from "@/components/WhoWeAre";
import Destinations from "@/components/Destinations";

import WhatYouGet from "@/components/WhatYouGet";
import Process from "@/components/Process";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black cursor-none md:cursor-none">
      <CustomCursor />
      <Navigation />
      <Hero />
      <Thesis />
      <FlagshipEvent />
      <WingsWheelsWater />
      <Pillars />
      <WhoWeAre />
      <Destinations />
      <WhatYouGet />
      <Process />
      <ApplicationForm />
      <Footer />
    </main>
  );
}
