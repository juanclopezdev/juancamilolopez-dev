import React from "react";
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaPython,
  FaGithub,
  FaWordpress,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiPowerapps } from "react-icons/si";
import { RiNextjsFill, RiJavascriptFill, RiFlutterFill } from "react-icons/ri";
import { FaFileExcel } from "react-icons/fa6";
import { motion } from "framer-motion";

const technologies = [
  { id: 1, name: "React", icon: FaReact, link: "https://es.react.dev/" },
  {
    id: 2,
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    link: "https://tailwindcss.com/",
  },
  {
    id: 3,
    name: "TypeScript",
    icon: SiTypescript,
    link: "https://www.typescriptlang.org/",
  },
  { id: 4, name: "Next.js", icon: RiNextjsFill, link: "https://nextjs.org/" },
  {
    id: 5,
    name: "CSS3",
    icon: FaCss3Alt,
    link: "https://developer.mozilla.org/es/docs/Web/CSS",
  },
  {
    id: 6,
    name: "HTML5",
    icon: FaHtml5,
    link: "https://developer.mozilla.org/es/docs/Web/HTML",
  },
  { id: 7, name: "Python", icon: FaPython, link: "https://www.python.org/" },
  {
    id: 8,
    name: "JavaScript",
    icon: RiJavascriptFill,
    link: "https://developer.mozilla.org/es/docs/Web/JavaScript",
  },
  { id: 9, name: "GitHub", icon: FaGithub, link: "https://github.com/" },
  {
    id: 10,
    name: "Flutterflow", // Asumiendo que quisiste decir FlutterFlow
    icon: RiFlutterFill,
    link: "https://www.flutterflow.io/",
  },
  {
    id: 11,
    name: "WordPress",
    icon: FaWordpress,
    link: "https://es.wordpress.com/",
  },
  {
    id: 12,
    name: "Excel",
    icon: FaFileExcel,
    link: "https://www.microsoft.com/es-co/microsoft-365/excel",
  },
  // Puedes añadir más tecnologías aquí si es necesario para llenar las 3 columnas de manera uniforme
  // Por ejemplo, si tienes 12, se dividirán perfectamente en 3 columnas (4 filas de 3).
  // Si tienes 10 u 11, la última fila no estará completa.
];

export default function Technologies() {
  return (
    <div
      id="Technologies"
      className="flex flex-col pt-48 gap-20 items-center justify-center w-screen min-h-screen px-4" // Añadido px-4 para padding en móviles
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-center">
          {" "}
          {/* Asegurado text-center para el título */}
          Technologies
        </h1>
      </motion.div>
      {/* MODIFICADO: Clases del contenedor de la grilla */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-8 sm:gap-x-12 md:gap-x-16 lg:gap-x-20 gap-y-12 max-w-screen-lg w-full">
        {technologies.map((tech) => (
          <a key={tech.id} href={tech.link} target="_blank" rel="noreferrer">
            {/* MODIFICADO: Clases del elemento de la grilla (motion.div) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1 }}
              // Removidos los anchos fijos w-[...], ajustado el gap interno
              className="flex flex-col sm:flex-row items-center hover:scale-105 transition-all ease-in-out justify-center sm:justify-start gap-4 sm:gap-6 h-32 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" // Añadido p-4, rounded-lg y hover background
            >
              <tech.icon className="w-16 h-16 sm:w-20 sm:h-20 text-white-500" />{" "}
              {/* Reducido tamaño de icono en móvil, añadido color */}
              <h2 className="text-lg sm:text-xl font-bold text-center sm:text-left mt-2 sm:mt-0">
                {" "}
                {/* Nombre visible en móvil, ajustado tamaño y alineación */}
                {tech.name}
              </h2>
            </motion.div>
          </a>
        ))}
      </div>
    </div>
  );
}
