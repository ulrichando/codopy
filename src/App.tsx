import AnimatedCursor from "react-animated-cursor";
// import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import "./App.css";
import AnimatedRoutes from "./components/common/AnimatedRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
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
    </div>
  );
}

export default App;
