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
import { Alert, AlertTitle, AlertDescription } from "./alert";
import confetti from "canvas-confetti";

const Footer: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [version, setVersion] = useState("1.0.0");
  const [commitHash, setCommitHash] = useState("abcd1234");
  const [showAlert, setShowAlert] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

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
        const commitMessage = commitData.commit.message.split(' ')[0]; // Assuming version is part of the commit message
        const commitSha = commitData.sha.substring(0, 7); // Get the first 7 characters of the commit hash
        setVersion(commitMessage);
        setCommitHash(commitSha);
      } catch (error) {
        console.error("Error fetching commit details:", error);
      }
    };

    fetchCommitDetails();
  }, []);

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

    // Show the alert
    setShowAlert(true);
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setShowAlert(false), 2000); // Hide the alert after 2 seconds of fading out
    }, 4000); // Start fading out after 4 seconds
  };

  return (
    <footer className="w-full py-6 border-t border-gray-300 dark:border-gray-700 bg-[#F5F5F5] dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-sm font-thin text-gray-600 dark:text-gray-400 mb-2">MacGic</h3>
            <ul>
              <li><a href="#" className="text-gray-800 dark:text-gray-100 hover:text-gray-500 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-800 dark:text-gray-100 hover:text-gray-500 transition-colors">Updates</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-sm font-thin text-gray-600 dark:text-gray-400 mb-2">Contact</h3>
            <ul>
              <li><a href="mailto:your-email@example.com" className="text-gray-800 dark:text-gray-100 hover:text-gray-500 transition-colors" target="_blank" rel="noopener noreferrer">Email Now</a></li>
              <li><a href="https://github.com/notomer" className="text-gray-800 dark:text-gray-100 hover:text-gray-500 transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://linkedin.com/in/notomer" className="text-gray-800 dark:text-gray-100 hover:text-gray-500 transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://notomer.github.io" className="text-gray-800 dark:text-gray-100 hover:text-gray-500 transition-colors" target="_blank" rel="noopener noreferrer">Personal Portfolio</a></li>
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
          <p className="text-xs text-gray-500 dark:text-gray-300 hover:text-gray-500 transition-colors">Made by Omer. With Love ❤️ (and ChatGPT)</p>
        </div>
      </div>
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Download MacGic</DrawerTitle>
            <DrawerDescription>
              Version {version} | Commit Hash {commitHash}
            </DrawerDescription>
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
              Download MacGic
            </button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      {showAlert && (
        <div
          className={`fixed bottom-4 right-4 w-full max-w-sm z-50 transition-opacity duration-1000 ease-out ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <Alert>
            <span className="h-4 w-4">🫶</span>
            <AlertTitle>Thank you!</AlertTitle>
            <AlertDescription>
              Thank you for downloading MacGic! If you have any feedback, please email me.
            </AlertDescription>
          </Alert>
        </div>
      )}
    </footer>
  );
};

export default Footer;