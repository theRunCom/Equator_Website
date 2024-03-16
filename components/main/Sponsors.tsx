import React from "react";
import SponsorText from "../sub/SponsorText";

const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="flex flex-col items-center justify-center gap-2 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SponsorText />
    </section>
  );
};

export default Sponsors;
