import React, { useState } from "react";
import {FaUserAlt} from  'react-icons/fa'; 
// Icons
import {
  RiHome3Line,
  RiFileCopyLine,
  RiWalletLine,
  RiPieChartLine,
  RiMore2Fill,
  RiCloseFill,
} from "react-icons/ri";

const Sidebar = ({user,logout}) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div
        className={`bg-primary-900 h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all z-50 duration-300 dark:bg-gray-700 ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        {/* Profile */}
        <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh] z-[1000]">
          <img
            src={user.picture}
            className="w-20 h-20 object-cover rounded-full ring-2 ring-gray-300"
            alt="img"
          />
          <h1 className="text-xl text-white font-bold">{user.name}</h1>
          <button
          onClick={() => logout({ returnTo: window.location.origin })} 
          className=" py-2 px-4 rounded-full text-white">
            Logout
          </button>
        </div>
        {/* Nav */}
        <div className="bg-indigo-900 p-8 rounded-tr-[100px] h-[70vh] overflow-y-scroll flex flex-col justify-between gap-8 ">
          <nav className="flex flex-col gap-8">
            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiHome3Line /> Dasboard
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <FaUserAlt /> Profile
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiWalletLine /> Anything
            </a>
          </nav>
        </div>
      </div>
      {/* Button mobile */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden fixed right-4 bottom-[5.5rem] text-2xl bg-primary-900 p-2.5 rounded-full text-white z-[10001]"
      >
        {showMenu ? <RiCloseFill /> : <RiMore2Fill />}
      </button>
    </>
  );
};

export default Sidebar;