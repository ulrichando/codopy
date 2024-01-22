import "../../App.css";
import img1 from "../../assets/images/circle2.svg";
import img2 from "../../assets/images/circle3.svg";
import img3 from "../../assets/images/menuCircle.svg";
import img4 from "../../assets/images/HelloText.svg";

const Content = () => {
  return (
    <div>
      <div className="middle-left">
        <img src={img2} alt="exlipse" />
      </div>
      <div className="middle-right">
        <img src={img1} alt="exlipse" />
      </div>
      <div className="centered-container">
        <div className="centered-content">
          <img src={img3} alt="exlipse" />
        </div>
        <div className="corner">
          <img src={img4} alt="exlipse" />
        </div>
      </div>
    </div>
  );
};

export default Content;
