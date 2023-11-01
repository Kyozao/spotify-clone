import Image from "next/image";
import { AlbumImages } from "./SideBar";

export default function Card() {
  return (
    <div className="flex flex-col md:flex-row gap-5 py-6">
      {AlbumImages.slice(0, 6).map(function (item, index) {
        return (
          <div
            className="flex md:flex-col bg-zinc-900 space-x-4 md:space-x-0 p-4 rounded-md hover:bg-zinc-800 transition-all"
            key={index}
          >
            <Image
              src={item.src}
              className="rounded-md"
              width={152}
              height={152}
              alt="Bring Me The Horizon"
            />
            <div className="flex flex-col">
              <h2 className="font-extrabold pt-2">Daily Mix {item.id}</h2>
              <p className="text-sm text-zinc-400">asdsada</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
