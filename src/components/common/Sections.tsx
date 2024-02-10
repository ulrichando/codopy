import React, { useRef } from "react";
import "../../styles/sections.css";

interface SectionsProps {
  aboutRef: React.RefObject<HTMLDivElement>;
  helloRef: React.RefObject<HTMLDivElement>;
  workRef: React.RefObject<HTMLDivElement>;
}

const Sections: React.FC<SectionsProps> = ({ aboutRef, helloRef, workRef }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    if (wrapperRef.current !== null) {
      wrapperRef.current.scrollLeft = scrollLeft;
    }
  };

  return (
    <div className="wrapper" ref={wrapperRef} onScroll={handleScroll}>
      <div className="divisions">
        <section ref={aboutRef} className="section about">
          Section 1 Content
        </section>
        <section ref={helloRef} className="section hello">
          Section 2 Content
        </section>
        <section ref={workRef} className="section work">
          Section 3 Content
        </section>
      </div>
    </div>
  );
};

export default Sections;
