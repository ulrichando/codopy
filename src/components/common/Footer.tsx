import { NavLink, Link } from "react-router-dom";
import "../../styles/Footer.css";

import myIcon1 from "../../assets/images/1.svg";
import myIcon2 from "../../assets/images/2.svg";
import myIcon3 from "../../assets/images/3.svg";
import myIcon4 from "../../assets/images/4.svg";

const navFooter = [
  { name: "About", to: "/about" },
  { name: "Hello", to: "/" },
  { name: "Work", to: "/work" },
];

const Footer = () => {
  return (
    <div>
      <footer className="container-footer">
        <div className="container-footer-menu">
          {navFooter.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className="px-4 py-2 font-semibold text-gray-900 -mx-2"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="container-footer-social">
          {[
            {
              icon: myIcon1,
              alt: "github",
              to: "https://github.com/yourusername",
            },
            {
              icon: myIcon2,
              alt: "twitter",
              to: "https://twitter.com/yourusername",
            },
            {
              icon: myIcon3,
              alt: "linkedin",
              to: "https://linkedin.com/in/yourusername",
            },
            {
              icon: myIcon4,
              alt: "instagram",
              to: "https://instagram.com/yourusername",
            },
          ].map((social) => (
            <Link key={social.alt} to={social.to}>
              <img src={social.icon} alt={social.alt} />
            </Link>
          ))}
        </div>
        <div className="container-footer-name">
          <p>Ulrich Ando</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
