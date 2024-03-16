import React from "react";
import TestimonialsText from "../sub/TestimonialsText";
import Image, { StaticImageData } from "next/image";
import gubsheep from "../../public/avatar/gubsheep.jpg";
import ludens from "../../public/avatar/Ludens.jpeg";
import magicblocks from "../../public/avatar/Magicblock.png";
import syora from "../../public/avatar/SYORA.jpg";
import primodium from "../../public/avatar/Primodium.jpg";
import clsx from "clsx";

const color_ModerateViolet = "hsl(263, 55%, 52%)";
const color_VeryDarkGrayishBlue = "hsl(217, 19%, 35%)";
const color_VeryDarkBlackishBlue = "hsl(219, 29%, 14%)";
const color_White = "hsl(0, 0%, 100%)";
const color_LightGray = "hsl(0, 0%, 81%)";

interface DataType {
  className?: string;
  bgColor?: string;
  textColor?: string;
  avatarImg: StaticImageData;
  name: string;
  intro: string;
  heading: string;
}

const data: DataType[] = [
  {
    className: "md:col-span-2",
    bgColor: color_ModerateViolet,
    textColor: color_LightGray,
    avatarImg: gubsheep,
    name: "Gubsheep",
    intro: "Co-Founder of 0xPARC",
    heading:
      "The digital world is becoming host to more and more of our most meaningful interactions. But he bets people are unlikely to accept a version of the Metaverse managed by a corporation or any other centralized entity. Instead, what they want is a trusted neutral matrix for people to express themselves, self-organize and self-govern in a relatively uninhibited manner.",
  },
  {
    avatarImg: ludens,
    bgColor: color_VeryDarkGrayishBlue,
    textColor: color_LightGray,
    name: "Ludens",
    intro: "Co-Founder of Lattice",
    heading:
      "We can take the leap from intersubjective realities to interobjective realities.",
  },
  {
    className: "md:row-span-2",
    bgColor: color_White,
    textColor: color_VeryDarkGrayishBlue,
    avatarImg: syora,
    name: "SYORA",
    intro: "Co-Founder of PixeLAW",
    heading:
      "The boom during the last bubble was Decentralized Finance (DeFi), and some people say that the next bubble trend might be Autonomous World (AW). I also believe in this. That is to say, creating an AW is similar to creating a new planet. Aren’t they all fresh to you? That’s natural. Because you are a super early adopter.",
  },
  {
    bgColor: color_White,
    textColor: color_VeryDarkGrayishBlue,
    avatarImg: magicblocks,
    name: "Andrea Fortugno",
    intro: "Co-Founder & CEO of MagicBlock",
    heading:
      "And so essentially, it's this new paradigm where every game's become a platform by default.",
  },
  {
    className: "md:col-span-2",
    avatarImg: primodium,
    bgColor: color_VeryDarkBlackishBlue,
    textColor: color_LightGray,
    name: "0xhank",
    intro: "Builder of Primodium",
    heading:
      "We are entering an inflection point where people are starting to think harder about what a blockchain is, how we can modify blockchains, and how we can make them useful for more complicated, interesting, and diverse applications. Apps and gaming are generally frontier spaces for exploration, which is one of the reasons I've enjoyed them. ",
  },
];

function Card(props: DataType) {
  return (
    <div
      style={{ color: props.textColor, background: props.bgColor }}
      className={clsx(
        "p-6 rounded-lg h-auto flex flex-col gap-4 max-w-[400px] md:max-w-none",
        props.className,
      )}
    >
      <section className="flex gap-2">
        <Image
          src={props.avatarImg}
          alt="profile-img"
          className="rounded-full h-9 w-9 border-2"
        />
        <div className="text-left">
          <div className="text-lg font-semibold">{props.name}</div>
          <p className="text-[16px] opacity-50">{props.intro}</p>
        </div>
      </section>

      <h3 className="font-semibold text-xl">{props.heading}</h3>
    </div>
  );
}

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="flex flex-col items-center justify-center gap-2 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <TestimonialsText />
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <figure className="max-w-screen-md mx-auto">
          <svg
            className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
        </figure>
        <div className="grid gap-6 md:grid-cols-4 md:grid-rows-2 max-w-[1200px] ">
          {data.map((data, index) => (
            <Card
              bgColor={data.bgColor}
              textColor={data.textColor}
              avatarImg={data.avatarImg}
              heading={data.heading}
              key={index}
              name={data.name}
              intro={data.intro}
              className={data.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
