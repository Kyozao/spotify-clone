import Image from "next/image";

export default function PlayingNow(props) {
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
      <a href="#" className="text-green-500 hidden md:flex">
        <span className="material-symbols-outlined scale-75">favorite</span>
      </a>
    </div>
  );
}
