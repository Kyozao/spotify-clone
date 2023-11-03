"use client";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import { useState } from "react";
import MainHome from "./components/MainHome";

export default function Home() {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };
  return (
    <div className="flex flex-col h-screen p-2 pb-0">
      <div className="flex flex-1 gap-2">
        <SideBar />
        <MainHome></MainHome>
      </div>
      <Footer active={active} toggleActive={toggleActive} />
    </div>
  );
}
