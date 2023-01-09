import React from "react";
import Discover from "./components/Discover";
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";
import TopPlay from "./components/TopPlay";

function App() {
  return (
    <div className="relative flex">
      <SideBar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <SearchBar />
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row">
          <div className="flex-1 h-fit pb-40">
            <Discover />
          </div>
          <div className="xl-sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
