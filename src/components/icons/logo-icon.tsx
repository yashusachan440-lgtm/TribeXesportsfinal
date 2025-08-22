
import type { SVGProps } from "react";

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_2)">
        <path d="M50 0L0 25V75L50 100L100 75V25L50 0Z" fill="black" />
        <path d="M50 12.5L12.5 31.25V68.75L50 87.5V12.5Z" fill="#FF0000" />
        <path d="M50 12.5L87.5 31.25V68.75L50 87.5V12.5Z" fill="white" />
        <path
          d="M50 12.5L12.5 31.25L50 50L87.5 31.25L50 12.5Z"
          fill="white"
          stroke="black"
          strokeWidth="2"
        />
        <path
          d="M12.5 68.75L50 87.5V50L12.5 31.25V68.75Z"
          fill="#FF0000"
          stroke="black"
          strokeWidth="2"
        />
        <path
          d="M87.5 68.75L50 87.5V50L87.5 31.25V68.75Z"
          fill="white"
          stroke="black"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_2">
          <path d="M0 0H100V100H0V0Z" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
