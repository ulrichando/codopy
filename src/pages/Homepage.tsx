import profile from "../assets/images/profile1.svg";
import "../App.scss";
import PlayButton from "../components/ui/PlayButton";

const menu = [
  { name: "Frontend", href: "#frontend" },
  { name: "Backend", href: "#backend" },
  { name: "Database", href: "#database" },
  { name: "Cloud", href: "#cloud" },
  { name: "Server", href: "#server" },
  { name: "Security", href: "#security" },
];

const videos = [{ id: "dQw4w9WgXcQ", name: "Video 1" }];
function Homepage() {
  return (
    <div className="Relative w-full h-full">
      {/* container */}
      <div className="relative w-screen h-screen ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4">
          {/* Text Hello */}
          <div className="absolute top-1/3 right-full transform  translate-x-6 hidden md:block">
            <div className=" top-20 left-10">
              <h1 className="text-8xl font-bold ">Hello.</h1>
              <div className="flex">
                <div className="line h-2 w-10 m-6"></div>
                <p className="mt-4 text-1xl font-medium">
                  Welcome to <br />
                  my portfolio, <br />
                  explore and discover
                </p>
              </div>
            </div>
          </div>
          {/* End of Text Hello */}

          {/* Circle */}

          <div className="Circle w-80 h-80 md:w-120 md:h-120 lg:w-120 lg:h-120 xl:w-160 xl:h-160 rounded-full border-4 flex justify-center items-center overflow-auto md:shrink-0">
            <img
              src={profile}
              alt="mini"
              className="w-60 h-70 md:w-100 md:h-120 lg:w-100 lg:h-120 xl:w-120 xl:h-140 object-cover "
            />
          </div>

          {/* Circle menu */}
          <div className="absolute space-y-2 top-1/3 left-full transform  translate-x-2 hidden md:block">
            {menu.map((item) => (
              <div key={item.href} className="flex flex-col">
                <a
                  href={`#${item.name}`}
                  className="text-1xl font-medium px-4 py-2"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
          {/* End of Circle menu */}
          {/* End of Circle  */}

          {/* Reel button  */}
          <div className="absolute bottom-1/4 left-full  transform  translate-x-5 translate-y-20  hidden md:block">
            <div>
              {videos.map((video) => (
                <PlayButton key={video.id} videoId={video.id} />
              ))}
            </div>
            <div className="absolute justify-center items-center left-12 -top-4">
              <span className="reel text-xl ">Reel</span>
            </div>
          </div>
        </div>
        {/* End of Reel button  */}

        {/* Container two  */}

        {/* <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 hidden md:block">
          {navAbout.map((item) => (
            <NavLink key={item.to} to={item.to}>
              <Circle
                radius={200}
                className="circle-outer transition-all duration-300"
              >
                <Circle radius={70} className="circle-middle">
                  <Circle radius={30} className="circle-inner"></Circle>
                </Circle>
              </Circle>
            </NavLink>
          ))}
        </div> */}

        {/* End of Contianer two  */}

        {/* Container Three */}
        {/* 
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 hidden md:block">
          {navWork.map((item) => (
            <NavLink key={item.to} to={item.to}>
              <Circle
                radius={200}
                className="circle-outer transition-all duration-300"
              >
                <Circle radius={70} className="circle-middle">
                  <Circle radius={30} className="circle-inner"></Circle>
                </Circle>
              </Circle>
            </NavLink>
          ))}
        </div> */}

        {/*End of Container Three */}
      </div>
      {/* End of container  */}
    </div>
  );
}

export default Homepage;
