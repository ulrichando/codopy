import { useEffect, useRef, useState } from "react";
import "../components/draggablescroll.css";

import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";

function WorkPage() {
  const [isDown, setIsDown] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTopState, setScrollTopState] = useState<number | null>(0);
  const [mouseMoved, setMouseMoved] = useState(0);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const itemsContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleMouseDown(e: React.MouseEvent | React.TouchEvent) {
    setIsDown(true);
    if (itemsContainer.current) {
      const pageY = "touches" in e ? e.touches[0].pageY : e.pageY;
      setStartY(pageY - itemsContainer.current.offsetTop);
      setScrollTopState(itemsContainer.current.scrollTop);
      setMouseMoved(0);
    }
  }

  function handleMouseMove(e: React.MouseEvent | React.TouchEvent) {
    if (!isDown || !itemsContainer.current) return;
    const currentY = "touches" in e ? e.touches[0].pageY : e.pageY;
    const currentMousePositionInsideContainer =
      currentY - itemsContainer.current.offsetTop;
    setMouseMoved(currentMousePositionInsideContainer - startY);
  }

  function handleMouseUp() {
    setIsDown(false);
  }

  useEffect(() => {
    if (itemsContainer.current && scrollTopState !== null) {
      itemsContainer.current.scrollTop = scrollTopState - mouseMoved;
    }
  }, [mouseMoved, scrollTopState]);

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element && itemsContainer.current) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  const menu = [
    { name: "Frontend", href: "#frontend", id: "section-frontend" },
    { name: "Backend", href: "#backend", id: "section-backend" },
    { name: "Database", href: "#database", id: "section-database" },
    { name: "Cloud", href: "#cloud", id: "section-cloud" },
    { name: "Server", href: "#server", id: "section-server" },
    { name: "Security", href: "#security", id: "section-security" },
  ];

  return (
    <div
      className="relative h-screen w-screen overflow-hidden"
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchEnd={handleMouseUp}
    >
      <div className="relative w-full h-full">
        <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute flex flex-col space-y-2 top-1/3 left-full translate-x-0">
            {menu.map((item) => (
              <div key={item.id} className="flex flex-col">
                <a
                  href={item.href}
                  className="text-sm md:text-1xl font-medium px-4 py-2"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute left-1/3 top-1/4 transform -translate-y-full -translate-x-1/2">
          <div className="top-20 left-10">
            <h1 className="text-4xl md:text-8xl font-bold">Work.</h1>
            <div className="flex">
              <div className="line h-2 w-10 m-6"></div>
              <p className="mt-4 text-sm md:text-1xl font-medium">
                My projects and <br />
                experience Explore and <br />
                discover
              </p>
            </div>
          </div>
        </div>

        <div
          className={`MainContainer absolute ${
            isMobile ? "bottom-4 left-1/2 -translate-x-1/2" : "left-[25%]"
          } `}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
        >
          <div
            ref={itemsContainer}
            className={`ItemsContainer ${
              isMobile
                ? "relative max-h-[40vh] overflow-y-auto"
                : "fixed right-[25%] top-1/2 transform translate-x-1/2 -translate-y-1/2"
            } `}
          >
            <div className="table">
              <div className="item">
                {[
                  {
                    img: img1,
                    title: "Frontend",
                    num: "1",
                    id: "section-frontend",
                  },
                  {
                    img: img2,
                    title: "Backend",
                    num: "2",
                    id: "section-backend",
                  },
                  {
                    img: img3,
                    title: "Database",
                    num: "3",
                    id: "section-database",
                  },
                  {
                    img: img4,
                    title: "Cloud",
                    num: "4",
                    id: "section-cloud",
                  },
                  {
                    img: img5,
                    title: "Server",
                    num: "5",
                    id: "section-server",
                  },
                  {
                    img: img6,
                    title: "Security",
                    num: "6",
                    id: "section-security",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    id={item.id}
                    className="flex h-[100px] md:h-[200px] w-[150px] md:w-[600px] border overflow-hidden shadow-md"
                  >
                    {index % 2 === 0 ? (
                      <>
                        <div className="scroller w-[75px] md:w-[300px] h-full flex items-end pb-4 px-4">
                          <div className="flex justify-between items-baseline w-full">
                            <p className="scroller-1 text-left text-xs md:text-lg">
                              {item.title}
                            </p>
                            <p className="scroller-1 text-right text-2xl md:text-8xl ml-2">
                              {item.num}
                            </p>
                          </div>
                        </div>
                        <div className="w-[75px] md:w-[300px] h-full">
                          <img
                            src={item.img}
                            alt="Card Image"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-[75px] md:w-[300px] h-full">
                          <img
                            src={item.img}
                            alt="Card Image"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="scroller w-[75px] md:w-[300px] h-full flex items-end pb-4 px-4">
                          <div className="flex justify-between items-baseline w-full">
                            <p className="scroller-1 text-left text-xs md:text-lg">
                              {item.title}
                            </p>
                            <p className="scroller-1 text-right text-2xl md:text-8xl ml-2">
                              {item.num}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkPage;
