
import type { SVGProps } from "react";

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M50 15 L25 29 L25 71 L50 85 L75 71 L75 29 Z" fill="none" />
        <path d="M50,15 L25,29 v42 l25,14 l25,-14 v-42 Z" fill="none" />
        {/* Top part */}
        <path d="M50 15 L75 29 L50 43 L25 29 Z" fill="#FFFFFF" />
        {/* Left part */}
        <path d="M25 29 L25 71 L50 85 L50 43 Z" fill="#FF0000" />
        {/* Right part */}
        <path d="M75 29 L75 71 L50 85 L50 43 Z" fill="#FFFFFF" />
      </g>
    </svg>
  );
}
