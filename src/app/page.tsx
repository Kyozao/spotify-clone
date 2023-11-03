"use client";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Topics from "./components/Topics";
import Highlight from "./components/Highlight";
import Menu from "./components/Menu";
import Card from "./components/Card";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div className="flex flex-col h-screen p-2 pb-0">
      <div className="flex md:hidden w-full h-10 px-3 text-zinc-50">
        <button>
          <span className="material-symbols-outlined scale-125 ">menu</span>
        </button>
      </div>
      <div className="flex flex-1 gap-2">
        <SideBar />
        <main className="flex flex-col flex-1 bg-gradient-to-t  from-neutral-950 from-70% via-neufrom-neutral-950 via-60%  to-green-500/50  to-100% rounded-xl px-5">
          <Menu></Menu>
          <Highlight
            title="Popular Metal Songs..."
            subtitle="Listen to the most sucessful Metal songs!"
            img="/Album-covers/Sleeptokenbig.jpg"
          ></Highlight>
          <div className="flex flex-col pt-6">
            <h2 className="text-3xl font-bold">Good Afternoon</h2>
            <Topics></Topics>
          </div>
          {/*Cards Here*/}
          <div className="flex flex-col pt-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold">Made For You</h2>
              <a href="" className="text-base font-semibold text-zinc-400">
                Show all
              </a>
            </div>
            <Card></Card>
          </div>
        </main>
      </div>
      <Footer active={active} toggleActive={toggleActive} />
    </div>
  );
}
