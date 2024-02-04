import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import "../../App.css";

const navigation = [
  { name: "Projects", to: "/project" },
  { name: "About", to: "/about" },
  { name: "Hello", to: "/home" },
  { name: "Get in touch", to: "/contact" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [blurEffect, setBlurEffect] = useState(false);

  useEffect(() => {
    // Update blurEffect after the mobileMenuOpen state changes
    setBlurEffect(mobileMenuOpen);
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className={`bg-white ${blurEffect ? "overflow-hidden" : ""}`}>
      <div
        className={`fixed inset-0  z-50  ${
          blurEffect ? "backdrop-blur-md backdrop-filter" : ""
        }`}
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 ${
          mobileMenuOpen ? "menu-transition" : ""
        }`}
      >
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="#" alt="" />
            </Link>
          </div>
          <div className="flex lg">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                setBlurEffect(!blurEffect); // Toggle the blur effect
              }}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3BottomRightIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg"
          open={mobileMenuOpen}
          onClose={closeMobileMenu}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#000000e2]  px-6 py-6 sm:max-w-2xl sm:ring-1 sm:ring-gray-900/10 backdrop-blur-md backdrop-filter ">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="-mx-3 block rounded-lg px-3 py-10 text-6xl gab-10 font-semibold leading-7 text-white  tracking-wide space-y-11 "
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6"></div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}
