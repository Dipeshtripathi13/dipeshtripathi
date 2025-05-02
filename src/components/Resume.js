// src/components/Resume.js

import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="bg-gray-900 text-gray-400 body-font">
      <div className="container px-5 py-10 mx-auto text-center">
        <h1 className="text-4xl font-medium title-font text-white mb-4">
          My Resume
        </h1>
        <p className="mb-8 leading-relaxed max-w-xl mx-auto">
          Below is a view of my resume. You can also download the PDF version for reference.
        </p>
        <div className="flex justify-center mb-6">
          <a
            href="./dipeshtripathi/assets/resume_DIPESH_TRIPATHI.pdf"
            download
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Download Resume
          </a>
        </div>
        <div className="w-full max-w-4xl mx-auto">
          <iframe
          src={`${process.env.PUBLIC_URL}/assets/resume_DIPESH_TRIPATHI.pdf`}
            title="Dipesh Tripathi Resume"
            width="100%"
            height="600px"
            className="border-2 border-gray-700 rounded"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
