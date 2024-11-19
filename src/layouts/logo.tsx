// import { Link } from "react-router-dom";
// import "../App.scss";

// const Logo: React.FC = () => {
//   return (
//     <div className="relative top-10 justify-center  ">
//       <Link to="/" aria-label="Go to homepage">
//         <div id="logo">
//           <svg
//             id="Layer_1"
//             data-name="Layer 1"
//             xmlns="http://www.w3.org/2000/svg"
//             version="1.1"
//             viewBox="0 0 171 198"
//           >
//             <path
//               className="cls-1"
//               d="M153.5,50c0,2.64-.58,5.15-1.62,7.41-2.8,6.1-8.97,10.34-16.13,10.34-9.8,0-17.75-7.95-17.75-17.75,0-7.16,4.24-13.33,10.34-16.13,2.26-1.04,4.77-1.62,7.41-1.62,9.8,0,17.75,7.95,17.75,17.75Z"
//             />
//             <path
//               className="cls-1"
//               d="M141.24,145.99c-12.97,12.83-30.81,20.76-50.49,20.76-39.63,0-71.75-32.12-71.75-71.75l-.5-71.75h45v45s.5,19.49.5,26.75c0,14.77,11.98,26.75,26.75,26.75,7.26,0,13.84-2.9,18.65-7.6l8.1,8.1,23.74,23.74Z"
//             />
//           </svg>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default Logo;

import { Link } from "react-router-dom";
import "../App.scss";

const Logo: React.FC = () => {
  return (
    <div className="absolute flex justify-center pt-10 z-50">
      <Link to="/">
        <div id="logo">
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 171 198"
          >
            <path
              className="cls-1"
              d="M153.5,50c0,2.64-.58,5.15-1.62,7.41-2.8,6.1-8.97,10.34-16.13,10.34-9.8,0-17.75-7.95-17.75-17.75,0-7.16,4.24-13.33,10.34-16.13,2.26-1.04,4.77-1.62,7.41-1.62,9.8,0,17.75,7.95,17.75,17.75Z"
            />
            <path
              className="cls-1"
              d="M141.24,145.99c-12.97,12.83-30.81,20.76-50.49,20.76-39.63,0-71.75-32.12-71.75-71.75l-.5-71.75h45v45s.5,19.49.5,26.75c0,14.77,11.98,26.75,26.75,26.75,7.26,0,13.84-2.9,18.65-7.6l8.1,8.1,23.74,23.74Z"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
