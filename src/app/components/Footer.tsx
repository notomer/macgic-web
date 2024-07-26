"use client";

import { useState, useEffect } from "react";
import axios from "axios";
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
  const [version, setVersion] = useState("1.0.0");
  const [commitHash, setCommitHash] = useState("abcd1234");

  useEffect(() => {
    const fetchCommitDetails = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/repos/notomer/MacGic/branches/master",
          {
            headers: {
              "User-Agent": "YourAppName",
            },
          }
        );
        const commitData = response.data.commit;
        const commitMessage = commitData.commit.message.split(' ')[0];
        const commitSha = commitData.sha.substring(0, 7);
        setVersion(commitMessage);
        setCommitHash(commitSha);
      } catch (error) {
        console.error("Error fetching commit details:", error);
      }
    };

    fetchCommitDetails();
  }, []);

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
    <footer className="w-full py-6 border-t border-gray-300 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-sm font-thin text-gray-600 mb-2">MacGic</h3>
            <ul>
              <li><a href="#" className="text-gray-800 hover:text-gray-500 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-500 transition-colors">Updates</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-sm font-thin text-gray-600 mb-2">Contact</h3>
            <ul>
              <li><a href="mailto:notomerkhan@gmail.com" className="text-gray-800 hover:text-gray-500 transition-colors">Email Now</a></li>
              <li><a href="https://github.com/notomer" className="text-gray-800 hover:text-gray-500 transition-colors">GitHub</a></li>
              <li><a href="https://linkedin.com/in/notomer" className="text-gray-800 hover:text-gray-500 transition-colors">LinkedIn</a></li>
              <li><a href="https://notomer.github.io" className="text-gray-800 hover:text-gray-500 transition-colors">Personal Portfolio</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-end items-start">
            <button
              className="text-sm font-light px-4 py-2 border border-gray-800 text-gray-800 rounded-full inline-block mt-2 hover:bg-gray-800 hover:text-white transition-colors"
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
          <p className="text-sm text-gray-600 hover:text-gray-500 transition-colors">Made by Omer. With Love ❤️ (and ChatGPT)</p>
        </div>
      </div>
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="bg-white">
          <DrawerHeader>
            <DrawerTitle>Download MacGic</DrawerTitle>
            <DrawerDescription>
              Version {version} | Commit Hash {commitHash}
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
              Download MacGic
            </button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </footer>
  );
};

export default Footer;