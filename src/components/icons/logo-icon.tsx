
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
            <polygon points="50,10 20,30 20,70 50,90 80,70 80,30" fill="black" />
            <polygon points="50,10 20,30 50,30" fill="#E50914"/>
            <polygon points="50,10 80,30 50,30" fill="white"/>
            <polygon points="20,30 20,55 50,70 50,30" fill="#E50914"/>
            <polygon points="80,30 80,55 50,70 50,30" fill="white"/>
            <polygon points="35,58 35,80 50,90 50,73" fill="#E50914"/>
            <polygon points="65,58 65,80 50,90 50,73" fill="white"/>
        </g>
    </svg>
  );
}
