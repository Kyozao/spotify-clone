import Image from "next/image";
import { AlbumImages } from "./SideBar";
import Card from "./Card";

export default function Topics() {
  return (
    <section className="grid grid-cols-1 pt-6 gap-3 md:grid-cols-2 lg:grid-cols-3">
      <div className="flex rounded-md overflow-hidden items-center space-x-4 bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer">
        <Image src="/Likedsongs.png" width={80} height={80} alt=""></Image>
        <h3 className="font-extrabold">Liked Songs</h3>
      </div>
      {AlbumImages.slice(0, 5).map(function (item: any) {
        return (
          <div
            className="flex rounded-md overflow-hidden items-center space-x-4 bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer"
            key={item}
          >
            <Image src={item.src} width={80} height={80} alt={item.alt}></Image>
            <h3 className="font-extrabold">{item.alt}</h3>
          </div>
        );
      })}
    </section>
  );
}
