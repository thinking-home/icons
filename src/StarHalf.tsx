import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgStarHalf = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>,
) => (
    <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m10.655 2.725-2.127 4.31a1.5 1.5 0 0 1-1.129.82l-4.755.69c-1.23.18-1.722 1.691-.831 2.56l3.44 3.353a1.5 1.5 0 0 1 .432 1.328l-.812 4.736c-.21 1.225 1.076 2.16 2.176 1.58l4.253-2.235a1.5 1.5 0 0 1 1.396 0l4.253 2.236c1.1.578 2.387-.356 2.176-1.581l-.812-4.736a1.5 1.5 0 0 1 .431-1.328l3.441-3.354c.89-.867.4-2.38-.831-2.558l-4.755-.691a1.5 1.5 0 0 1-1.13-.82l-2.126-4.31c-.55-1.114-2.14-1.114-2.69 0ZM12 17.695V4.519l1.678 3.4a3.5 3.5 0 0 0 2.635 1.915l3.753.545-2.715 2.647a3.5 3.5 0 0 0-1.007 3.098l.64 3.737-3.355-1.764A3.499 3.499 0 0 0 12 17.695Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStarHalf);
export default ForwardRef;
