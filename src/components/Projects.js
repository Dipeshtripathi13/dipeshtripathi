// src/components/Projects.js

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <CodeIcon className="w-10 mb-4 inline-block text-green-400" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Projects I've Worked On
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300 mb-10">
          Here are some of the technical projects I've built as part of my academic research, professional roles, and personal learning. Each project reflects my passion for AI, data engineering, and full-stack development.
        </p>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.title}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:w-1/2 w-full"
            >
              <div className="h-full bg-gray-800 bg-opacity-40 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={project.image}
                  alt={project.title}
                />
                <h3 className="tracking-widest text-green-400 text-xs font-medium title-font mb-1">
                  {project.subtitle}
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-2">
                  {project.title}
                </h2>
                <p className="leading-relaxed text-base">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
