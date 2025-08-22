
import type { SVGProps } from "react";

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <polygon points="50,15 20,30 20,70 50,85 80,70 80,30" fill="black" />
        {/* Left Red Part */}
        <polygon points="50,15 20,30 50,45" fill="#E50914"/>
        <polygon points="20,30 20,70 50,85 50,45" fill="#E50914"/>

        {/* Top White Part */}
        <polygon points="50,15 80,30 50,45" fill="white"/>
        
        {/* Right White Part */}
        <polygon points="80,30 80,70 50,85 50,45" fill="white"/>
      </g>
    </svg>
  );
}
