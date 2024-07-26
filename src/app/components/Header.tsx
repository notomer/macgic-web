"use client";

import { useEffect, useState } from "react";
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

const Header: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [version, setVersion] = useState("1.0.0");
  const [commitHash, setCommitHash] = useState("abcd1234");
  const [showAlert, setShowAlert] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setMounted(true);

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
        const commitMessage = commitData.commit.message.split(" ")[0]; // Assuming version is part of the commit message
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

  if (!mounted) return null;

  return (
    <header className="w-full py-4 bg-white border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-800">MacGic</h1>
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
            <DrawerTitle>Download MacGic</DrawerTitle>
            <DrawerDescription>
              Version {version} | Commit {commitHash}
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
              Thank you for downloading MacGic! If you have any feedback please email me.
            </AlertDescription>
          </Alert>
        </div>
      )}
    </header>
  );
};

export default Header;