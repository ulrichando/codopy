import { useEffect, MutableRefObject } from "react";

const useWireUpPlayButtons = (
  videoId: string,
  containerId: string,
  playerRef: MutableRefObject<YT.Player | null>
) => {
  useEffect(() => {
    // Wait until the YT API is ready
    const setupPlayer = () => {
      const playButton = document.querySelector(
        `.play-button[data-video-id="${videoId}"]`
      );
      const videoContainer = document.getElementById(containerId);

      if (playButton && videoContainer && !playerRef.current) {
        playerRef.current = new window.YT.Player(containerId, {
          videoId: videoId,
        });

        const handlePlayButtonClick = (e: Event) => {
          e.stopPropagation();
          e.preventDefault();
          const container = playButton.closest(".play-button-container");
          if (container) {
            container.classList.toggle("-clicked");
            if (container.classList.contains("-clicked")) {
              playerRef.current?.playVideo();
            } else {
              playerRef.current?.stopVideo();
            }
          }
        };

        const handleBodyClick = () => {
          const containers = document.querySelectorAll(
            ".play-button-container"
          );
          containers.forEach((container) => {
            container.classList.remove("-clicked");
          });
          playerRef.current?.stopVideo();
        };

        playButton.addEventListener(
          "click",
          handlePlayButtonClick as EventListener
        );
        document.body.addEventListener(
          "click",
          handleBodyClick as EventListener
        );

        // Clean up event listeners and reset the player
        return () => {
          playButton.removeEventListener(
            "click",
            handlePlayButtonClick as EventListener
          );
          document.body.removeEventListener(
            "click",
            handleBodyClick as EventListener
          );
          playerRef.current?.destroy();
          playerRef.current = null;
        };
      }
    };

    // Check if YT is available and setup the player, otherwise wait for API to load
    if (window.YT && window.YT.Player) {
      setupPlayer();
    } else {
      // Wait until the YouTube API is ready
      window.onYouTubeIframeAPIReady = setupPlayer;
    }
  }, [videoId, containerId, playerRef]);
};

export default useWireUpPlayButtons;
