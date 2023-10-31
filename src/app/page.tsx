import Image from "next/image";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Topics from "./components/Topics";
import Highlight from "./components/Highlight";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <div className="flex flex-col h-screen p-2 pb-0">
      <div className="flex md:hidden w-full h-10 px-3 text-zinc-50">
        <button>
          <span className="material-symbols-outlined scale-125 ">menu</span>
        </button>
      </div>
      <div className="flex flex-1 gap-2">
        <SideBar />
        <main className="flex flex-col flex-1 bg-gradient-to-t  from-zinc-900 from-40% via-zinc-900 via-60%  to-green-500/50  to-100% rounded-xl px-5">
          <Menu></Menu>
          <Highlight
            title="Popular Metal Songs..."
            subtitle="Listen to the most sucessful Metal songs!"
            img="/Album-covers/Sleeptokenbig.jpg"
          ></Highlight>
          <div className="flex flex-col py-6">
            <h2 className="text-3xl font-bold">Good afternoon</h2>
            <Topics></Topics>
          </div>
          <div></div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
