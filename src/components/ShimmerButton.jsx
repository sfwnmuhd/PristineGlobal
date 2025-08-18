'use client';

import React from 'react';
export default function ShimmerButton({text}) {
  const customCss = `
    /* This is the key to the seamless animation.
      The @property rule tells the browser that '--angle' is a custom property
      of type <angle>. This allows the browser to smoothly interpolate it
      during animations, preventing the "jump" at the end of the loop.
    */
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }

    /* The keyframe animation simply transitions the --angle property
      from its start (0deg) to its end (360deg).
    */
    @keyframes shimmer-spin {
      to {
        --angle: 360deg;
      }
    }
  `;
  return (<div className="flex items-center justify-center font-sans">
      <style>{customCss}</style>
      <button className="relative inline-flex items-center justify-center p-[2.5px] bg-[#0b3b5c] rounded-full overflow-hidden group cursor-pointer">
        <div className="absolute inset-0" style={{
          background: 'conic-gradient(from var(--angle), transparent 25%, #06b6d4, transparent 50%)',
          animation: 'shimmer-spin 2.5s linear infinite'
        }} />
        <span className="relative z-10 inline-flex items-center justify-center w-full h-full px-8 py-3 text-white bg-[#0b3b5c] rounded-full group-hover:bg-[#0b3b5c] hover:text-gray-300 transition-colors duration-300">
          {text}
        </span>
      </button>
    </div>
  );
}