
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function Type1() {
    const typeRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "<span class='heading1'>Activate</span> <span class='heading'>Brain</span>",

      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
      cursorChar: '|', // Use a custom cursor character
      showCursor: true, // Show the cursor
      startDelay: 1000,
      html: true,
  };


    const typed = new Typed(typeRef.current, options);

    // Cleanup function to destroy the Typed instance
    return () => {
      typed.destroy();
    };
  }, []);
  return (

    <div className="cursor-container">
    <span className="role" ref={typeRef}></span>
    <style jsx>{`
      .cursor-container {
        position: relative;
        display: inline-block;
      }

      .cursor-container::after {
        // content: '|';
        position: absolute;
        left: 0;
        bottom: 0;
        font-size: 66px; // Set the font size of the cursor
        line-height: 1; // Adjust the line-height to match the text
      }
    `}</style>
  </div>
  )
}

export default Type1