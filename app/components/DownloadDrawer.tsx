"use client";

import React from "react";
import confetti from "canvas-confetti";
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

interface DownloadDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const DownloadDrawer: React.FC<DownloadDrawerProps> = ({ isOpen, onClose }) => {
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
    onClose();
  };

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Confirm Download</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <HoverBorderGradient onClick={handleDownload} containerClassName="px-4 py-2 rounded-full">
            Confirm Download
          </HoverBorderGradient>
          <DrawerClose asChild>
            <HoverBorderGradient onClick={onClose} containerClassName="px-4 py-2 rounded-full">
              Cancel
            </HoverBorderGradient>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DownloadDrawer;