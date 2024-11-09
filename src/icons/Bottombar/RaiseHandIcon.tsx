import * as React from 'react';

// Define the types for the props, extending SVGProps to accept all standard SVG attributes
interface RaiseHandIconProps extends React.SVGProps<SVGSVGElement> {
  fillcolor?: string; // Optional 'fillcolor' prop to allow customization of the icon color
}

const RaiseHandIcon: React.FC<RaiseHandIconProps> = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props} // Spread any additional props that might be passed to the component
  >
    <g clipPath="url(#a)">
      <mask
        id="b"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={1}
        width={24}
        height={24}
      >
        <path fill="#D9D9D9" d="M0 1h24v24H0z" />
      </mask>
      <g mask="url(#b)">
        <path
          d="M10.903 2.55c0-.278.101-.546.281-.742a.921.921 0 0 1 .68-.308c.254 0 .499.11.679.308.18.196.281.464.281.742v7.671c.442.151.871.357 1.28.615V3.95c0-.278.102-.546.282-.742a.921.921 0 0 1 .68-.308c.254 0 .498.11.678.308.18.196.282.464.282.742v10.208a3.681 3.681 0 0 0-1.626.75 4.126 4.126 0 0 0-1.149 1.465 7.123 7.123 0 0 1 3.415-.873c.17 0 .333-.074.453-.205a.734.734 0 0 0 .187-.495v-2.115c.003-.83.307-1.625.844-2.212a.918.918 0 0 1 .674-.29c.25.004.49.114.667.308a1.1 1.1 0 0 1 .282.73c.003.273-.092.537-.265.736-.089.097-.16.212-.207.338a1.127 1.127 0 0 0-.074.4V15.5h-.004c-.05 1.408-.584 2.743-1.496 3.74l-1.482 1.62c-.96 1.05-2.263 1.64-3.622 1.64h-1.72c-1.698 0-3.327-.738-4.528-2.05-1.2-1.313-1.875-3.093-1.875-4.95V6.75c0-.278.101-.546.281-.742a.92.92 0 0 1 .68-.308.92.92 0 0 1 .679.308c.18.196.281.464.281.742v5.151a6.466 6.466 0 0 1 1.28-1.065V3.95c0-.278.102-.546.282-.742a.92.92 0 0 1 .68-.308.92.92 0 0 1 .678.308c.18.196.282.464.282.742v6.09c.422-.092.85-.14 1.28-.14V2.55Z"
          fill={props.fillcolor || '#000'} // Apply fillcolor prop if provided, default to black
        />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill={props.fillcolor || '#000'} d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default RaiseHandIcon;
