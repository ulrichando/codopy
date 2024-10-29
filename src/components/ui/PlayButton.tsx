import React, { useRef } from "react";
import useYouTubeAPI from "../../hooks/useYouTubeAPI";
import useWireUpPlayButtons from "../../hooks/useWireUpPlayButtons";
import "../../App.scss";

interface PlayButtonProps {
  videoId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ videoId }) => {
  const playerRef = useRef<YT.Player | null>(null);
  const containerId = `video-container${videoId}`;

  // Initialize YouTube API
  useYouTubeAPI();

  // Wire up the play button
  useWireUpPlayButtons(videoId, containerId, playerRef);

  return (
    <div className="play-button-container">
      <a
        className="play-button"
        href={`https://youtu.be/${videoId}`}
        data-video-id={videoId}
      >
        <div className="play-button__triangle">
          <div id={containerId}></div>
          <span className="close-button">&#x2715;</span>
        </div>
      </a>
    </div>
  );
};

export default PlayButton;
