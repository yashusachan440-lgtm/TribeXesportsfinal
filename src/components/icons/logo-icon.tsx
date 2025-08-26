
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
        <path d="M50 15 L35 22.5 L35 45 L50 37.5 Z" fill="#FF0000" />
        <path d="M35 45 L35 77.5 L50 85 L50 52.5 Z" fill="#FF0000" />
        <path d="M50 15 L65 22.5 L65 45 L50 37.5 Z" fill="#FFFFFF" />
        <path d="M65 45 L65 77.5 L50 85 L50 52.5 Z" fill="#FFFFFF" />
        <path d="M50 15 L35 22.5 L50 30 L65 22.5 Z" fill="none">
            <path d="M50 15 L35 22.5 L50 30 Z" fill="#FF0000" />
            <path d="M50 15 L65 22.5 L50 30 Z" fill="#FFFFFF" />
        </path>
      </g>
    </svg>
  );
}
