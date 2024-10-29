import { useEffect } from "react";

const useYouTubeAPI = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;

    // Insert the script tag before the first script in the DOM
    const firstScriptTag = document.getElementsByTagName("script")[0];
    if (firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
    }

    // Define the onYouTubeIframeAPIReady callback to notify when API is ready
    window.onYouTubeIframeAPIReady = () => {
      console.log("YouTube Iframe API ready");
    };

    // Cleanup function to remove the script if needed
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);
};

export default useYouTubeAPI;
