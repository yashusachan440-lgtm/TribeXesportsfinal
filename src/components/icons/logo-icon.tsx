
import type { SVGProps } from "react";

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path d="M0 25L50 0V50L0 75V25Z" fill="#FF0000" />
        <path d="M50 0L100 25V75L50 100V50L50 0Z" fill="white" />
        <path d="M0 75L50 100V50L0 75Z" fill="#FF0000" />
      </g>
    </svg>
  );
}
