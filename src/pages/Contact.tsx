import React from "react";
import Navbar from "../components/Navbar";
import BackgroundImage from "../components/BackgroundImage";
const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 relative">
      <div className="absolute inset-0 z-0">
        <BackgroundImage />
      </div>
      <div className="relative z-20">
        <Navbar />
      </div>
      <div className="relative z-10 pt-32 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-libre font-bold text-white mb-8">
          Contact Us
        </h1>
        <p className="text-xl font-crimson text-white mb-10">
          Have questions or want to learn more? We'd love to hear from you.
        </p>

        <div className="bg-amber-50 rounded-lg shadow-lg p-8">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-crimson text-lg mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-amber-100 focus:ring-offset-2 font-crimson"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-crimson text-lg mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-amber-100 focus:ring-offset-2 font-crimson"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-crimson text-lg mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-amber-100 focus:ring-offset-2 font-crimson"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-coral hover:bg-opacity-90 text-white font-crimson font-medium px-8 py-3 rounded-md text-lg transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
