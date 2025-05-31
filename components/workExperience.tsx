import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const works = [
  /* {
    id: 1,
    name: "Web Developer",
    place: "Freelancer",
    time: "May 2024 - Present",
    desciption:
      "Develop websites that express the essence of the client, using different technologies that adapt to the needs and requirements.",
    logo: "/Images/kathe-icon-clean.png", // Asegúrate que la ruta sea correcta
    orientation: "left", // O 'right'
  }, */
  {
    id: 2,
    name: "Technical Support", // Capitalizado para consistencia
    place: "Simbiosystemas",
    time: "September 2022 - present",
    desciption:
      "Technical support for various types of software and hardware, Customer service, Knowledge of WordPress and Elementor, Customer training, Software development.",
    logo: "/Images/simbiosystemas.png",
    orientation: "left",
  },
  {
    id: 3,
    name: "Professional Practice", // Capitalizado para consistencia
    place: "Universidad del valle",
    time: "August 2021 - November 2021",
    desciption:
      "Design and implement user interfaces for a website that meet all client requirements while also complying with programming standards.",
    logo: "/Images/univalle.jpg",
    orientation: "left",
  },
  // Puedes añadir más experiencias aquí. Para 2 columnas, un número par se verá más equilibrado.
];

export default function WorkExperience() {
  return (
    <div
      id="Work-Experience"
      // MODIFICADO: Añadido px-4 para padding en móviles
      className="flex flex-col pt-48 gap-20 items-center justify-center w-screen min-h-screen px-4"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-center">Work Experience</h1>{" "}
        {/* Asegurado text-center */}
      </motion.div>

      {/* MODIFICADO: Clases del contenedor de la grilla */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 xl:gap-x-16 gap-y-12 max-w-screen-xl w-full">
        {" "}
        {/* Aumentado max-w a screen-xl por si el contenido es ancho */}
        {works.map((work) => (
          // MODIFICADO: Clases de la tarjeta de experiencia (motion.div)
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1 }}
            key={work.id}
            // Removidos anchos fijos, ajustado gap, añadido padding y estilos de tarjeta
            className={`flex flex-row items-start md:items-center justify-start gap-4 md:gap-6 h-full p-6 rounded-lg border border-gray-300 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300
                        ${
                          work.orientation === "right"
                            ? "md:flex-row-reverse"
                            : ""
                        }`} // flex-row-reverse aplica en md y superior si es 'right'
          >
            <Image
              src={work.logo}
              alt={`${work.place} logo`} // Texto alt más descriptivo
              // Ajustado tamaño de imagen, añadido object-contain y flex-shrink-0
              className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-md flex-shrink-0 mt-1 md:mt-0"
              width={96} // Corresponde a w-24
              height={96} // Corresponde a h-24
            />
            <div
              className={`flex flex-col gap-1 ${
                // La alineación del texto dentro del div de texto.
                // Si la orientación es 'right' (imagen a la derecha), el texto se alineará a la derecha en 'md' y superior.
                work.orientation === "right" ? "md:text-right" : "text-left"
              }`}
            >
              <h2 className="text-xl md:text-2xl font-bold">{work.name}</h2>
              <h3 className="text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-400">
                {work.place}
              </h3>{" "}
              {/* Ajustado font-semibold y color */}
              <h4 className="text-base md:text-lg font-medium text-gray-600 dark:text-gray-500">
                {work.time}
              </h4>{" "}
              {/* Ajustado font-medium y color */}
              <p className="text-sm md:text-base text-gray-800 dark:text-gray-300 mt-2">
                {work.desciption}
              </p>{" "}
              {/* Ajustado tamaño y color, añadido margen superior */}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
