"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import DownloadDrawer from "./DownloadDrawer";

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => setMounted(true), []);

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
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsDrawerOpen(true);
              }}
              className="px-4 py-2 border border-gray-800 dark:border-white text-gray-800 dark:text-white rounded-full"
            >
              Download
            </a>
          </nav>
        </div>
      </div>
      <DownloadDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </header>
  );
};

export default Header;