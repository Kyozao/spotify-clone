"use client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };
  return (
    <div className="flex flex-col h-screen p-2 pb-0">
        <div className="flex flex-1 gap-2">

        </div>

    </div>
  );
}

export type RootState = ReturnType<typeof store.getState>;
