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

const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDownload = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    const link = document.createElement("a");
    link.href = "/path-to-your-file.zip";
    link.download = "file.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsDrawerOpen(false);
  };

  return (
    <header className="w-full py-4 bg-white border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            MacGic
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <nav className="flex items-center space-x-4">
            <a href="#" className="relative group text-gray-800">
              <span className="hover-trigger">About</span>
              <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-gray-800 transition-all duration-150 group-hover:w-full group-hover:left-0"></span>
            </a>
            <a href="#" className="relative group text-gray-800">
              <span className="hover-trigger">Updates</span>
              <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-gray-800 transition-all duration-150 group-hover:w-full group-hover:left-0"></span>
            </a>
            <a
              href="#"
              className="px-4 py-2 border border-gray-800 text-gray-800 rounded-full inline-block hover:bg-gray-800 hover:text-white transition-colors"
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
        <DrawerContent className="bg-white">
          <DrawerHeader>
            <DrawerTitle>Confirm Download</DrawerTitle>
            <DrawerDescription>
              This action cannot be undone.
            </DrawerDescription>
            <DrawerClose asChild>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 p-2 rounded-full border border-gray-800 text-gray-800 flex items-center justify-center"
              >
                ✕
              </button>
            </DrawerClose>
          </DrawerHeader>
          <DrawerFooter>
            <button
              onClick={handleDownload}
              className="px-4 py-2 border border-gray-800 text-gray-800 rounded-full"
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