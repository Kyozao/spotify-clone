import Image from "next/image";
import PlayingNow from "./PlayingNow";

function Footer() {
  return (
    <footer className="h-16 px-3 py-5 md:py-10 flex md:items-center justify-between">
      <PlayingNow 
      song='Fall For Me'
      artist='Sleep Token'
      img='/Album-covers/Sleeptoken.png'>
      </PlayingNow>
      <div className="flex md:hidden space-x-5">
        <a
          href="#"
          className="text-zinc-950 bg-zinc-50 flex md:hidden items-center rounded-full md:p-0.5 hover:ring ring-2 transition-all ring-zinc-50 "
        >
          <span className="material-symbols-outlined scale-75 md:scale-105">
            play_arrow
          </span>
        </a>
        <a href="#" className="text-zinc-400 hover:text-zinc-50 flex">
          <span className="material-symbols-outlined scale-75">devices</span>
        </a>
        <div className="flex items-center gap-2">
          <a href="#" className="text-zinc-400 hover:text-zinc-50 flex">
            <span className="material-symbols-outlined scale-75">
              volume_up
            </span>
          </a>
        </div>
      </div>
      <div className="hidden md:flex flex-col md:w-2/6 items-center gap-3">
        <div className="flex space-x-3 md:space-x-6 items-center">
          <a
            href="#"
            className="text-zinc-400 hover:text-zinc-50 hidden md:flex"
          >
            <span className="material-symbols-outlined scale-75 md:scale-105">
              shuffle
            </span>
          </a>
          <a
            href="#"
            className="text-zinc-400 hover:text-zinc-50 hidden md:flex"
          >
            <span className="material-symbols-outlined scale-75 md:scale-105">
              skip_previous
            </span>
          </a>
          <a
            href="#"
            className="text-zinc-950 bg-zinc-50 hidden md:flex items-center rounded-full md:p-0.5 hover:ring ring-2 transition-all ring-zinc-50 "
          >
            <span className="material-symbols-outlined scale-75 md:scale-105">
              play_arrow
            </span>
          </a>
          <a
            href="#"
            className="text-zinc-400 hover:text-zinc-50 hidden md:flex"
          >
            <span className="material-symbols-outlined scale-75 md:scale-105">
              skip_next
            </span>
          </a>
          <a
            href="#"
            className="text-zinc-400 hover:text-zinc-50 hidden md:flex"
          >
            <span className="material-symbols-outlined scale-75 md:scale-105">
              repeat
            </span>
          </a>
        </div>

        <div className="w-full flex items-center space-x-3">
          <span className="text-xs text-zinc-400 hidden md:flex">0:20</span>
          <div className="bg-zinc-400 w-full h-1 rounded-full flex-1 hidden md:flex">
            <div className="bg-zinc-50 w-24 h-1 rounded-full"></div>
          </div>
          <span className="text-xs text-zinc-400 hidden md:flex">2:26</span>
        </div>
      </div>
      <div className="hidden md:flex space-x-3 items-center">
        <a href="#" className="text-zinc-400 hover:text-zinc-50 hidden md:flex">
          <span className="material-symbols-outlined scale-75">
            smart_display
          </span>
        </a>
        <a href="#" className="text-zinc-400 hover:text-zinc-50 hidden md:flex">
          <span className="material-symbols-outlined scale-75">
            mic_external_on
          </span>
        </a>
        <a href="#" className="text-zinc-400 hover:text-zinc-50 hidden md:flex">
          <span className="material-symbols-outlined scale-75">
            playlist_play
          </span>
        </a>
        <a href="#" className="text-zinc-400 hover:text-zinc-50 hidden md:flex">
          <span className="material-symbols-outlined scale-75">devices</span>
        </a>
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="text-zinc-400 hover:text-zinc-50 hidden md:flex"
          >
            <span className="material-symbols-outlined scale-75">
              volume_up
            </span>
          </a>
          <div className="bg-zinc-400 w-24 h-1 rounded-full hidden md:flex">
            <div className="bg-zinc-50 w-16 h-1 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
