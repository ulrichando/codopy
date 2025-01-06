import AnimatedCursor from "react-animated-cursor";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import { preloadImages } from "./utils/preloadImages";
import { useEffect } from "react";

const App: React.FC = () => {
  useEffect(() => {
    const imageUrls = [
      "/assets/images/img1.jpg",
      "/assets/images/img2.jpg",
      "/assets/images/img3.jpg",
      "/assets/images/img4.jpg",
      "/assets/images/img5.jpg",
      "/assets/images/img6.jpg",
      "/assets/images/img7.jpg",
      "/assets/images/img8.jpg",
      "/assets/images/img9.jpg",
      "/assets/images/img10.jpg",
      "/assets/images/img11.jpg",
      "/assets/images/mylogo.svg",
      "/assets/images/profile.jpg",
      "/assets/images/Vector.svg",
    ];
    preloadImages(imageUrls);
  }, []);

  return (
    <div className="min-h-screen">
      <Router>
        <AnimatedCursor
          innerSize={10}
          outerSize={40}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          innerStyle={{
            backgroundColor: "var(--cursor-color)",
          }}
          outerStyle={{
            border: "3px solid var(--cursor-color)",
          }}
        />

        <Footer />
      </Router>
    </div>
  );
};

export default App;
