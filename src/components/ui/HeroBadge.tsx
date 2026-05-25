"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const HeroBadge = ({ className = "" }: { className?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative inline-flex items-center justify-center ${className}`}
    >
      <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 select-none pointer-events-none">
        {/* We can directly embed the futuristic SVG here so it renders flawlessly across all devices */}
        <svg width="100%" height="100%" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Gradients */}
            <linearGradient id="badgeCenterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient id="badgeRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
            </linearGradient>
            
            {/* Glow Filters */}
            <filter id="badgeGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <filter id="badgeStrongGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="24" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Base Calculator Path */}
            <g id="badgeCalcIcon">
              <rect x="-18" y="-24" width="36" height="48" rx="8" fill="url(#badgeCenterGrad)" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.9"/>
              <rect x="-10" y="-16" width="20" height="12" rx="3" fill="#FFFFFF" fillOpacity="0.95"/>
              <circle cx="-8" cy="4" r="3" fill="#FFFFFF"/>
              <circle cx="0" cy="4" r="3" fill="#FFFFFF"/>
              <circle cx="8" cy="4" r="3" fill="#FFFFFF"/>
              <circle cx="-8" cy="14" r="3" fill="#FFFFFF"/>
              <circle cx="0" cy="14" r="3" fill="#FFFFFF"/>
              <circle cx="8" cy="14" r="3" fill="#FFFFFF"/>
            </g>

            {/* Mini Calculator Path (Glassmorphic) */}
            <g id="badgeMiniCalc">
              <rect x="-12" y="-16" width="24" height="32" rx="4" fill="rgba(255, 255, 255, 0.05)" stroke="url(#badgeCenterGrad)" strokeWidth="1.5" />
              <rect x="-7" y="-10" width="14" height="7" rx="2" fill="url(#badgeCenterGrad)" fillOpacity="0.9"/>
              <circle cx="-5" cy="3" r="2" fill="#FFFFFF" fillOpacity="0.8"/>
              <circle cx="5" cy="3" r="2" fill="#FFFFFF" fillOpacity="0.8"/>
              <circle cx="-5" cy="9" r="2" fill="#FFFFFF" fillOpacity="0.8"/>
              <circle cx="5" cy="9" r="2" fill="#FFFFFF" fillOpacity="0.8"/>
            </g>
          </defs>

          <style>
            {`
              @keyframes pulseGlowBadge {
                0%, 100% { transform: scale(1); filter: drop-shadow(0 0 25px rgba(59, 130, 246, 0.4)); }
                50% { transform: scale(1.05); filter: drop-shadow(0 0 45px rgba(6, 182, 212, 0.7)); }
              }
              @keyframes spinSlowBadge {
                100% { transform: rotate(360deg); }
              }
              @keyframes spinReverseBadge {
                100% { transform: rotate(-360deg); }
              }
              .badge-center {
                animation: pulseGlowBadge 4s ease-in-out infinite;
                transform-origin: 256px 256px;
              }
              .badge-orbit-ring-1 {
                animation: spinSlowBadge 16s linear infinite;
                transform-origin: 256px 256px;
              }
              .badge-orbit-ring-2 {
                animation: spinReverseBadge 24s linear infinite;
                transform-origin: 256px 256px;
              }
              .badge-orbit-item {
                animation: spinReverseBadge 16s linear infinite;
              }
              .badge-orbit-item-rev {
                animation: spinSlowBadge 24s linear infinite;
              }
            `}
          </style>

          {/* Background is omitted so it blends seamlessly into the page, or add a subtle soft glow behind it */}
          <circle cx="256" cy="256" r="200" fill="url(#badgeCenterGrad)" opacity="0.05" filter="url(#badgeStrongGlow)" />

          {/* Outer Orbit 2 */}
          <g className="badge-orbit-ring-2">
            <circle cx="256" cy="256" r="180" fill="none" stroke="url(#badgeRingGrad)" strokeWidth="2" strokeDasharray="10 15" />
            <g transform="translate(76, 256)"><g className="badge-orbit-item-rev"><use href="#badgeMiniCalc" /></g></g>
            <g transform="translate(436, 256)"><g className="badge-orbit-item-rev"><use href="#badgeMiniCalc" /></g></g>
            <g transform="translate(256, 76)"><g className="badge-orbit-item-rev"><use href="#badgeMiniCalc" /></g></g>
            <g transform="translate(256, 436)"><g className="badge-orbit-item-rev"><use href="#badgeMiniCalc" /></g></g>
          </g>

          {/* Inner Orbit 1 */}
          <g className="badge-orbit-ring-1">
            <circle cx="256" cy="256" r="110" fill="none" stroke="url(#badgeRingGrad)" strokeWidth="3" strokeDasharray="20 20" />
            <g transform="translate(366, 256)"><g className="badge-orbit-item"><use href="#badgeMiniCalc" /></g></g>
            <g transform="translate(201, 351)"><g className="badge-orbit-item"><use href="#badgeMiniCalc" /></g></g>
            <g transform="translate(201, 161)"><g className="badge-orbit-item"><use href="#badgeMiniCalc" /></g></g>
          </g>

          {/* Center Ambient Glow */}
          <circle cx="256" cy="256" r="70" fill="url(#badgeCenterGrad)" filter="url(#badgeStrongGlow)" opacity="0.3" />
          
          {/* Center Main Calculator */}
          <g className="badge-center" transform="translate(256, 256) scale(2.2)">
            <use href="#badgeCalcIcon" />
          </g>

          {/* Floating Particles */}
          <circle cx="150" cy="150" r="5" fill="#06B6D4" filter="url(#badgeGlow)" opacity="0.8">
            <animate attributeName="cy" values="150;120;150" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="380" cy="180" r="7" fill="#8B5CF6" filter="url(#badgeGlow)" opacity="0.6">
            <animate attributeName="cy" values="180;150;180" dur="5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="5s" repeatCount="indefinite" />
          </circle>
          <circle cx="120" cy="380" r="6" fill="#3B82F6" filter="url(#badgeGlow)" opacity="0.7">
            <animate attributeName="cy" values="380;410;380" dur="6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;0.3;0.7" dur="6s" repeatCount="indefinite" />
          </circle>
          <circle cx="350" cy="400" r="4" fill="#FFFFFF" filter="url(#badgeGlow)" opacity="0.9">
            <animate attributeName="cy" values="400;370;400" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.9;0.4;0.9" dur="3s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </motion.div>
  );
};
