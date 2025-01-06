import AnimatedCursor from "react-animated-cursor";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Logo from "./layouts/logo";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Router>
        <Logo />
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
