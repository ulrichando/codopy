// import AnimatedCursor from "react-animated-cursor";
// import Header from "./layouts/Header";
// import Logo from "./layouts/logo";
// import DarkmodeButton from "./components/ui/DarkmodeButton";
// import Footer from "./components/Footer";
// import "./App.scss";
// import AnimatedRoutes from "./utils/AnimatedRoutes";
// import { BrowserRouter as Router } from "react-router-dom";
// import { SpeedInsights } from "@vercel/speed-insights/react";

// function App() {
//   return (
//     <div className="App ">
//       <Router>
//         <Header />

//         <DarkmodeButton />
//         <Logo />
//         <AnimatedRoutes />
//         <AnimatedCursor
//           innerSize={10}
//           outerSize={40}
//           innerScale={1}
//           outerScale={2}
//           outerAlpha={0}
//           innerStyle={{
//             backgroundColor: "var(--cursor-color)",
//           }}
//           outerStyle={{
//             border: "3px solid var(--cursor-color)",
//           }}
//         />
//         <Footer />
//       </Router>
//       <SpeedInsights />
//     </div>
//   );
// }

// export default App;

// src/App.tsx
import React from "react";
import SweepNavigation from "./pages/SweepNavigation";

const App: React.FC = () => {
  return (
    <div>
      {/* Add a parent container */}
      <SweepNavigation />
    </div>
  );
};

export default App;
