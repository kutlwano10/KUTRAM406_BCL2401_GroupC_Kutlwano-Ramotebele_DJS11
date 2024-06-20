import React from "react";
import PlayCircleOutlineTwoToneIcon from "@mui/icons-material/PlayCircleOutlineTwoTone";
import PauseIcon from "@mui/icons-material/Pause";
import { CircularProgress } from "@mui/material";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import CloseIcon from "@mui/icons-material/Close";

const AudioPlayer = (
  audioSrc,
  selectedPodcast,
  episodeName,
  currentPodcastImg,
  setCurrentPlayingEpisodeId
) => {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying((prevState) => !prevState);
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  const closePlayer = () => {
    const confirmClose = window.confirm(
      "Are you sure you want to close the audio player?"
    );
    if (confirmClose) {
      audioRef.current.pause();
      setShowAudioPlayer(false);
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    audioRef.current.addEventListener("ended", () => setIsPlaying(false));
    return () => {
      audioRef.current.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (showAudioPlayer) {
        e.preventDefault();
        e.returnValue = "Are you sure you want to close the audio player?";
        return "Are you sure you want to close the audio player?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [showAudioPlayer]);

  return (
    <div>
      <div className="details--audio-player">
        <audio
          ref={audioRef}
          src={audioSrc}
          preload="metadata"
          onLoadedData={handleLoadedData}
        />

        {isLoading ? (
          <CircularProgress color="secondary" size={"1.5rem"} />
        ) : isPlaying ? (
          <div>
            <GraphicEqIcon
              style={{ opacity: "0.5" }}
              className="details--audio-equalizer"
            />
            <PauseIcon
              onClick={handlePlayPause}
              style={{ cursor: "pointer" }}
            />
          </div>
        ) : (
          <PlayCircleOutlineTwoToneIcon
            onClick={handlePlayPause}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>

      {showAudioPlayer && (
        <div
          className="audio--bottom-player"
          style={{
            position: "fixed",
            bottom: 50,
            left: 0,
            right: 0,
            display: "flex",
            padding: 10,
            flexDirection: "column",
            zIndex: "9999",
          }}
        >
          <div className="audio--bottom-header">
            <img
              src={currentPodcastImg}
              alt="podcast-image"
              className="audio--bottom-image"
            />
            <div className="audio--bottom-text">
              <span className="audio--bottom-title">
                {selectedPodcast.title}
              </span>
              <span className="audio--bottom-episode">{episodeName}</span>
            </div>
            <CloseIcon onClick={closePlayer} />
          </div>

          <audio
            controls
            autoPlay
            preload="auto"
            style={{ height: "2rem", width: "100%" }}
          >
            <source src={audioSrc} type="audio/mpeg" />
          </audio>
        </div>
      )}
    </div>
  );
};

export default Player;
