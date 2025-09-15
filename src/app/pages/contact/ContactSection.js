"use client";

import emailjs from "emailjs-com";
import { useRef } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_scfcqel", // Service ID
        "template_n9j6b6n", // Template ID
        form.current, // form reference
        "2J0uI8GNTd04EHepv" // Public Key
      )
      .then(
        (result) => {
          console.log("Success", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("Error", error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section id="ContactSection" className="px-6 py-16 bg-base-200">
      <div className="max-w-4xl mx-auto">
        {/* Title + Social */}
        <div className="flex flex-col items-center text-center gap-6 mb-12">
          <h1 className="font-bold text-4xl">Connect With Me</h1>
          <div className="flex space-x-8 text-2xl">
            <a
              href="https://github.com/yourusername"
              className="hover:text-gray-600 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              className="hover:text-blue-500 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/yourusername"
              className="hover:text-pink-500 transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card bg-base-100 shadow-lg border border-base-300 rounded-2xl p-8">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="form-control">
              <label className="label font-semibold">Name</label>
              <input
                type="text"
                name="from_name"
                placeholder="John Doe"
                className="input input-bordered w-full bg-gray-900 border border-gray-500 rounded-md p-2"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold">Email</label>
              <input
                type="email"
                name="from_email"
                placeholder="you@example.com"
                className="input input-bordered w-full bg-gray-900 border border-gray-500 rounded-md p-2"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold">Message</label>
              <textarea
                name="message"
                className="textarea textarea-bordered w-full h-32 resize-none bg-gray-900 border border-gray-500 rounded-md p-2"
                required
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary bg-blue-600 rounded-md w-full text-lg font-medium py-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
