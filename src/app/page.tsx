"use client";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import MainHome from "./components/MainHome";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import playButtonReducer from "./lib/play";
import { useState } from "react";

const store = configureStore({
  reducer: {
    playButton: playButtonReducer,
  },
});

export default function Home() {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };
  return (
    <div className="flex flex-col h-screen p-2 pb-0">
      <Provider store={store}>
        <div className="flex flex-1 gap-2">
          <SideBar />
          <MainHome></MainHome>
        </div>
        <Footer active={active} toggleActive={toggleActive} />
      </Provider>
    </div>
  );
}

export type RootState = ReturnType<typeof store.getState>;
