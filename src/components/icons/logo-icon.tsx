
import type { SVGProps } from "react";

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M50 2L2 26V75L50 99V51L50 2Z" fill="#FF0000"/>
        <path d="M50 2L98 26V75L50 99V51L98 26" fill="white"/>
        <path d="M50 2L2 26L50 51L98 26L50 2Z" fill="white"/>
        <path d="M2 26L50 51V99L2 75V26Z" fill="#FF0000"/>
        <path d="M98 26L50 51V99L98 75V26Z" fill="white"/>
      </g>
    </svg>
  );
}
