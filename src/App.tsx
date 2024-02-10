// App.tsx
import AnimatedCursor from "react-animated-cursor";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import "./App.css";
import AnimatedRoutes from "./components/common/AnimatedRoutes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Footer />
      <AnimatedRoutes />
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        // hasBlendMode={true}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
      />
    </Router>
  );
};

export default App;
