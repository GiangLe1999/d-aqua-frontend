"use client";

import Facilities from "@/components/pages/home-page/facilities";
import Galleries from "@/components/pages/home-page/galleries";
import HeroBanner from "@/components/pages/home-page/hero-banner";
import Location from "@/components/pages/home-page/location";
import ProjectOverview from "@/components/pages/home-page/project-overview";
import Reasons from "@/components/pages/home-page/reasons";
import Strengths from "@/components/pages/home-page/strengths";
import Ultilities from "@/components/pages/home-page/ultilities";
import { FullPage, Slide } from "react-full-page";

export default function Home() {
  return (
    <FullPage>
      <Slide>
        <HeroBanner />
      </Slide>
      <Slide>
        <ProjectOverview />
      </Slide>
      <Slide>
        <Location />
      </Slide>
      <Slide>
        <Ultilities />
      </Slide>
      <Slide>
        <Facilities />
      </Slide>
      <Slide>
        <Strengths />
      </Slide>
      <Slide>
        <Reasons />
      </Slide>
      <Slide>
        <Galleries />
      </Slide>
    </FullPage>
  );
}
