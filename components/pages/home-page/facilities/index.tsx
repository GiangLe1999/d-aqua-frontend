"use client";

import { useState } from "react";
import FacilitiesRotatingMenu from "./facilites-rotating-menu";
import FacilitiesBackgrounds from "./facilites-backgrounds";

const Facilities = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative h-screen overflow-hidden">
      <FacilitiesRotatingMenu
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />

      <FacilitiesBackgrounds
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
};

export default Facilities;
