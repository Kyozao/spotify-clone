"use client";
import Image from "next/image";
import { MouseEventHandler, useState } from "react";

interface PlayingNowProps {
  img: string;
  song: string;
  artist: string;
  active: boolean;
  toggleActive: MouseEventHandler;
}

export default function PlayingNow(props: PlayingNowProps) {
  return (
    <div className="flex gap-4 items-center">
      <div className="flex overflow-hidden">
        <Image
          src={props.img}
          className="rounded-md"
          width={52}
          height={52}
          alt=""
        ></Image>
      </div>
      <div className="flex flex-col">
        <p className="font-medium">{props.song}</p>
        <span className="text-xs text-zinc-400">{props.artist}</span>
      </div>
      <button
        className={
          props.active === true
            ? "text-green-500 hidden md:flex scale-110 active transition-all duration-500"
            : "text-zinc-400 hidden md:flex transition-all"
        }
        onClick={props.toggleActive}
      >
        <span className="material-symbols-outlined scale-75">favorite</span>
      </button>
    </div>
  );
}
