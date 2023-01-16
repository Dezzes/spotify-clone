import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import Spotify_Logo_RGB_White from "../assets/Spotify_Logo_RGB_White.png";
import { links, SideBarLinks } from "../assets/constants";

function NavLinks() {
  return (
    <div className="mt-10">
      {links.map((item: SideBarLinks) => (
        <NavLink
          key={item.name}
          to={item.to}
          className="flex flex-row justify-start items-center my-8 test-sm font-medium text-gray-400 hover:text-cyan-400"
        >
          <item.icon className="w-6 h-6 mr-2" />
          {item.name}
        </NavLink>
      ))}
    </div>
  );
}

interface SideBarProps {
  handleOpenMenu?: () => void;
}

function SideBar({ handleOpenMenu }: SideBarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false);
  return (
    <>
      <div className="hidden md:flex flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img src={Spotify_Logo_RGB_White} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks />
      </div>
      <div className="absolute md:hidden block top-6 right-3">
        {isMobileMenuOpen ? (
          <RiCloseLine
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-6 h-6 text-white mr-2 z-10"
          />
        ) : (
          <HiOutlineMenu
            onClick={() => setIsMobileMenuOpen(true)}
            className="w-6 h-6 text-white mr-2 z-10"
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl
         from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 
         md-hidden smooth-transition ${isMobileMenuOpen ? "left-0" : "-left-full"}`}
      >
        <NavLinks />
      </div>
    </>
  );
}

SideBar.defaultProps = {
  handleOpenMenu: () => {},
};

export default SideBar;
