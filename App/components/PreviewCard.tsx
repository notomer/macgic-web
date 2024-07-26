import { useState, useRef, useEffect } from "react";

interface HoverCardProps {
  href: string;
  children: React.ReactNode;
}

const HoverCard: React.FC<HoverCardProps> = ({ href, children }) => {
  const [showPreview, setShowPreview] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setShowPreview(true);
  };

  const handleMouseLeave = () => {
    setShowPreview(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        previewRef.current &&
        !previewRef.current.contains(event.target as Node)
      ) {
        setShowPreview(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={previewRef}>
      <a
        href={href}
        className="text-gray-800 dark:text-gray-100 hover:text-gray-500 transition-colors"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
      {showPreview && (
        <div className="absolute top-0 left-full ml-2 w-[500px] h-[400px] rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg z-10">
          <embed src={href} width="500" height="400" />
        </div>
      )}
    </div>
  );
};

export default HoverCard;