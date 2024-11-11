import AnimatedCursor from "react-animated-cursor";
import Header from "./layouts/Header";
import Logo from "./layouts/logo";
import DarkmodeButton from "./components/ui/DarkmodeButton";
import Footer from "./components/Footer";
import "./App.scss";
import AnimatedRoutes from "./utils/AnimatedRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { useState } from "react";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Router>
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        <DarkmodeButton />
        <Logo />
        <AnimatedRoutes />
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
      <SpeedInsights />
      <Analytics />
    </>
  );
};

export default App;
