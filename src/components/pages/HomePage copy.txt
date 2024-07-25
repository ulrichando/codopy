// HomePage.tsx
import React, { useRef } from "react";
import Sections from "../common/Sections";
import Footer from "../common/Footer";
import Header from "../common/Header";

const HomePage = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const helloRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);

  const sectionNames = ["About", "Hello", "Work"];

  const scrollToRef = (refName: string) => {
    let ref: React.RefObject<HTMLDivElement>;
    switch (refName) {
      case "About":
        ref = aboutRef;
        break;
      case "Hello":
        ref = helloRef;
        break;
      case "Work":
        ref = workRef;
        break;
      default:
        return;
    }

    if (ref && ref.current) {
      const wrapper = document.querySelector(".wrapper") as HTMLDivElement;
      const sectionLeft = ref.current.offsetLeft;
      wrapper.scrollLeft = sectionLeft;
    }
  };

  return (
    <div>
      <Header />
      <Sections aboutRef={aboutRef} helloRef={helloRef} workRef={workRef} />
      <Footer sectionNames={sectionNames} scrollToRef={scrollToRef} />
    </div>
  );
};

export default HomePage;
