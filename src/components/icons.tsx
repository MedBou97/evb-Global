import type { SVGProps } from 'react';

export function ApexLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 16.5l8-13 8 13" />
      <path d="M12 20V3.5" />
      <path d="M4 16.5h16" />
      <path d="M7.5 16.5l4.5-7 4.5 7" />
    </svg>
  );
}
