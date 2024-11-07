import SweepNavigation from "../pages/SweepNavigation";
import { PageProps } from "../pages/SweepNavigation";
import Homepage from "../pages/Homepage";
import WorkPage from "../pages/WorkPage";
import AboutPage from "../pages/AboutPage";
import "../App.scss";

const Footer: React.FC = () => {
  const navFooter = [
    { name: "About", to: "/about" },
    { name: "Hello", to: "/" },
    { name: "Work", to: "/work" },
  ];

  const pages: Array<PageProps> = [
    { content: <AboutPage /> },
    { content: <Homepage /> },
    { content: <WorkPage /> },
  ];

  return (
    <section>
      <footer className="fixed flex justify-between items-center bottom-0 w-full py-10 z-50">
        <div className="flex justify-center items-center">
          <div className="absolute flex justify-center items-center gap-4 transform -translate-x-1/2 left-1/2">
            {navFooter.map((item) => (
              <button
                key={item.name}
                className="px-4 py-2 font-medium text-sm -mx-2 md:text-xl menuUnderline hover-underline"
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="absolute gap-2 right-0 py-2 px-10 font-medium hidden md:block">
            {/* Social media links */}
          </div>
          <div className="absolute flex left-0 gap-4 py-2 px-10">
            <span className="font-medium text-xl hidden md:block">
              Ulrich Ando
            </span>
          </div>
        </div>
      </footer>
      <SweepNavigation pages={pages} />
    </section>
  );
};

export default Footer;
