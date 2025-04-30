import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        
        {/* Left - Contact Info */}
        <div className="lg:w-1/2 md:w-1/2 w-full bg-gray-900 rounded-lg overflow-hidden p-10 flex flex-col justify-start mb-10 md:mb-0">
          <h2 className="title-font font-semibold text-white tracking-widest text-lg mb-4">
            Contact Me
          </h2>
          <p className="text-gray-400 mb-2">
            <strong>Email:</strong> tripathidipesh13@gmail.com
          </p>
          <p className="text-gray-400 mb-2">
            <strong>Phone:</strong> +1 (605) 728-8281
          </p>
          <div className="flex mt-4 space-x-4">
            <a
              href="https://linkedin.com/in/dipesh-tripathi-879845214/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Dipeshtripathi13"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right - Hire Me Form */}
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/2 md:w-1/2 w-full flex flex-col md:py-8"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5 text-gray-400">
            If you're interested in working together or have any questions, drop me a message. I'd love to hear from you!
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
