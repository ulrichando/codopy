import { motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import "../components/draggablescroll.css";
import { Github } from "lucide-react";

// Import available images
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";

interface Project {
  title: string;
  description: string;
  language: string;
  link: string;
  img?: string;
  gradient?: string;
}

// All GitHub projects
const allProjects: Project[] = [
  {
    title: "Codopy",
    description: "Portfolio project with modern design",
    language: "TypeScript",
    link: "https://github.com/ulrichando/codopy",
    img: img1,
  },
  {
    title: "OurCodingKiddos",
    description: "Educational coding platform",
    language: "TypeScript",
    link: "https://github.com/ulrichando/ourcodingkiddos",
    img: img2,
  },
  {
    title: "Realestate",
    description: "Real estate application",
    language: "Python",
    link: "https://github.com/ulrichando/Realestate",
    img: img3,
  },
  {
    title: "RealState",
    description: "Real estate TypeScript project",
    language: "TypeScript",
    link: "https://github.com/ulrichando/realState",
    img: img4,
  },
  {
    title: "Codopy Matrix Dark",
    description: "VSCode dark theme extension",
    language: "JavaScript",
    link: "https://github.com/ulrichando/codopy-matrix-dark",
    img: img5,
  },
  {
    title: "Excel Employee Tracker",
    description: "Excel-based personnel tracking tool",
    language: "Excel",
    link: "https://github.com/ulrichando/excel-employee-tracker",
    img: img6,
  },
  {
    title: "VideoConferenceApp",
    description: "Video conferencing application",
    language: "TypeScript",
    link: "https://github.com/ulrichando/VideoConferenceApp",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    title: "Web2",
    description: "Web development project",
    language: "HTML",
    link: "https://github.com/ulrichando/Web2",
    gradient: "from-orange-500 to-red-600",
  },
  {
    title: "Mywebsite",
    description: "Personal website project",
    language: "HTML",
    link: "https://github.com/ulrichando/Mywebsite",
    gradient: "from-green-500 to-teal-600",
  },
  {
    title: "Exploit",
    description: "Security research project",
    language: "Shell",
    link: "https://github.com/ulrichando/Exploit",
    gradient: "from-red-500 to-pink-600",
  },
  {
    title: "Log Fixer",
    description: "Log management utility",
    language: "Python",
    link: "https://github.com/ulrichando/log-fixer",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    title: "Clark Master",
    description: "CSS styling project",
    language: "CSS",
    link: "https://github.com/ulrichando/clark-master",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "ulrichando",
    description: "GitHub profile README",
    language: "Markdown",
    link: "https://github.com/ulrichando/ulrichando",
    gradient: "from-gray-500 to-slate-600",
  },
];

// Language color mapping
const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-500",
  Python: "bg-green-500",
  HTML: "bg-orange-500",
  CSS: "bg-pink-500",
  Shell: "bg-gray-500",
  Excel: "bg-emerald-600",
  Markdown: "bg-purple-500",
};

const ITEMS_PER_PAGE = 4;

