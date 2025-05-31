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
  /* {
    id: 4,
    name: "Sabajon Apolo (work in progress)",
    link: "https://sabajon-apolo.vercel.app/",
    mediaSource: "/Images/sabajon.png",
    poster: "/Images/sabajon.png", // Añadir poster si es video
  }, */
  // Para un diseño de 3 columnas, idealmente tendrías proyectos en múltiplos de 3 (3, 6, 9, etc.)
  // Puedes añadir más proyectos aquí.
];

export default function Projects() {
  return (
    <div
      id="Projects"
      // MODIFICADO: Añadido px-4 para padding en móviles
      className="flex flex-col pt-48 gap-20 items-center justify-center w-screen min-h-screen px-4"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-center">Projects</h1>{" "}
        {/* Asegurado text-center */}
      </motion.div>

      {/* MODIFICADO: Clases del contenedor de la grilla */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-screen-xl w-full">
        {projects.map((proj) => (
          // MODIFICADO: Clases del elemento de la grilla (motion.div)
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1 }}
            key={proj.id}
            // Removidos anchos fijos (w-[...]), gap-10 (ya que el 'a' tiene su propio gap interno)
            // 'flex items-center justify-center' no es estrictamente necesario aquí si 'a' ocupa todo el espacio.
            // Mantenemos la estructura de la tarjeta con padding, borde, etc.
            className="h-full py-6 hover:scale-105 transition-all ease-in-out duration-300 px-4 rounded-xl border-2 border-text dark:border-darktext "
          >
            <a
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              className="gap-4 flex flex-col w-full h-full" // Asegura que el enlace ocupe el espacio del motion.div
            >
              {proj.mediaSource.endsWith(".mp4") ? (
                <video
                  ref={(videoRef) => {
                    // Lógica de reproducción de video se mantiene
                    if (videoRef) {
                      const playVideo = () => videoRef.play();
                      const pauseVideo = () => {
                        videoRef.pause();
                        videoRef.currentTime = 0;
                      };

                      videoRef.onmouseenter = playVideo;
                      videoRef.onmouseleave = pauseVideo;
                      videoRef.ontouchstart = playVideo; // Considera la experiencia en táctil
                      // videoRef.focus = playVideo; // focus/blur pueden ser conflictivos con otros eventos
                      // videoRef.blur = pauseVideo;
                      // videoRef.onclick = playVideo; // onclick podría interferir con el enlace si no se maneja con cuidado
                    }
                  }}
                  className="w-full aspect-video rounded-xl shadow-lg shadow-text dark:shadow-darktext "
                  muted
                  loop
                  preload="metadata"
                  poster={proj.poster} // Asegúrate que todos los videos tengan un poster
                >
                  <source src={proj.mediaSource} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={proj.mediaSource}
                  alt={proj.name}
                  className="w-full aspect-video rounded-xl shadow-lg shadow-text dark:shadow-darktext "
                  width={640} // Proporciona un ancho y alto base para la relación de aspecto
                  height={360}
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, 30vw" // Ayuda a Next/Image a optimizar
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
