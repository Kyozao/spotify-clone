import Image from "next/image";
import { AlbumImages } from "./SideBar";

export default function Card() {
  return (
    <div className="flex gap-5 py-6">
      {AlbumImages.slice(0, 1).map(function (item) {
        return (
          <div
            className="flex flex-col bg-zinc-800 p-4 rounded-md hover:bg-zinc-700 transition-all"
            key={item.id}
          >
            <a href="">
              <Image
                src={item.src}
                className="rounded-md"
                width={152}
                height={152}
                alt="Bring Me The Horizon"
              />
              <h2 className="font-extrabold pt-2">Daily Mix {item.id}</h2>
              <p className="text-sm text-zinc-400">asdsada</p>
            </a>
          </div>
        );
      })}
    </div>
  );
}
