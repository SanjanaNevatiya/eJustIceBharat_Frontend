import React from 'react';

// Define the type for the props (currently no props, so it's empty)
const MicOffIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props} // Spread any additional props that might be passed to the component
    >
      <mask
        id="mask0_25_170"
        style={{ maskType: 'alpha' }}
        width="24"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M0 0H24V24H0z"></path>
      </mask>
      <g fill="#050A0E" mask="url(#mask0_25_170)">
        <path
          fillRule="evenodd"
          d="M8.6 10.692V12.2c0 .902.38 1.767 1.054 2.404a3.71 3.71 0 002.546.996c.346 0 .687-.047 1.014-.138L8.6 10.692zm5.915 6.116a5.665 5.665 0 01-2.315.492 5.565 5.565 0 01-3.819-1.494C7.37 14.85 6.8 13.553 6.8 12.2v-.405a.827.827 0 00-.264-.6.928.928 0 00-.636-.25.928.928 0 00-.637.25.827.827 0 00-.263.6v.405c0 3.468 2.748 6.33 6.3 6.748V20.7H9.5a.928.928 0 00-.637.249.827.827 0 00-.263.601c0 .225.095.442.263.601.17.16.398.249.637.249h5.4c.238 0 .467-.09.636-.249a.827.827 0 00.264-.601.827.827 0 00-.264-.601.927.927 0 00-.636-.249h-1.8v-1.752a7.495 7.495 0 002.67-.842l-1.255-1.298zm4.16-1.633l-1.343-1.388A4.84 4.84 0 0017.6 12.2v-.405c0-.225.095-.441.263-.6a.927.927 0 01.637-.25c.238 0 .467.09.636.25.169.159.264.375.264.6v.405a6.491 6.491 0 01-.726 2.975zM15.8 12.203L8.654 4.814a3.34 3.34 0 011-1.818A3.71 3.71 0 0112.2 2c.955 0 1.87.358 2.545.996A3.307 3.307 0 0115.8 5.4v6.803z"
          clipRule="evenodd"
        ></path>
        <rect
          width="24.979"
          height="1.817"
          x="3.306"
          y="3"
          rx="0.909"
          transform="rotate(45.956 3.306 3)"
        ></rect>
      </g>
    </svg>
  );
};

export default MicOffIcon;
