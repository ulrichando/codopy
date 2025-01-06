import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "../components/draggablescroll.css";
import { X } from "lucide-react";

import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";
import img9 from "../assets/images/img9.jpg";
import img10 from "../assets/images/img10.jpg";
import img11 from "../assets/images/img11.jpg";

// Extended type for items to include detailed information
interface AboutItem {
  img: string;
  title: string;
  num: string;
  id: string;
  link: string;
  description: string;
  skills: string[];
  experience: string;
}

const aboutItems: AboutItem[] = [
  {
    img: img6,
    title: "Frontend",
    num: "1",
    id: "section-frontend",
    link: "https://github.com/yourusername/frontend-skills",
    description:
      "Specialized in building responsive and interactive user interfaces using modern web technologies.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML5/CSS3"],
    experience:
      "5 years of experience in frontend development with a focus on React ecosystem.",
  },
  {
    img: img7,
    title: "Backend",
    num: "2",
    id: "section-backend",
    link: "https://github.com/yourusername/backend-skills",
    description: "Developing robust server-side applications and APIs.",
    skills: ["Node.js", "Express", "Python", "Django", "RESTful APIs"],
    experience:
      "4 years of backend development experience across multiple frameworks.",
  },
  // Add similar detailed information for other items
  {
    img: img8,
    title: "Database",
    num: "3",
    id: "section-database",
    link: "https://github.com/yourusername/database-skills",
    description: "Database design and optimization specialist.",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Database Design"],
    experience: "3 years working with both SQL and NoSQL databases.",
  },
  {
    img: img9,
    title: "Tools",
    num: "4",
    id: "section-tools",
    link: "https://github.com/yourusername/dev-tools",
    description: "Proficient in various development and deployment tools.",
    skills: ["Git", "Docker", "Jenkins", "AWS", "Linux"],
    experience: "4 years of DevOps and tool configuration experience.",
  },
  {
    img: img10,
    title: "Test",
    num: "5",
    id: "section-test",
    link: "https://github.com/yourusername/testing",
    description: "Expert in testing methodologies and frameworks.",
    skills: ["Jest", "React Testing Library", "Cypress", "TDD", "E2E Testing"],
    experience: "3 years of implementing comprehensive test suites.",
  },
  {
    img: img11,
    title: "Test",
    num: "6",
    id: "section-test2",
    link: "https://github.com/yourusername/more-tests",
    description: "Specialized in performance testing and optimization.",
    skills: [
      "Lighthouse",
      "WebPageTest",
      "Performance Testing",
      "Load Testing",
    ],
    experience: "2 years focused on web performance optimization.",
  },
];

function InfoPanel({
  item,
  onClose,
}: {
  item: AboutItem | null;
  onClose: () => void;
}) {
  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-lg w-full max-w-2xl overflow-hidden shadow-xl">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">{item.title}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Experience</h3>
              <p className="text-gray-600">{item.experience}</p>
            </div>

            {/* <div className="mt-6">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Repository
                <span className="ml-2">→</span>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function AboutPage() {
  const [isDown, setIsDown] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTopState, setScrollTopState] = useState<number | null>(0);
  const [mouseMoved, setMouseMoved] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [selectedItem, setSelectedItem] = useState<AboutItem | null>(null);
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

  return (
    <div
      className="relative h-screen w-screen overflow-hidden"
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchEnd={handleMouseUp}
    >
      <motion.div
        className="home"
        initial={{ x: -window.innerWidth, width: "100vw" }}
        animate={{ x: 0, width: "100vw" }}
        exit={{ x: -window.innerWidth, transition: { duration: 1 } }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-screen h-screen">
          <div className="absolute inset-x-0 top-1/4 transform -translate-y-full text-center">
            <div className="top-20">
              <h1 className="text-4xl md:text-8xl font-bold">About.</h1>
              <div className="flex justify-center">
                <div className="line h-2 w-10 m-6"></div>
                <p className="mt-4 text-sm md:text-1xl font-medium">
                  All about me <br />
                  and geek stuff <br />
                  explore and discover
                </p>
              </div>
            </div>
          </div>
          <div
            className={`MainContainer absolute ${
              isMobile
                ? "bottom-1 top-1 left-1/2 -translate-x-1/2"
                : "right-[25%]"
            }`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
          >
            <div
              ref={itemsContainer}
              className={`ItemsContainer ${
                isMobile
                  ? "relative max-h-[50vh] top-20  overflow-y-auto max-w-full flex items-center justify-center"
                  : "fixed left-[25%] top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              }`}
            >
              <div className="table">
                <div className="item">
                  {aboutItems.map((item, index) => (
                    <div
                      key={index}
                      id={item.id}
                      className="flex h-[150px] md:h-[200px] w-[300px] md:w-[600px] border overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 rounded-lg"
                    >
                      {index % 2 === 0 ? (
                        <>
                          <div className="scroller w-[150px] md:w-[300px] h-full flex items-end pb-4 px-4">
                            <div className="flex justify-between items-baseline w-full">
                              <div className="flex flex-col">
                                <p className="scroller-1 text-left text-xs md:text-lg font-semibold">
                                  {item.title}
                                </p>
                              </div>
                              <p className="scroller-1 text-right text-2xl md:text-8xl ml-2 opacity-30">
                                {item.num}
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => setSelectedItem(item)}
                            className="w-[150px] md:w-[300px] h-full group relative overflow-hidden"
                          >
                            <img
                              src={item.img}
                              alt={`${item.title} Skills`}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 text-sm md:text-base">
                                View Details →
                              </span>
                            </div>
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => setSelectedItem(item)}
                            className="w-[150px] md:w-[300px] h-full group relative overflow-hidden"
                          >
                            <img
                              src={item.img}
                              alt={`${item.title} Skills`}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 text-sm md:text-base">
                                View Details →
                              </span>
                            </div>
                          </button>
                          <div className="scroller w-[150px] md:w-[300px] h-full flex items-end pb-4 px-4">
                            <div className="flex justify-between items-baseline w-full">
                              <div className="flex flex-col">
                                <p className="scroller-1 text-left text-xs md:text-lg font-semibold">
                                  {item.title}
                                </p>
                              </div>
                              <p className="scroller-1 text-right text-2xl md:text-8xl ml-2 opacity-30">
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

          <AnimatePresence>
            {selectedItem && (
              <InfoPanel
                item={selectedItem}
                onClose={() => setSelectedItem(null)}
              />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutPage;
