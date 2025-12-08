import React from "react";
import profile from "../assets/images/profile1.svg";
import "../App.scss";
import PlayButton from "../components/ui/PlayButton";
import PullToRefresh from "../components/PullToRefresh";

interface MenuItem {
  name: string;
}

interface Video {
  id: string;
  name: string;
}

const menu: MenuItem[] = [
  { name: "Frontend" },
  { name: "Backend" },
  { name: "Database" },
  { name: "Cloud" },
  { name: "Server" },
  { name: "Security" },
];

const videos: Video[] = [{ id: "dQw4w9WgXcQ", name: "Video 1" }];

const HomePage: React.FC = () => {
  const handleRefresh = async (): Promise<void> => {
    // Simulate a refresh delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    // Add your refresh logic here
    window.location.reload();
  };

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <div className="relative w-full h-full">
        <div className="relative w-screen h-screen">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4">
            {/* Text Hello */}
            <div className="absolute top-1/3 right-full transform translate-x-6 hidden md:block">
              <div className="top-20 left-10">
                <h1 className="text-8xl font-bold">Hello.</h1>
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

            {/* Circle */}
            <div className="Circle w-80 h-80 md:w-120 md:h-120 lg:w-120 lg:h-120 xl:w-160 xl:h-160 rounded-full border-4 flex justify-center items-center overflow-auto md:shrink-0">
              <img
                src={profile}
                alt="mini"
                className="w-60 h-70 md:w-100 md:h-120 lg:w-100 lg:h-120 xl:w-120 xl:h-140 object-cover"
              />
            </div>

            {/* Circle menu */}
            <div className="absolute space-y-2 top-1/3 left-full transform translate-x-2 hidden md:block">
              {menu.map((item) => (
                <div key={item.name} className="flex flex-col">
                  <p className="text-1xl font-medium px-4 py-2">{item.name}</p>
                </div>
              ))}
            </div>

            {/* Reel button - visible on all screens */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-24 md:bottom-1/4 md:left-full md:translate-x-5 md:translate-y-20">
              <div className="relative flex flex-col items-center">
                {videos.map((video) => (
                  <PlayButton key={video.id} videoId={video.id} />
                ))}
                <span className="reel text-base mt-3 md:mt-0 md:absolute md:left-full md:top-1/2 md:-translate-y-1/2 md:ml-4 whitespace-nowrap">MyPath</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PullToRefresh>
  );
};

export default HomePage;
