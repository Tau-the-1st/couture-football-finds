
import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NikeBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [position, setPosition] = useState({ x: 50, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const bannerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (bannerRef.current) {
      const rect = bannerRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsDragging(true);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  if (!isVisible) return null;

  return (
    <div
      ref={bannerRef}
      className="fixed z-50 bg-gradient-to-r from-black via-gray-900 to-black border border-white/20 rounded-lg shadow-2xl cursor-move select-none"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '320px',
        height: '180px',
      }}
      onMouseDown={handleMouseDown}
    >
      {/* Close Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 text-white hover:bg-white/20 z-10"
        onClick={() => setIsVisible(false)}
      >
        <X className="h-4 w-4" />
      </Button>

      {/* Banner Content */}
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        {/* Nike Logo and Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
          <div className="text-4xl font-bold mb-2">NIKE</div>
          <div className="text-sm text-center mb-3">
            JUST DO IT
          </div>
          <div className="text-xs text-center opacity-80">
            Premium Athletic Wear
          </div>
        </div>

        {/* Nike Swoosh Background */}
        <div className="absolute bottom-4 right-4 opacity-20">
          <svg width="60" height="25" viewBox="0 0 60 25" fill="none">
            <path
              d="M0 25C20 15 40 5 60 0L50 8C35 12 20 18 0 25Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10 rounded-lg" />
      </div>
    </div>
  );
};

export default NikeBanner;
