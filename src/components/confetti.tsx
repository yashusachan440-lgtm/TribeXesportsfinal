
'use client';

import React, { useState, useEffect, CSSProperties } from 'react';

const ConfettiPiece = ({ style }: { style: CSSProperties }) => (
  <div className="absolute w-2 h-2 rounded-full" style={style}></div>
);

const Confetti = () => {
  const [pieces, setPieces] = useState<JSX.Element[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const newPieces = [];
    const confettiCount = 100;
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722'];

    for (let i = 0; i < confettiCount; i++) {
      const style: CSSProperties = {
        left: `${Math.random() * 100}%`,
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        animation: `fall ${Math.random() * 5 + 5}s linear ${Math.random() * 5}s infinite`,
        transform: `rotate(${Math.random() * 360}deg)`,
      };
      newPieces.push(<ConfettiPiece key={i} style={style} />);
    }
    setPieces(newPieces);
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">{pieces}</div>;
};

export default Confetti;
