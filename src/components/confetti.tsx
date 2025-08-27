
'use client';

import React, { useState, useEffect, CSSProperties } from 'react';

const ConfettiPiece = ({ style }: { style: CSSProperties }) => (
  <div className="absolute w-2 h-2 rounded-full" style={style}></div>
);

const Confetti = () => {
  const [pieces, setPieces] = useState<CSSProperties[]>([]);

  useEffect(() => {
    const newPieces = Array.from({ length: 150 }).map(() => ({
      left: `${Math.random() * 100}vw`,
      animationDuration: `${Math.random() * 3 + 2}s`,
      animationDelay: `${Math.random() * 5}s`,
      backgroundColor: `hsl(${Math.random() * 360}, 90%, 60%)`,
    }));
    setPieces(newPieces);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-50">
      {pieces.map((style, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-fall"
          style={{
            ...style,
            top: '-10px',
          }}
        ></div>
      ))}
    </div>
  );
};

export default Confetti;
