/* import {
 *   Backend_skill,
 *   Frontend_skill,
 *   Full_stack,
 *   Other_skill,
 *   Skill_data,
 * } from "@/constants"; */
import React from "react";
/* import SkillDataProvider from "../sub/SkillDataProvider"; */
import TestimonialsText from "../sub/TestimonialsText";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
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
          <blockquote>
            <p className="text-4xl font-medium text-gray-900 dark:text-white">
              It's a natural progression of the internet, Gubsheep said. "The
              digital world is becoming host to more and more of our most
              meaningful interactions," he said. But he bets people are unlikely
              to accept a version of the "Metaverse" managed by a corporation or
              any other centralized entity.Instead, what they want is "a trusted
              neutral matrix for people to express themselves, self-organize and
              self-govern in a relatively uninhibited manner," he argues. "To
              me, this is a stronger vision of the Metaverse, and I hope 0xPARC
              's experiments will contribute."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <img
              className="w-6 h-6 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div className="text-2xl pr-3 font-medium text-gray-900 dark:text-white">
                Gubsheep
              </div>
              <div className="pl-3 text-xl font-light text-gray-500 dark:text-gray-400">
                Co-Founder at 0xPARC
              </div>
            </div>
          </figcaption>
        </figure>
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/equator.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
