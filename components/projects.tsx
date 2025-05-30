import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "Medifajas",
    link: "https://medifajas.co/",
    mediaSource: "/Images/medifajas.png",
    poster: "/Images/medifajas.png",
  },
  {
    id: 2,
    name: "HCRS Tampa",
    link: "https://www.hcrstampa.com/",
    mediaSource: "/Images/HCRS.png",
    poster: "/Images/HCRS.png",
  },
  {
    id: 3,
    name: "La casa de los tarros",
    link: "https://casadelostarroscali.com/",
    mediaSource: "/Images/casadelostarros.png",
    poster: "/Images/casadelostarros.png",
  },
  /*{
    id: 4,
    name: "Sabajon Apolo (work in progress)",
    link: "https://sabajon-apolo.vercel.app/",
    mediaSource: "/Images/sabajon.png",
  },*/
];

export default function Projects() {
  return (
    <div
      id="Projects"
      className="flex flex-col pt-48 gap-20 items-center justify-center w-screen min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold">Projects</h1>
      </motion.div>
      <div className="grid grid-cols-1 gap-y-8 gap-x-32 md:grid-cols-2  md:pl-20">
        {projects.map((proj) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1 }}
            key={proj.id}
            className="flex items-center justify-center gap-10 w-[90vw] md:w-[30vw] lg:w-[20vw] h-full py-6 hover:scale-105 transition-all ease-in-out duration-300 px-4 rounded-xl border-2 border-text dark:border-darktext "
          >
            <a
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              className="gap-4 flex flex-col"
            >
              {proj.mediaSource.endsWith(".mp4") ? (
                <video
                  ref={(videoRef) => {
                    if (videoRef) {
                      const playVideo = () => videoRef.play();
                      const pauseVideo = () => {
                        videoRef.pause();
                        videoRef.currentTime = 0;
                      };

                      videoRef.onmouseenter = playVideo;
                      videoRef.onmouseleave = pauseVideo;
                      videoRef.focus = playVideo;
                      videoRef.blur = pauseVideo;
                      videoRef.ontouchstart = playVideo;
                      videoRef.ontouchend = pauseVideo;
                      videoRef.onclick = playVideo;
                      /* videoRef.onpointerenter = playVideo;
                      videoRef.onpointerleave = pauseVideo; */
                    }
                  }}
                  className="w-full aspect-video rounded-xl shadow-lg shadow-text dark:shadow-darktext "
                  muted
                  loop
                  preload="metadata"
                  poster={proj.poster}
                >
                  <source src={proj.mediaSource} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={proj.mediaSource}
                  alt={proj.name}
                  className="w-full aspect-video rounded-xl shadow-lg shadow-text dark:shadow-darktext "
                  width={640}
                  height={360}
                />
              )}
              <h2 className="text-2xl text-center font-bold">{proj.name}</h2>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
