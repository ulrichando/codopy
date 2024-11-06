import AnimatedCursor from "react-animated-cursor";
import SweepNavigation from "./pages/SweepNavigation";
import Header from "./layouts/Header";
import Logo from "./layouts/logo";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import DarkModeButton from "./components/ui/DarkmodeButton";

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Router>
        <DarkModeButton />
        <Logo />
        <Header />
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
        <SweepNavigation />
      </Router>
    </div>
  );
};

export default App;
