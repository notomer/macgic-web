"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="flex flex-1 flex-col items-start justify-center px-4 py-10 mx-auto max-w-3xl">
        <h2 className="text-5xl font-extrabold mb-4">
          You don’t have to be a brain surgeon to work at MacGic.
        </h2>
        <p className="text-2xl mb-8">
          We are looking for talent across all disciplines to solve new
          challenges to increase our bandwidth for interfacing with the world.
          Search open roles to see how you can contribute.
        </p>
        <div>
          <a href="#features" className="text-lg underline flex items-center">
            See All Open Roles <span className="ml-2">↓</span>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}