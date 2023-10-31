import Image from "next/image";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen p-2 pb-0">
      <div className="flex md:hidden w-full h-10 px-3 text-zinc-50">
        <button>
          <span className="material-symbols-outlined scale-125 ">menu</span>
        </button>
      </div>
      <div className="flex flex-1 gap-3">
        <SideBar />
        <main className="flex flex-col flex-1 bg-gradient-to-t  from-zinc-900 from-40% via-zinc-900 via-60%  to-green-500/50  to-100% rounded-xl px-5">
          <div className="h-12 w-full p-2 my-2 flex justify-between">
            <div className="flex space-x-2">
              <a href="#" className="bg-black/20 rounded-full flex">
                <span className="material-symbols-outlined p-1 scale-75 relative left-0.5">
                  arrow_back_ios
                </span>
              </a>
              <a href="#" className="bg-black/20 rounded-full flex">
                <span className="material-symbols-outlined p-1 scale-75 ">
                  arrow_forward_ios
                </span>
              </a>
            </div>
            <div className="flex space-x-2">
              <a href="#" className="bg-black/20 rounded-full flex">
                <span className="material-symbols-outlined p-1 scale-75 left-0.5">
                  notifications
                </span>
              </a>
              <a href="#" className="bg-black/20 rounded-full flex">
                <span className="material-symbols-outlined p-1 scale-75 left-0.5">
                  groups
                </span>
              </a>
              <a href="#" className="bg-black/20 rounded-full flex">
                <span className="material-symbols-outlined p-1 scale-75 left-0.5">
                  person
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row bg-black/20 py-12 gap-3 md:space-x-5 space-y-3 items-center px-5 mx-auto">
            <a className="">
              <Image
                src="/Album-covers/Sleeptokenbig.jpg"
                className="max-w-sm w-64 h-64"
                width={400}
                height={400}
                alt=""
              />
            </a>
            <div className="flex flex-col mx-0 gap-5">
              <span className="font-semibold text-sm">PLAYLIST</span>
              <h1 className="text-3xl md:text-6xl font-bold">
                Popular Metal Songs...
              </h1>
              <span className="font-medium">
                Listen to the most sucessful Metal songs!
              </span>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                <button className="bg-green-500 text-xl px-8 py-3 text-zinc-900 font-medium rounded-full flex justify-center items-center hover:ring-2 ring-green-500">
                  Play
                </button>
                <button className="bg-transparent border border-zinc-400 text-xl px-8 py-3 text-zinc-50 font-medium rounded-full flex justify-center items-center hover:ring-2 ring-zinc-50">
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
          <div className="flex flex-col py-6">
            <h2 className="text-3xl font-bold">Good afternoon</h2>
            <section className="grid grid-cols-1 py-6 gap-3 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex rounded-md overflow-hidden items-center space-x-4 bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer">
                <Image
                  src="/Likedsongs.png"
                  width={80}
                  height={80}
                  alt=""
                ></Image>
                <h3 className="font-extrabold">Liked Songs</h3>
              </div>
              <div className="flex rounded-md overflow-hidden items-center space-x-4 bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer">
                <Image
                  src="/Album-covers/Bmth.png"
                  width={80}
                  height={80}
                  alt=""
                ></Image>
                <h3 className="font-extrabold">Bring Me The Horizon</h3>
              </div>
              <div className="flex rounded-md overflow-hidden items-center space-x-4 bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer">
                <Image
                  src="/Album-covers/Miw.png"
                  width={80}
                  height={80}
                  alt=""
                ></Image>
                <h3 className="font-extrabold">Motionless In White</h3>
              </div>
              <div className="flex rounded-md overflow-hidden items-center space-x-4 bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer">
                <Image
                  src="/Album-covers/Slipknot.png"
                  width={80}
                  height={80}
                  alt=""
                ></Image>
                <h3 className="font-extrabold">Slipknot</h3>
              </div>
              <div className="flex rounded-md overflow-hidden items-center space-x-4 bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer">
                <Image
                  src="/Album-covers/Bb.png"
                  width={80}
                  height={80}
                  alt=""
                ></Image>
                <h3 className="font-extrabold">Breaking Benjamin</h3>
              </div>
              <div className="flex rounded-md overflow-hidden items-center space-x-4 bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer">
                <Image
                  src="/Album-covers/Sleeptoken.png"
                  width={80}
                  height={80}
                  alt=""
                ></Image>
                <h3 className="font-extrabold">Sleep Token</h3>
              </div>
            </section>
          </div>
          <div></div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
