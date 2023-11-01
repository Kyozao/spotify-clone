import { useState } from "react";

export default function PlayButton() {
  const [playButton, setPlayButton] = useState("play_arrow");

  const toggleButton = () => {
    if (playButton === "play_arrow") {
      setPlayButton("pause");
    } else {
      setPlayButton("play_arrow");
    }
  };
  return (
    <button
      className="text-zinc-950 bg-zinc-50 md:flex items-center rounded-full md:p-0.5 hover:ring ring-2 transition-all ring-zinc-50 "
      onClick={toggleButton}
    >
      <span className="material-symbols-rounded scale-75 md:scale-105">
        {playButton}
      </span>
    </button>
  );
}
