import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 body-font">
      <div className="container px-5 py-6 mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-gray-400 text-center sm:text-left">
          © {new Date().getFullYear()} Dipesh Tripathi — All Rights Reserved.
        </p>
        <p className="text-sm text-gray-400 mt-2 sm:mt-0 sm:text-right">
          Built with React & Tailwind CSS · Deployed via GitHub Pages
        </p>
      </div>
    </footer>
  );
}
