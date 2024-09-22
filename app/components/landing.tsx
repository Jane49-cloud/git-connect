import React from "react";
import Link from "next/link";
import Logo from "../assets/logoGc.jpeg";
import hero from "../assets/git-connect.jpg";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="circle animate-spin"></div>
        <div className="circle animate-spin slower"></div>
        <div className="circle animate-spin reverse"></div>
        <div className="circle animate-spin slower"></div>
      </div>

      {/* Main Content */}
      <header className="relative bg-black shadow z-10 border-b border-gray-800">
        <div className="container mx-auto px-3 py-2 flex justify-between items-center">
          <div className="flex items-center justify-center">
            <Image
              className="w-12 h-full object-cover z-10 rounded-full"
              src={Logo}
              alt="Hero Banner"
            />

            <h1 className="text-3xl font-bold text-blue-600">GitConnect</h1>
          </div>
          <div>
            <Link href="/signin" className="text-blue-600 font-semibold px-4">
              Sign In
            </Link>
            <Link
              href="/signup"
              className="bg-blue-600 text-white font-semibold px-4 py-2 rounded"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      <main className="relative container mx-auto px-4 py-12 text-center z-10">
        <h2 className="text-4xl font-bold text-gray-200 mb-4">
          Connect with Developers Worldwide
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          Share your projects, collaborate with others, and grow your developer
          portfolio.
        </p>
        <Link
          href="/signup"
          className="bg-action text-white font-semibold px-8 py-4 rounded-full text-lg"
        >
          Get Started Now
        </Link>
      </main>

      <div className="relative z-10 flex container mx-auto gap-10 bg-primary">
        <section className="">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-gray-200 text-center mb-8">
              Why Use GitConnect?
            </h3>
            <div className="grid grid-cols-1 gap-8">
              <div className="p-6  border border-sec rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-gray-200 mb-2">
                  Developer Profiles
                </h4>
                <p className="text-gray-300">
                  Showcase your skills, experience, and GitHub repositories in a
                  structured portfolio.
                </p>
              </div>
              <div className="p-6  border border-sec rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-gray-200 mb-2">
                  Collaboration
                </h4>
                <p className="text-gray-300">
                  Engage with other developers by sharing posts, liking, and
                  commenting on technical discussions.
                </p>
              </div>
              <div className="p-6  border border-sec rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-gray-200 mb-2">
                  Community Support
                </h4>
                <p className="text-gray-300">
                  Get help from developers worldwide on your projects and
                  challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="">
          <Image
            className="h-[500px] w-[500px] object-cover z-10 rounded-full animate-pulse"
            src={hero}
            alt="Hero Banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
