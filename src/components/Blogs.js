// src/components/Blogs.js

import React from "react";
import { blogs } from "../data";
import { BookOpenIcon } from "@heroicons/react/solid";

export default function Blogs() {
  return (
    <section id="blogs" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <BookOpenIcon className="w-10 mb-4 inline-block text-green-400" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Blog Posts
        </h1>
        <div className="flex flex-wrap -m-4">
          {blogs.map((blog) => (
            <a
              href={blog.link}
              key={blog.title}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:w-1/2 w-full"
            >
              <div className="h-full bg-gray-800 bg-opacity-40 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={blog.image}
                  alt={blog.title}
                />
                <h3 className="tracking-widest text-green-400 text-xs font-medium title-font mb-1">
                  {blog.subtitle}
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-2">
                  {blog.title}
                </h2>
                <p className="leading-relaxed text-base">{blog.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
