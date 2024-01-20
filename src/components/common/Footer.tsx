import myIcon1 from "../../assets/images/1.svg";
import myIcon2 from "../../assets/images/2.svg";
import myIcon3 from "../../assets/images/3.svg";
import myIcon4 from "../../assets/images/4.svg";
import { Link } from "react-router-dom";
import "../../App.css";

const navFooter = [
  { name: "About", to: "/about" },
  { name: "Hello", to: "/" },
  { name: "Work", to: "/work" },
];

const Footer = () => {
  return (
    <div>
      <footer className="fixed bottom-0 left-0 right-0 flex flex-col text-black p-8 mt-auto [font-family: 'Inter-ExtraBold',Helvetica] font-extrabold text-[14px] tracking-[0] ">
        <div className=" flex  items-center justify-center gap-x-8">
          {navFooter.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className={`-mx-3 block  px-4 py-2 font-semibold  text-gray-900 hover:bg-gray-50 ${
                item.name === "Hello"
                  ? "hover:border-b-2 border-black -mx-2"
                  : "" // Add this line
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="fixed bottom-0 right-0 flex gap-4 p-8 ">
          <Link to="">
            {" "}
            <img src={myIcon1} alt="github" />{" "}
          </Link>
          <Link to="">
            {" "}
            <img src={myIcon2} alt="xTwitter" />{" "}
          </Link>
          <Link to="">
            {" "}
            <img src={myIcon3} alt="linkdln" />{" "}
          </Link>
          <Link to="">
            {" "}
            <img src={myIcon4} alt="instagram" />{" "}
          </Link>
        </div>
        <div className="fixed bottom-0 left-0 flex  gap-4 p-8  font-semibold text-gray-900">
          <p>Ulrich Ando</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
