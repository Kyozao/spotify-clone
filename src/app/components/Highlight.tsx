import Image from "next/image";

export default function Highlight(props) {
  return (
    <div className="flex flex-col md:flex-row bg-black/20 py-12 gap-3 md:space-x-5 space-y-3 items-center px-5 mx-auto">
      <a className="">
        <Image
          src={props.img}
          className="max-w-sm w-64 h-64"
          width={400}
          height={400}
          alt=""
        />
      </a>
      <div className="flex flex-col mx-0 gap-5">
        <span className="font-semibold text-sm">PLAYLIST</span>
        <h1 className="text-3xl md:text-6xl font-bold">{props.title}</h1>
        <span className="font-medium">{props.subtitle}</span>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <button className="bg-green-500 text-xl px-8 py-3 text-zinc-900 font-medium rounded-full flex justify-center items-center hover:scale-105 ring-green-500">
            Play
          </button>
          <button className="bg-transparent border border-zinc-400 text-xl px-8 py-3 text-zinc-50 font-medium rounded-full flex justify-center items-center hover:scale-105 hover:ring-1 ring-zinc-50">
            Follow
          </button>
          <a href="#" className="flex items-center justify-center">
            <span className="material-symbols-outlined scale-150 text-zinc-400 hover:text-zinc-50 transition-colors">
              more_horiz
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
