import { NavLink } from "react-router-dom";
import myIcon1 from "../../assets/images/1.svg";
import myIcon2 from "../../assets/images/2.svg";
import myIcon3 from "../../assets/images/3.svg";
import myIcon4 from "../../assets/images/4.svg";
import "../../App.css";

const navFooter = [
  { name: "About", to: "/about" },
  { name: "Hello", to: "/" },
  { name: "Work", to: "/work" },
];

function Footer() {
  return (
    <div>
      <footer className="fixed flex justify-between items-center bottom-0 w-full py-10 z-50">
        <div className="flex justify-center items-center">
          <div className="absolute flex justify-center items-center gap-4 transform -translate-x-1/2 left-1/2">
            {navFooter.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `px-4 py-2 font-medium text-xl -mx-2 ${
                    isActive ? "active-underline" : "hover-underline"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="absolute flex gap-2 right-0 py-2 px-10 font-medium">
            {[
              {
                icon: myIcon1,
                alt: "github",
                to: "https://github.com/yourusername",
              },
              {
                icon: myIcon2,
                alt: "twitter",
                to: "https://instagram.com/yourusername",
              },
              {
                icon: myIcon3,
                alt: "linkedin",
                to: "https://linkedin.com/in/yourusername",
              },
              {
                icon: myIcon4,
                alt: "instagram",
                to: "https://twitter.com/yourusername",
              },
            ].map((social) => (
              <a
                key={social.alt}
                href={social.to}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={social.icon} alt={social.alt} />
              </a>
            ))}
          </div>
          <div className="absolute flex left-0 gap-4 py-2 px-10">
            <a>
              <p className="font-medium text-xl">Ulrich Ando</p>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
