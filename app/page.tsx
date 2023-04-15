import React from "react";
import Versus from "@/components/Versus";

const Home = () => {
  return (
    <div className=" w-full h-full min-h-screen bg-gradient-to-r from-gray-500 to-gray-700">
      <div className="bg-gray-900 min-h-screen">
        <div className="container mx-auto p-4">
          <h1 className="text-white text-4xl font-bold mb-4 text-center">
            Welcome to the Star Wars Website
          </h1>
          <p className="text-gray-400 text-xl mb-8">
            Explore the galaxy with us!
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
