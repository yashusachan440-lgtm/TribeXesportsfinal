
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
        <path d="M50 15 L35 22.5 L50 30 Z" fill="red" />
        <path d="M50 15 L65 22.5 L50 30 Z" fill="white" />
        <path d="M35 22.5 L25 27.5 L25 72.5 L35 77.5 Z" fill="red" />
        <path d="M65 22.5 L75 27.5 L75 72.5 L65 77.5 Z" fill="white" />
        <path d="M35 77.5 L25 72.5 L25 90 L35 95 Z" fill="red" />
        <path d="M65 77.5 L75 72.5 L75 90 L65 95 Z" fill="white" />
        <path d="M35 22.5 L65 22.5 L75 27.5 L25 27.5 Z" fill="red" />
        <path d="M35 77.5 L65 77.5 L75 72.5 L25 72.5 Z" fill="red" />
        <path d="M35 77.5 L65 77.5 L65 95 L35 95 Z" fill="red" />
      </g>
    </svg>
  );
}
