"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
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

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => setMounted(true), []);

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

  if (!mounted) return null;

  return (
    <header className="w-full py-4 bg-white dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            MacGic
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <nav className="flex items-center space-x-4">
            <a
              href="#"
              className="relative group text-gray-800 dark:text-white"
            >
              <span className="hover-trigger">About</span>
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-gray-800 dark:bg-gray-100 transition-all duration-150 group-hover:w-full group-hover:left-0"></span>
            </a>
            <a
              href="#"
              className="relative group text-gray-800 dark:text-white"
            >
              <span className="hover-trigger">Updates</span>
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-gray-800 dark:bg-gray-100 transition-all duration-150 group-hover:w-full group-hover:left-0"></span>
            </a>
            <a
              href="#"
              className="px-4 py-2 border border-gray-800 dark:border-gray-100 text-gray-800 dark:text-gray-100 rounded-full inline-block hover:bg-gray-800 hover:text-white dark:hover:bg-gray-100 dark:hover:text-black transition-colors"
              onClick={(e) => {
                e.preventDefault();
                setIsDrawerOpen(true);
              }}
            >
              Download
            </a>
          </nav>
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
    </header>
  );
};

export default Header;