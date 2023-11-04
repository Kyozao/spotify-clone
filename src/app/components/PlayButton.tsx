import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../page";
import { togglePlayButton } from "../lib/play";

export default function PlayButton() {
  const playButton = useSelector((state: RootState) => state.playButton.value);
  const dispatch = useDispatch();

  return (
    <button
      className="text-zinc-950 bg-zinc-50 md:flex items-center rounded-full md:p-0.5 hover:ring ring-2 transition-all ring-zinc-50 "
      onClick={() => dispatch(togglePlayButton())}
    >
      <span className="material-symbols-rounded scale-75 md:scale-105">
        {playButton}
      </span>
    </button>
  );
}
