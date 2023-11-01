"use client";
import Image from "next/image";
import PlayingNow from "./PlayingNow";
import { useState } from "react";
import PlayButton from "./PlayButton";

function Footer() {
  return (
    <footer className="h-16 w-full bg-black px-3 py-5 md:py-10 flex md:items-center justify-between bottom-0 left-0 right-0 sticky">
      <PlayingNow
        song="Fall For Me"
        artist="Sleep Token"
        img="/Album-covers/Sleeptoken.png"
      ></PlayingNow>
      <div className="flex md:hidden space-x-5">
        <PlayButton></PlayButton>
        <button className="text-zinc-400 hover:text-zinc-50 flex">
          <span className="material-symbols-outlined scale-75">devices</span>
        </button>
        <div className="flex items-center gap-2">
          <button className="text-zinc-400 hover:text-zinc-50 flex">
            <span className="material-symbols-outlined scale-75">
              volume_up
            </span>
          </button>
        </div>
      </div>
      <div className="hidden md:flex flex-col md:w-2/6 items-center gap-3">
        <div className="flex space-x-3 md:space-x-6 items-center">
          <button className="text-zinc-400 hover:text-zinc-50 hidden md:flex">
            <span className="material-symbols-outlined scale-75 md:scale-105">
              shuffle
            </span>
          </button>
          <button className="text-zinc-400 hover:text-zinc-50 hidden md:flex">
            <span className="material-symbols-rounded scale-75 md:scale-105">
              skip_previous
            </span>
          </button>
          <PlayButton></PlayButton>
          <button className="text-zinc-400 hover:text-zinc-50 hidden md:flex">
            <span className="material-symbols-rounded scale-75 md:scale-105">
              skip_next
            </span>
          </button>
          <button className="text-zinc-400 hover:text-zinc-50 hidden md:flex">
            <span className="material-symbols-outlined scale-75 md:scale-105">
              repeat
            </span>
          </button>
        </div>
        <div className="w-full flex items-center space-x-3">
          <span className="text-xs text-zinc-400 hidden md:flex">0:20</span>
          <div className="bg-zinc-400 w-full h-1 rounded-full flex-1 hidden md:flex">
            <div className="bg-zinc-50 w-24 h-1 rounded-full"></div>
          </div>
          <span className="text-xs text-zinc-400 hidden md:flex">2:26</span>
        </div>
      </div>
      <div className="hidden md:flex space-x-3 items-center ">
        <button className="text-zinc-400 hover:text-zinc-50 hidden md:flex">
          <span className="material-symbols-outlined scale-75">
            smart_display
          </span>
        </button>
        <button className="text-zinc-400 hover:text-zinc-50 hidden md:flex">
          <span className="material-symbols-outlined scale-75">
            mic_external_on
          </span>
        </button>
        <button className="text-zinc-400 hover:text-zinc-50 hidden md:flex">
          <span className="material-symbols-outlined scale-75">
            playlist_play
          </span>
        </button>
        <button className="text-zinc-400 hover:text-zinc-50 hidden md:flex">
          <span className="material-symbols-outlined scale-75">devices</span>
        </button>
        <div className="flex items-center gap-2">
          <button className="text-zinc-400 hover:text-zinc-50 hidden md:flex">
            <span className="material-symbols-outlined scale-75">
              volume_up
            </span>
          </button>
          <div className="bg-zinc-400 w-24 h-1 rounded-full hidden md:flex">
            <div className="bg-zinc-50 w-16 h-1 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
