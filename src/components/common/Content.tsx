import img1 from "../assets/images/Eclipse1.svg";
import img2 from "../assets/images/Eclipse2.svg";
import img3 from "../assets/images/circle.svg";

import "../App.css";

const Content = () => {
  return (
    <div>
      <div className="middle-right">
        <img src={img1} alt="exlipse" />
      </div>
      <div className="middle-center">
        <img src={img2} alt="exlipse" />
      </div>
      <div className="middle-left">
        <img src={img3} alt="exlipse" />
      </div>
    </div>
  );
};

export default Content;
