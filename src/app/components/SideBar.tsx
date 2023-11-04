import Image from "next/image";
import Link from "next/link";
export let AlbumImages = [
  {
    id: 1,
    src: "/Album-covers/Bmth.png",
    alt: "Bring Me The Horizon",
  },
  {
    id: 2,
    src: "/Album-covers/flow.png",
    alt: "Flow PodCast",
  },
  {
    id: 3,
    src: "/Album-covers/Slipknot.png",
    alt: "Slipknot",
  },
  {
    id: 4,
    src: "/Album-covers/Miw.png",
    alt: "Motionless In White",
  },
  {
    id: 5,
    src: "/Album-covers/Sleeptoken.png",
    alt: "Sleep Token",
  },
  {
    id: 6,
    src: "/Album-covers/Bb.png",
    alt: "Breaking Benjamin",
  },
  {
    id: 7,
    src: "/Album-covers/Badomens2.png",
    alt: "Bad Omens",
  },
  {
    id: 8,
    src: "/Album-covers/Badomens.png",
    alt: "Bad Omens",
  },
];

function SideBar() {
  return (
    <aside className="hidden md:flex flex-col w-20 gap-3">
      <div className="flex flex-col h-32 bg-neutral-950 rounded-xl p-2 items-center justify-center space-y-6 text-zinc-400">
        <Link href="#" className="hover:text-zinc-50 transition-colors">
          <span className="material-symbols-outlined scale-125">home</span>
        </Link>
        <Link href="#" className="hover:text-zinc-50 transition-colors">
          <span className="material-symbols-outlined scale-125">search</span>
        </Link>
      </div>
      <div className="flex flex-1 flex-col bg-neutral-950 rounded-xl p-2 py-4 justify-start items-center space-y-6 text-zinc-400">
        <Link href="#">
          <span className="material-symbols-rounded hover:text-zinc-50 transition-colors">
            book_4
          </span>
        </Link>
        {AlbumImages.map(function (item, index) {
          return (
            <a
              href="#"
              className="w-14 h-14 rounded-md overflow-hidden hover:ring-8 hover:ring-zinc-400/10 transition-all"
              key={index}
            >
              <Image src={item.src} width={54} height={54} alt={item.alt} />
            </a>
          );
        })}
      </div>
    </aside>
  );
}

export default SideBar;
