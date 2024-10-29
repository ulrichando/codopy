// declare namespace YT {
//   class Player {
//     constructor(elementId: string, options: PlayerOptions);
//     playVideo(): void;
//     stopVideo(): void;
//     destroy(): void;
//   }

//   interface PlayerOptions {
//     videoId: string;
//     events?: {
//       onReady?: () => void;
//       onStateChange?: (event: any) => void;
//     };
//   }
// }

// interface Window {
//   YT: typeof YT;
//   onYouTubeIframeAPIReady: () => void;
// }

declare namespace YT {
  class Player {
    constructor(elementId: string, options: PlayerOptions);
    playVideo(): void;
    stopVideo(): void;
    destroy(): void;
  }

  interface PlayerOptions {
    videoId: string;
    events?: {
      onReady?: () => void;
      onStateChange?: (event: PlayerStateChangeEvent) => void; // Updated type
    };
  }

  // Define an enum for player states
  enum PlayerState {
    UNSTARTED = -1,
    ENDED = 0,
    PLAYING = 1,
    PAUSED = 2,
    BUFFERING = 3,
    CUED = 5,
  }

  // Define a type for the state change event
  interface PlayerStateChangeEvent {
    data: PlayerState; // Use the PlayerState enum for more specific typing
  }
}

interface Window {
  YT: typeof YT;
  onYouTubeIframeAPIReady: () => void;
}
