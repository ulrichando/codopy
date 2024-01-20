import myImage1 from "../assets/Eclipse1.svg";
import myImage2 from "../assets/Eclipse2.svg";
import myImage3 from "../assets/circle.svg";
import "../App.css";

const Content = () => {
  return (
    <div>
      <div className="middle-right">
        <img src={myImage1} alt="exlipse" />
      </div>
      <div className="middle-center">
        <img src={myImage2} alt="exlipse" />
      </div>
      <div className="middle-left">
        <img src={myImage3} alt="exlipse" />
      </div>
    </div>
  );
};

export default Content;
