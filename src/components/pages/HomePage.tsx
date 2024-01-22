import Header from "../../components/common/Header";
import Content from "../../components/common/Content";
import Footer from "../common/Footer";
import AnimatedCursor from "react-animated-cursor";

import "../../App.css";

function HomePage() {
  return (
    <div>
      <Header />
      <AnimatedCursor
        innerSize={8}
        outerSize={50}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
      />
      <Content />
      <Footer />
    </div>
  );
}

export default HomePage;
