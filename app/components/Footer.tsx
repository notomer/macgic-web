"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./drawer";
import confetti from "canvas-confetti";

const Footer: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDownload = () => {
    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    // Logic to download the file
    const link = document.createElement("a");
    link.href = "/path-to-your-file.zip"; // Replace with the path to your file
    link.download = "file.zip"; // Replace with the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Close the drawer after download
    setIsDrawerOpen(false);
  };

  return (
    <footer className="w-full py-6 border-t border-gray-300 dark:border-gray-700 bg-[#F5F5F5] dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-sm font-thin text-gray-600 dark:text-gray-400 mb-2">Company</h3>
            <ul>
              <li><a href="#" className="text-gray-800 dark:text-gray-100 hover:text-gray-500 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-800 dark:text-gray-100 hover:text-gray-500 transition-colors">Blog</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-sm font-thin text-gray-600 dark:text-gray-400 mb-2">Contact</h3>
            <ul>
              <li><a href="#" className="text-gray-800 dark:text-gray-100 hover:text-gray-500 transition-colors">Email Now</a></li>
              <li><a href="https://github.com/notomer" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-100 hover:text-gray-500 transition-colors">GitHub</a></li>
              <li><a href="https://linkedin.com/in/notomer" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-100 hover:text-gray-500 transition-colors">LinkedIn</a></li>
              <li><a href="https://notomer.github.io" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-100 hover:text-gray-500 transition-colors">Personal Portfolio</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-end items-start">
            <button
              className="text-sm font-light px-4 py-2 border border-gray-800 dark:border-gray-100 text-gray-800 dark:text-gray-100 rounded-full inline-block mt-2 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-100 dark:hover:text-black transition-colors"
              onClick={(e) => {
                e.preventDefault();
                setIsDrawerOpen(true);
              }}
            >
              Download
            </button>
          </div>
          <div className="w-full text-center mt-6"></div>
        </div>
        <div className="flex justify-between items-center">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <p className="text-gray-800 dark:text-gray-100 hover:text-gray-500 transition-colors">Made by Omer. With Love ❤️ (and ChatGPT)</p>
        </div>
      </div>
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Confirm Download</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
            <DrawerClose asChild>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 p-2 rounded-full border border-gray-800 dark:border-white text-gray-800 dark:text-white flex items-center justify-center"
              >
                ✕
              </button>
            </DrawerClose>
          </DrawerHeader>
          <DrawerFooter>
            <button
              onClick={handleDownload}
              className="px-4 py-2 border border-gray-800 dark:border-gray-100 text-gray-800 dark:text-gray-100 rounded-full"
            >
              Confirm Download
            </button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </footer>
  );
};

export default Footer;