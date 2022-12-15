import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgStar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="m12 4.52-1.678 3.4a3.5 3.5 0 0 1-2.635 1.914l-3.753.545 2.715 2.647a3.5 3.5 0 0 1 1.007 3.098l-.641 3.737 3.356-1.764a3.5 3.5 0 0 1 3.258 0l3.356 1.764-.641-3.737a3.5 3.5 0 0 1 1.006-3.098l2.716-2.647-3.753-.545a3.5 3.5 0 0 1-2.635-1.915L12 4.52Zm1.345-1.795c-.55-1.114-2.14-1.114-2.69 0l-2.127 4.31a1.5 1.5 0 0 1-1.129.82l-4.755.69c-1.23.18-1.722 1.691-.831 2.56l3.44 3.353a1.5 1.5 0 0 1 .432 1.328l-.812 4.736c-.21 1.225 1.076 2.16 2.176 1.58l4.253-2.235a1.5 1.5 0 0 1 1.396 0l4.253 2.236c1.1.578 2.387-.356 2.176-1.581l-.812-4.736a1.5 1.5 0 0 1 .431-1.328l3.441-3.354c.89-.867.4-2.38-.831-2.558l-4.755-.691a1.5 1.5 0 0 1-1.13-.82l-2.126-4.31Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStar);
export default ForwardRef;
