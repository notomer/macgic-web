"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./drawer";
import { HoverBorderGradient } from "./hover-border-gradient";
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
          <Image src="/logo.png" alt="Logo" width={32} height={32} className="mr-4" />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">MacGic</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-gray-800 dark:text-white"
          >
            {theme === 'dark' ? '🌞' : '🌜'}
          </button>
          <nav className="flex items-center space-x-4">
            <a href="#" className="text-gray-800 dark:text-white">About</a>
            <a href="#" className="text-gray-800 dark:text-white">Updates</a>
            <HoverBorderGradient
              onClick={(e) => {
                e.preventDefault();
                setIsDrawerOpen(true);
              }}
              containerClassName="px-4 py-2 rounded-full"
            >
              Download
            </HoverBorderGradient>
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
                className="absolute top-4 right-4 p-2 rounded-full border border-gray-800 dark:border-white text-gray-800 dark:text-white"
              >
                ✕
              </button>
            </DrawerClose>
          </DrawerHeader>
          <DrawerFooter>
            <HoverBorderGradient onClick={handleDownload} containerClassName="px-4 py-2 rounded-full">
              Confirm Download
            </HoverBorderGradient>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </header>
  );
};

export default Header;