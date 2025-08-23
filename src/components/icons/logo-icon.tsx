
import type { SVGProps } from "react";

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 0h100v100H0z" fill="#000"/>
      <g fillRule="evenodd">
        <path d="M50 15L25 27.5v25L50 65l25-12.5v-25L50 15zm0 3l22 11v22l-22 11-22-11v-22l22-11z" fill="#FFF"/>
        <path d="M50 15L25 27.5v25L50 40v-25zM50 15L25 27.5 28 29v22l22-11V18l-3-1.5z" fill="red"/>
        <path d="M25 55v35L50 80V55l-25 12.5z" fill="red"/>
        <path d="M50 55v25l25 12.5V55L50 67.5z" fill="#FFF"/>
      </g>
    </svg>
  );
}
