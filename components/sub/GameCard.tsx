import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const GameCard = ({ src, title, description }: Props) => {
  return (
    <a
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
      href="#"
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="text-theme relative p-4">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="mt-2">{description}</p>
      </div>
    </a>
  );
};

export default GameCard;
