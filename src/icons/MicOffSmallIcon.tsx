import * as React from 'react';

// Define the type for the component's props
interface MicOffSmallIconProps extends React.SVGProps<SVGSVGElement> {
  fillcolor?: string; // Optional `fillcolor` prop
}

// Defining the MicOffSmallIcon component with type annotations
const MicOffSmallIcon: React.FC<MicOffSmallIconProps> = (props) => (
  <svg
    width={20}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props} // Spread the remaining props (like `className`, `style`, etc.)
  >
    {/* Mask for clipping the SVG */}
    <mask
      id="a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={20}
      height={21}
    >
      <path fill="#D9D9D9" d="M0 .543h20v20H0z" />
    </mask>

    {/* Main icon rendering */}
    <g mask="url(#a)" fill={props.fillcolor ? props.fillcolor : '#050A0E'}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.167 9.453v1.256c0 .752.316 1.473.878 2.004.563.531 1.326.83 2.122.83.288 0 .572-.04.844-.115L7.167 9.453Zm4.929 5.096a4.72 4.72 0 0 1-1.93.41 4.638 4.638 0 0 1-3.181-1.244 4.134 4.134 0 0 1-1.319-3.006v-.337a.689.689 0 0 0-.22-.5.773.773 0 0 0-.53-.208.773.773 0 0 0-.53.207.689.689 0 0 0-.22.501v.337c0 2.89 2.29 5.275 5.25 5.624v1.46h-1.5a.773.773 0 0 0-.53.207.689.689 0 0 0-.22.501c0 .188.08.368.22.5.14.134.332.208.53.208h4.5c.2 0 .39-.074.53-.207a.689.689 0 0 0 .22-.501.689.689 0 0 0-.22-.5.773.773 0 0 0-.53-.208h-1.5v-1.46a6.246 6.246 0 0 0 2.226-.702l-1.046-1.082Zm3.466-1.36-1.119-1.157c.147-.423.223-.87.223-1.323v-.337c0-.188.08-.368.22-.5a.773.773 0 0 1 .53-.208c.2 0 .39.075.53.207.141.133.22.313.22.501v.337c0 .866-.21 1.713-.604 2.48Zm-2.395-2.477L7.21 4.555c.106-.57.395-1.1.834-1.516a3.092 3.092 0 0 1 2.122-.83c.795 0 1.558.299 2.12.83.563.532.88 1.252.88 2.004V10.712Z"
      />

      {/* Diagonal line to indicate the microphone is off */}
      <rect
        x={2.755}
        y={3.043}
        width={20.816}
        height={1.515}
        rx={0.757}
        transform="rotate(45.956 2.755 3.043)"
      />
    </g>
  </svg>
);

export default MicOffSmallIcon;
