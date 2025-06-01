"use client";

import React from "react";
import { BackgroundGradientAnimation } from "@/components/background-gradient-animation";
import Image from "next/image";
import { motion } from "framer-motion";

/* import { Parallax } from "react-scroll-parallax";
 */
// (...) otras importaciones y código del componente

export default function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundGradientAnimation containerClassName="h-screen" className="">
      <div
        id="Inicio"
        className="absolute z-10 inset-0 flex items-center justify-center text-text dark:text-darktext font-bold lg:pointer-events-none text-2xl text-center md:text-3xl lg:text-5xl mt-14 md:-mt-24"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center pt-28 md:pt-0  gap-10 w-screen h-screen "
        >
          <div className="flex w-[90vw] md:w-[20vw] flex-col justify-center gap-10 items-center md:items-right">
            <h1 className="text-3xl font-bold w-full text-center md:text-center">
              Juan Camilo Lopez
            </h1>

            <div className="w-full aspect-square bg-white rounded-full p-4 sm:p-5 md:p-6 shadow-lg flex items-center justify-center overflow-hidden">
              <Image
                src="/Images/logo-transparent.png"
                alt="Logo"
                width={500}
                height={500}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          <div className="flex w-[90vw] md:w-[40vw] items-center justify-start">
            <p className="text-xl font-bold text-left">
              {" "}
              I am a{" "}
              <b className="text-blue-600 dark:text-blue-400">
                software developer
              </b>
              , With hands-on experience in{" "}
              <b className="text-blue-600 dark:text-blue-400">
                full-stack development.
              </b>{" "}
              I have designed user interfaces and managed websites using{" "}
              <b className="text-blue-600 dark:text-blue-400">
                WordPress and Elementor.
              </b>{" "}
              I am passionate about exploring: {""}
              <b className="text-blue-600 dark:text-blue-400">
                UX/UI design, AI, and video games.
              </b>
              {""} I thrive in multidisciplinary teams and am driven to build
              web experiences that are both interactive and engaging.
            </p>
          </div>
        </motion.div>
      </div>
    </BackgroundGradientAnimation>
  );
}
