import icon1 from "../assets/images/instagram.svg";
import icon2 from "../assets/images/twitter.svg";
import icon3 from "../assets/images/linkedin.svg";
import icon4 from "../assets/images/Github.svg";

const navFooter = [
  { name: "About", href: "#" },
  { name: "Hello", href: "#" },
  { name: "Work", href: "#" },
];

const Footer = () => {
  return (
    <div>
      <footer className="fixed bottom-0 left-0 right-0 flex flex-col text-black p-8 mt-auto [font-family: 'Inter-ExtraBold',Helvetica] font-extrabold text-[14px] tracking-[0] ">
        <div className=" flex  items-center justify-center gap-x-7">
          {navFooter.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`-mx-3 block  px-3 py-2 font-semibold  text-gray-900 hover:bg-gray-50 ${
                item.name === "Hello"
                  ? "hover:border-b-2 border-black -mx-2"
                  : "" // Add this line
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="fixed bottom-0 right-0 flex flex-wrap gap-4 p-8 mt-auto ">
          <img src={icon1} alt="github" />
          <img src={icon2} alt="xTwitter" />
          <img src={icon3} alt="linkdln" />
          <img src={icon4} alt="instagram" />
        </div>
        <div className="fixed bottom-0 left-0 flex flex-wrap  gap-4 p-8 mt-auto  font-semibold text-gray-900">
          <p>Ulrich Ando</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
