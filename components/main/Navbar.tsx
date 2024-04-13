import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import {
  HomeIcon,
  FingerPrintIcon,
  DocumentMagnifyingGlassIcon,
  CreditCardIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
/* import { ThemedButton } from "./ThemedButton"; */

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="https://www.equatoraw.xyz/"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/FOCG_Logo.png"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-extrabold font-mono text-xl ml-[10px] hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">
            Equator
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#projects" className="cursor-pointer">
              <DocumentMagnifyingGlassIcon className="text-[#9e56d8] mr-[20px] h-8 w-8" />
            </a>
            <a href="#testimonials" className="cursor-pointer">
              <FingerPrintIcon className="text-[#9e56d8] h-8 w-8" />
            </a>
            <a href="#home" className="cursor-pointer">
              <HomeIcon className="text-[#9e56d8] ml-[20px] h-8 w-8" />
            </a>
            <a href="#games" className="cursor-pointer">
              <GlobeAltIcon className="text-[#9e56d8] ml-[20px] h-8 w-8" />
            </a>
            <a href="#sponsors" className="cursor-pointer">
              <CreditCardIcon className="text-[#9e56d8] ml-[20px] h-8 w-8" />
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a href={social.link} target="_blank" key={social.name}>
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={30}
                height={30}
              />
            </a>
          ))}
          {/* <div style={{ borderRight: "1px dashed #999", height: "30px" }}></div> */}
          {/* <ThemedButton /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
