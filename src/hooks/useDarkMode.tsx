// import { useState, useEffect } from "react";

// const useDarkMode = (): [boolean, () => void] => {
//   const [darkMode, setDarkMode] = useState(
//     localStorage.getItem("darkmode") === "active"
//   );

//   useEffect(() => {
//     if (darkMode) {
//       document.body.classList.add("darkmode");
//     } else {
//       document.body.classList.remove("darkmode");
//     }
//   }, [darkMode]);

//   const toggleDarkMode = () => {
//     setDarkMode((prevDarkMode) => {
//       const newDarkMode = !prevDarkMode;
//       localStorage.setItem("darkmode", newDarkMode ? "active" : "null");
//       return newDarkMode;
//     });
//   };

//   return [darkMode, toggleDarkMode];
// };

// export default useDarkMode;
import { useState, useEffect } from "react";

const useDarkMode = (): [boolean, () => void] => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkmode") === "active"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkmode");
    } else {
      document.body.classList.remove("darkmode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode;
      localStorage.setItem("darkmode", newDarkMode ? "active" : "null");
      return newDarkMode;
    });
  };

  return [darkMode, toggleDarkMode];
};

export default useDarkMode;
