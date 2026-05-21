"use client";

import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  iconSize?: number;
  showText?: boolean;
}

export function Logo({ 
  className = '', 
  iconSize = 56, // Premium larger default size
  showText = true 
}: LogoProps) {
  const [loadError, setLoadError] = useState(false);

  // If the transparent PNG fails to load, render the high-fidelity SVG fallback
  if (loadError) {
    return (
      <div className={`inline-flex items-center gap-4 select-none bg-transparent ${className}`}>
        {/* Emblem SVG Fallback */}
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0 hover:scale-105 transition-transform duration-300 ease-out"
          style={{
            filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.06))'
          }}
        >
          <defs>
            <linearGradient id="logo-red-grad" x1="20" y1="20" x2="50" y2="50" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF2A54" />
              <stop offset="50%" stopColor="#FF5A76" />
              <stop offset="100%" stopColor="#C4002D" />
            </linearGradient>
            <linearGradient id="logo-green-grad" x1="80" y1="20" x2="50" y2="50" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00FF87" />
              <stop offset="50%" stopColor="#00DF89" />
              <stop offset="100%" stopColor="#009E5A" />
            </linearGradient>
            <linearGradient id="logo-blue-grad" x1="80" y1="80" x2="50" y2="50" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00F2FE" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
            <linearGradient id="logo-yellow-grad" x1="20" y1="80" x2="50" y2="50" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFD000" />
              <stop offset="50%" stopColor="#FFAA00" />
              <stop offset="100%" stopColor="#FF6A00" />
            </linearGradient>
            <linearGradient id="emblem-gloss" x1="0" y1="0" x2="1" y2="1" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
              <stop offset="35%" stopColor="#ffffff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          <g>
            {/* Red Hook */}
            <path
              d="M 46 24 L 36 24 C 28 24, 24 28, 24 36 L 24 42 C 24 48, 28 52, 34 56 L 42 60"
              stroke="url(#logo-red-grad)"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 44 24 L 36 24 C 28 24, 24 28, 24 36 L 24 40"
              stroke="url(#emblem-gloss)"
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.6"
            />

            {/* Green Hook */}
            <path
              d="M 76 46 L 76 36 C 76 28, 72 24, 64 24 L 58 24 C 52 24, 48 28, 44 34 L 40 42"
              stroke="url(#logo-green-grad)"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 76 42 L 76 36 C 76 28, 72 24, 64 24 L 58 24"
              stroke="url(#emblem-gloss)"
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.6"
            />

            {/* Blue Hook */}
            <path
              d="M 54 76 L 64 76 C 72 76, 76 72, 76 64 L 76 58 C 76 52, 72 48, 66 44 L 58 40"
              stroke="url(#logo-blue-grad)"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 56 76 L 64 76 C 72 76, 76 72, 76 64 L 76 60"
              stroke="url(#emblem-gloss)"
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.6"
            />

            {/* Yellow Hook */}
            <path
              d="M 24 54 L 24 64 C 24 72, 28 76, 36 76 L 42 76 C 48 76, 52 72, 56 66 L 60 58"
              stroke="url(#logo-yellow-grad)"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 24 58 L 24 64 C 24 72, 28 76, 36 76 L 40 76"
              stroke="url(#emblem-gloss)"
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.6"
            />

            {/* Concentric inner dashes */}
            <line x1="35" y1="35" x2="43" y2="43" stroke="url(#logo-red-grad)" strokeWidth="9.5" strokeLinecap="round" />
            <line x1="35" y1="35" x2="39" y2="39" stroke="url(#emblem-gloss)" strokeWidth="3" strokeLinecap="round" opacity="0.5" />

            <line x1="65" y1="35" x2="57" y2="43" stroke="url(#logo-green-grad)" strokeWidth="9.5" strokeLinecap="round" />
            <line x1="65" y1="35" x2="61" y2="39" stroke="url(#emblem-gloss)" strokeWidth="3" strokeLinecap="round" opacity="0.5" />

            <line x1="65" y1="65" x2="57" y2="57" stroke="url(#logo-blue-grad)" strokeWidth="9.5" strokeLinecap="round" />
            <line x1="65" y1="65" x2="61" y2="61" stroke="url(#emblem-gloss)" strokeWidth="3" strokeLinecap="round" opacity="0.5" />

            <line x1="35" y1="65" x2="43" y2="57" stroke="url(#logo-yellow-grad)" strokeWidth="9.5" strokeLinecap="round" />
            <line x1="35" y1="65" x2="39" y2="61" stroke="url(#emblem-gloss)" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
          </g>
        </svg>

        {/* Typography Block */}
        {showText && (
          <div className="flex flex-col text-left justify-center">
            <span className="text-4xl font-extrabold tracking-tight leading-none font-sans flex items-baseline select-none">
              <span className="bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-950 dark:from-white dark:via-neutral-300 dark:to-neutral-500 bg-clip-text text-transparent pr-[0.05em]">
                Calc
              </span>
              <span className="bg-gradient-to-r from-[#1d4ed8] via-[#2563EB] to-[#3b82f6] dark:from-[#00f2fe] dark:to-[#3b82f6] bg-clip-text text-transparent dark:drop-shadow-[0_0_12px_rgba(0,242,254,0.6)]">
                GPT
              </span>
            </span>
            <div className="text-[0.62rem] font-black mt-2 leading-none flex gap-1 items-center font-sans tracking-[0.18em]">
              <span className="text-blue-600 dark:text-blue-400">CALCULATE.</span>
              <span className="text-emerald-600 dark:text-emerald-400">ANALYZE.</span>
              <span className="text-red-600 dark:text-red-400">AUTOMATE.</span>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Calculate proportional height
  const logoHeight = iconSize;

  return (
    <div className={`inline-flex items-center select-none bg-transparent hover:scale-105 transition-transform duration-300 ease-out ${className}`}>
      <img
        src="/logo_premium.png"
        alt="CalcGPT Premium Logo"
        onError={() => setLoadError(true)}
        style={{
          height: `${logoHeight}px`,
          width: 'auto',
          display: 'block',
          objectFit: 'contain',
          imageRendering: '-webkit-optimize-contrast' // Razor-sharp downscaling for modern browsers
        }}
        className="antialiased"
      />
    </div>
  );
}
