
import type { SVGProps } from "react";

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100"
      height="115.47"
      viewBox="0 0 100 115.47"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M50 0L0 28.87v57.73L50 115.47l50-28.87V28.87L50 0z" fill="#1A1A1A"/>
      <path d="M50 0L0 28.87v57.73L50 115.47z" fill="#E50914"/>
      <path d="M50 0L100 28.87v57.73L50 115.47z" fill="#FFFFFF"/>
      <path d="M50 57.73L0 28.87 50 0l50 28.87-50 28.86z" fill="#FFFFFF"/>
      <path d="M50 57.73v57.74L0 86.6V28.87l50 28.86z" fill="#E50914"/>
    </svg>
  );
}
