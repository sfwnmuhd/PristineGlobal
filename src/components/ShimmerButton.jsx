import React from 'react'

/**
 * ShimmerButton Component
 * A modern button with a rotating shimmer effect using CSS conic gradients
 * Features: Smooth gradient animation, hover effects, responsive design
 * 
 * @param {string} text - The text to display inside the button
 */
const ShimmerButton = ({ text, onClick }) => {
  return (
    <div className="flex items-center justify-center font-sans">
      {/* CSS-in-JS styles for the shimmer animation */}
      <style>{`
        /* CSS Custom Property for seamless rotation animation */
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        /* Shimmer rotation keyframes */
        @keyframes shimmer-spin {
          to {
            --angle: 360deg;
          }
        }
      `}</style>
      
      {/* Button Container with Gradient Border */}
      <button onClick={onClick} className="relative inline-flex items-center justify-center p-[2px] sm:p-[2.5px] bg-[#0b3b5c] rounded-full overflow-hidden group cursor-pointer">
        {/* Animated Shimmer Gradient Background */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'conic-gradient(from var(--angle), transparent 25%, #06b6d4, transparent 50%)',
            animation: 'shimmer-spin 2.5s linear infinite'
          }} 
        />
        
        {/* Button Content */}
        <span className="relative z-10 inline-flex items-center justify-center w-full h-full px-4 py-1.5 sm:px-6 sm:py-2 text-sm sm:text-base whitespace-nowrap text-white bg-[#0b3b5c] rounded-full group-hover:bg-[#0b3b5c] hover:text-gray-300 transition-colors duration-300">
          {text}
        </span>
      </button>
    </div>
  )
}

export default ShimmerButton
