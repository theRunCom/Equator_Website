import React from "react";
import { RxDiscordLogo, RxGithubLogo, RxTwitterLogo } from "react-icons/rx";
import { IoDocumentTextSharp, IoGameController } from "react-icons/io5";
import { ImBlog } from "react-icons/im";
import { CiMail } from "react-icons/ci";
import { SiGithubsponsors } from "react-icons/si";
import { MdOutlineEmojiObjects } from "react-icons/md";

const Footer = () => {
  const d = new Date();
  const currentYear = d.getFullYear();

  return (
    <footer className="absolute w-full">
      <div className="bg-transparent shadow-lg p-[15px] text-theme">
        <div className="w-full flex flex-col items-center justify-center m-auto">
          <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
            <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
              <div className="font-bold text-[16px]">Community</div>
              <a
                href="https://twitter.com/EquatorFOCG"
                target="_blank"
                className="flex flex-row items-center my-[15px] cursor-pointer"
              >
                <RxTwitterLogo />
                <span className="text-[15px] ml-[6px]">X</span>
              </a>
              <a
                href="https://github.com/Equator-FOCG"
                target="_blank"
                className="flex flex-row items-center my-[15px] cursor-pointer"
              >
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">Github</span>
              </a>
              <a
                href="https://discord.gg/68uQz9DXWW"
                target="_blank"
                className="flex flex-row items-center my-[15px] cursor-pointer"
              >
                <RxDiscordLogo />
                <span className="text-[15px] ml-[6px]">Discord</span>
              </a>
            </div>
            <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
              <div className="font-bold text-[16px]">Quick Links</div>
              <a
                href="https://docs.equatoraw.xyz/docs/home/introduction"
                className="flex flex-row items-center my-[15px] cursor-pointer"
              >
                <IoDocumentTextSharp />
                <span className="text-[15px] ml-[6px]">Docs</span>
              </a>
              <a
                href="https://docs.equatoraw.xyz/blog"
                className="flex flex-row items-center my-[15px] cursor-pointer"
              >
                <ImBlog />
                <span className="text-[15px] ml-[6px]">Blogs</span>
              </a>
              <a
                href="https://hub.composablelabs.io/games"
                className="flex flex-row items-center my-[15px] cursor-pointer"
              >
                <IoGameController />
                <span className="text-[15px] ml-[6px]">Games</span>
              </a>
            </div>
            <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
              <div className="font-bold text-[16px]">About</div>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <SiGithubsponsors />
                <span className="text-[15px] ml-[6px]">Support</span>
              </p>
              <a
                href="https://docs.equatoraw.xyz/docs/home/about"
                className="flex flex-row items-center my-[15px] cursor-pointer"
              >
                <MdOutlineEmojiObjects />
                <span className="text-[15px] ml-[6px]">Introduction</span>
              </a>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <CiMail />
                <span className="text-[15px] ml-[6px]">
                  theRunCom@protonmail.com
                </span>
              </p>
            </div>
          </div>

          <div className="mb-[20px] text-[15px] text-center">
            &copy; Equator {currentYear} Inc. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