const WorkPage = () => {
  const [isDown, setIsDown] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTopState, setScrollTopState] = useState<number | null>(0);
  const [mouseMoved, setMouseMoved] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const itemsContainer = useRef<HTMLDivElement | null>(null);
  const observerTarget = useRef<HTMLDivElement | null>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll to a specific project - scroll within container only, not the whole page
  const scrollToProject = useCallback((index: number) => {
    // First, make sure all projects up to the target are loaded
    if (index >= visibleProjects.length) {
      // Load all projects up to and including the target
      setVisibleProjects(allProjects.slice(0, Math.max(index + 1, ITEMS_PER_PAGE)));
      setHasMore(index + 1 < allProjects.length);
    }

    // Wait for render then scroll within container only
    setTimeout(() => {
      const projectElement = projectRefs.current[index];
      const container = itemsContainer.current;

      if (projectElement && container) {
        // Calculate scroll position to center the element within the container
        const containerHeight = container.clientHeight;
        const elementTop = projectElement.offsetTop;
        const elementHeight = projectElement.clientHeight;

        // Scroll to position element in center of container
        const scrollPosition = elementTop - (containerHeight / 2) + (elementHeight / 2);

        container.scrollTo({
          top: Math.max(0, scrollPosition),
          behavior: "smooth"
        });
      }
    }, 150);
  }, [visibleProjects.length]);

  // Listen for scrollToProject custom event
  useEffect(() => {
    const handleScrollToProject = (event: CustomEvent<{ index: number }>) => {
      scrollToProject(event.detail.index);
    };

    window.addEventListener("scrollToProject", handleScrollToProject as EventListener);
    return () => {
      window.removeEventListener("scrollToProject", handleScrollToProject as EventListener);
    };
  }, [scrollToProject]);

  // Initialize with first batch
  useEffect(() => {
    setVisibleProjects(allProjects.slice(0, ITEMS_PER_PAGE));
    setHasMore(allProjects.length > ITEMS_PER_PAGE);
  }, []);

  // Load more projects
  const loadMore = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    // Simulate loading delay for smooth UX
    setTimeout(() => {
      const currentLength = visibleProjects.length;
      const nextProjects = allProjects.slice(
        currentLength,
        currentLength + ITEMS_PER_PAGE
      );

      if (nextProjects.length > 0) {
        setVisibleProjects((prev) => [...prev, ...nextProjects]);
        setHasMore(currentLength + nextProjects.length < allProjects.length);
      } else {
        setHasMore(false);
      }
      setIsLoading(false);
    }, 300);
  }, [visibleProjects.length, hasMore, isLoading]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [hasMore, isLoading, loadMore]);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
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
        className="work"
        initial={{ x: "100vw", width: "100vw" }}
        animate={{ x: 0, width: "100vw" }}
        exit={{ x: "100vw", transition: { duration: 1 } }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-screen h-screen">
          <div className="fixed inset-x-0 top-1/4 transform -translate-y-full text-center right-[25%] z-10 pointer-events-none">
            <h1 className="text-4xl md:text-8xl font-bold">Work.</h1>
            <div className="flex justify-center">
              <div className="line h-2 w-10 m-6"></div>
              <p className="mt-4 text-sm md:text-1xl font-medium">
                {allProjects.length} projects on <br />
                GitHub. Scroll to <br />
                explore all
              </p>
            </div>
          </div>

          <div
            className={`MainContainer absolute ${
              isMobile ? "bottom-1 left-1/2 -translate-x-1/2" : "left-[25%]"
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
                  ? "relative max-h-[50vh] top-20 overflow-y-auto max-w-full flex items-center justify-center"
                  : "fixed right-[25%] top-1/2 transform translate-x-1/2 -translate-y-1/2 max-h-[70vh] overflow-y-auto scrollbar-hide"
              } `}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="table">
                <div className="item">
                  {visibleProjects.map((item, index) => (
                    <motion.div
                      key={item.title}
                      ref={(el) => (projectRefs.current[index] = el)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex h-[150px] md:h-[200px] w-[300px] md:w-[600px] border overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 rounded-lg mb-2"
                    >
                      {index % 2 === 0 ? (
                        <>
                          <div className="scroller w-[150px] md:w-[300px] h-full flex flex-col justify-between py-4 px-4">
                            <div className="flex items-center gap-2">
                              <span
                                className={`w-3 h-3 rounded-full ${
                                  languageColors[item.language] || "bg-gray-400"
                                }`}
                              ></span>
                              <span className="text-xs opacity-70">
                                {item.language}
                              </span>
                            </div>
                            <div className="flex justify-between items-baseline w-full">
                              <div className="flex flex-col">
                                <p className="scroller-1 text-left text-xs md:text-lg font-semibold">
                                  {item.title}
                                </p>
                                <p className="text-xs opacity-60 mt-1 line-clamp-2">
                                  {item.description}
                                </p>
                              </div>
                              <p className="scroller-1 text-right text-2xl md:text-6xl ml-2 opacity-20">
                                {String(index + 1).padStart(2, "0")}
                              </p>
                            </div>
                          </div>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-[150px] md:w-[300px] h-full group relative overflow-hidden"
                          >
                            {item.img ? (
                              <img
                                src={item.img}
                                alt={`${item.title} Project`}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                            ) : (
                              <div
                                className={`h-full w-full bg-gradient-to-br ${item.gradient} flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}
                              >
                                <Github className="w-12 h-12 text-white opacity-50" />
                              </div>
                            )}
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                View Project →
                              </span>
                            </div>
                          </a>
                        </>
                      ) : (
                        <>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-[150px] md:w-[300px] h-full group relative overflow-hidden"
                          >
                            {item.img ? (
                              <img
                                src={item.img}
                                alt={`${item.title} Project`}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                            ) : (
                              <div
                                className={`h-full w-full bg-gradient-to-br ${item.gradient} flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}
                              >
                                <Github className="w-12 h-12 text-white opacity-50" />
                              </div>
                            )}
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                View Project →
                              </span>
                            </div>
                          </a>
                          <div className="scroller w-[150px] md:w-[300px] h-full flex flex-col justify-between py-4 px-4">
                            <div className="flex items-center gap-2">
                              <span
                                className={`w-3 h-3 rounded-full ${
                                  languageColors[item.language] || "bg-gray-400"
                                }`}
                              ></span>
                              <span className="text-xs opacity-70">
                                {item.language}
                              </span>
                            </div>
                            <div className="flex justify-between items-baseline w-full">
                              <div className="flex flex-col">
                                <p className="scroller-1 text-left text-xs md:text-lg font-semibold">
                                  {item.title}
                                </p>
                                <p className="text-xs opacity-60 mt-1 line-clamp-2">
                                  {item.description}
                                </p>
                              </div>
                              <p className="scroller-1 text-right text-2xl md:text-6xl ml-2 opacity-20">
                                {String(index + 1).padStart(2, "0")}
                              </p>
                            </div>
                          </div>
                        </>
                      )}
                    </motion.div>
                  ))}

                  {/* Loading indicator / Observer target */}
                  <div
                    ref={observerTarget}
                    className="h-20 flex items-center justify-center"
                  >
                    {isLoading && (
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    )}
                    {!hasMore && visibleProjects.length > 0 && (
                      <p className="text-sm opacity-50">
                        All {allProjects.length} projects loaded
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkPage;
