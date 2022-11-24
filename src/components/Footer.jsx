import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="fixed bottom-0 left-0  p-4 w-full h-20 bg-zinc-300 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600 z-[1000]">
        <span className="text-lg font-serif text-black-500 sm:text-center  dark:text-gray-400 font-bold">
          © 2022{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            NamasteDev🙏
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap  justify-center  h-6 space-x-[10px]  mt-3 text-sm text-black-500 dark:text-gray-400 sm:mt-0 font-bold">
          <li>
            <a href="#" className="mr-4 hover:underline   text-4xl md:mr-6 ">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline  text-4xl md:mr-6">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline text-4xl md:mr-6">
              <FaYoutube />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
