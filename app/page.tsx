"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import GradientAnimation from "./components/GradientAnimation"; // Import the GradientAnimation component

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="flex flex-1 flex-col items-start justify-start px-4 py-10 mx-auto max-w-3xl">
        <div className="w-full text-left mb-4">
          <h2 className="text-5xl font-extrabold mb-4">
            Control your Mac simply by asking.
          </h2>
          <div className="relative w-full flex items-end justify-start">
            <GradientAnimation />
            <span className="absolute top-0 right-0 px-1 py-2.5 border border-[#F56300] text-[#F56300] rounded-full inline-block" style={{ width: '10' }}>
              Coming Soon
            </span>
          </div>
        </div>
        <div className="w-full md:flex md:items-start md:justify-between">
          <div className="md:w-2/3 text-left">
            <p className="text-2xl mb-8">
              With MacGic, you can automate your Mac using voice or typed commands. No more navigating through menus or searching through folders within folders.
            </p>
            <p className="text-2xl mb-8">
              Elevate your productivity with MacGic.
            </p>
            <div>
              <a href="#features" className="text-lg underline flex items-center">
                Learn More <span className="ml-2">↓</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}