import { type SVGProps } from 'react';

export function EcbLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="200"
      height="40"
      viewBox="0 0 250 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_301_2)">
        <path
          d="M33.75 13.5C33.75 11.25 31.5 9 28.125 9H16.875C13.5 9 11.25 11.25 11.25 13.5V46.5C11.25 48.75 13.5 51 16.875 51H28.125C31.5 51 33.75 48.75 33.75 46.5V36H22.5V42H18.75V18H22.5V24H33.75V13.5Z"
          fill="currentColor"
          className="text-primary"
        />
        <path
          d="M40.5 30C40.5 32.4825 38.4825 34.5 36 34.5C33.5175 34.5 31.5 32.4825 31.5 30C31.5 27.5175 33.5175 25.5 36 25.5C38.4825 25.5 40.5 27.5175 40.5 30Z"
          fill="currentColor"
          className="text-primary"
        />
        <path
          d="M45 13.5C45 11.25 47.25 9 50.625 9H61.875C65.25 9 67.5 11.25 67.5 13.5V46.5C67.5 48.75 65.25 51 61.875 51H50.625C47.25 51 45 48.75 45 46.5V13.5ZM56.25 24V18H52.5V42H56.25V36H63.75V24H56.25Z"
          fill="currentColor"
          className="text-primary"
        />
        <text
          x="80"
          y="40"
          fontFamily="inherit"
          fontSize="34"
          fill="currentColor"
          className="font-bold text-accent"
          fontWeight="bold"
        >
          ECB
        </text>
        <text
          x="155"
          y="40"
          fontFamily="inherit"
          fontSize="34"
          fill="currentColor"
          className="font-normal text-accent"
          fontWeight="normal"
        >
          GLOBAL
        </text>
      </g>
      <defs>
        <clipPath id="clip0_301_2">
          <rect width="250" height="60" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
