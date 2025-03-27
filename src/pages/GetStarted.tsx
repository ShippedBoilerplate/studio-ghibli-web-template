import React from "react";
import Navbar from "../components/Navbar";
import BackgroundImage from "@/components/BackgroundImage";

const GetStarted = () => {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0">
        <BackgroundImage />
      </div>
      <div className="relative z-10">
        <Navbar />
        <div className="pt-32 px-6 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-libre font-bold text-white mb-8">
            Begin Your Journey
          </h1>
          <p className="text-xl font-crimson text-white mb-10">
            You're one step closer to turning your dreams into reality.
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8 text-left">
            <h2 className="text-2xl font-libre font-bold text-gray-800 mb-4">
              Create Your Account
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="fullname"
                  className="block text-gray-700 font-crimson text-lg mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-crimson"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-crimson"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-crimson text-lg mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-crimson"
                />
              </div>

              <button
                type="submit"
                className="bg-coral hover:bg-opacity-90 text-white font-crimson font-medium px-8 py-3 rounded-md text-lg transition-all duration-300 w-full"
              >
                Start Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
