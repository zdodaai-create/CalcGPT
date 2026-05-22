"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface AdContainerProps {
  type: 'banner' | 'sidebar' | 'inline' | 'sticky-bottom';
  className?: string;
  adSlot?: string;
}

export const AdContainer: React.FC<AdContainerProps> = ({ type, className = "", adSlot }) => {
  const styles = {
    banner: "w-full min-h-[90px] md:min-h-[120px] mb-12",
    sidebar: "hidden xl:block w-[300px] min-h-[600px] sticky top-24 ml-8",
    inline: "w-full min-h-[150px] md:min-h-[200px] my-10",
    "sticky-bottom": "fixed bottom-0 left-0 w-full h-[100px] bg-white/80 dark:bg-black/80 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 lg:hidden z-[60] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] px-4 py-2",
  };

  const innerStyles = {
    banner: "max-w-[728px] h-[90px] md:h-[100px]",
    sidebar: "w-[300px] h-[600px]",
    inline: "max-w-[970px] h-[150px] md:h-[200px]",
    "sticky-bottom": "max-w-[320px] h-[80px]",
  };

  useEffect(() => {
    // A small timeout ensures Framer Motion and the browser layout have calculated
    // the container widths before AdSense tries to fill it.
    const timer = setTimeout(() => {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error("AdSense error:", err);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`${styles[type]} ${className} flex flex-col items-center justify-center`}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="h-[1px] w-4 bg-gray-200 dark:bg-gray-800" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Sponsored</span>
        <div className="h-[1px] w-4 bg-gray-200 dark:bg-gray-800" />
      </div>
      
      <div className={`${innerStyles[type]} w-full bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex items-center justify-center relative overflow-hidden group`}>
        <ins
          className="adsbygoogle w-full h-full"
          style={{ display: "block" }}
          data-ad-client="ca-pub-9176484091341823"
          data-ad-slot={adSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </motion.div>
  );
};
