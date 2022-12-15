import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTwoClouds = (
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
            d="M5.727 13H4a2 2 0 1 0 0 4h9.641C14.942 16.856 16 15.858 16 14.5a2.5 2.5 0 0 0-2.452-2.5l-1.283-.023-.514-1.176a3.001 3.001 0 0 0-5.691.598L5.727 13ZM14 18.973V19H4a4 4 0 0 1 0-8c.463-2.283 2.58-4 5-4a5.001 5.001 0 0 1 4.584 3A4.5 4.5 0 0 1 14 18.974Z"
            fill="currentColor"
        />
        <path
            d="M12.71 6.062a6.962 6.962 0 0 0-1.88-.82 5.001 5.001 0 0 1 8.755.76A4.5 4.5 0 0 1 20 14.97c0-.972-.11-1.702-.179-1.992A2.5 2.5 0 0 0 19.548 8l-1.283-.023L17.75 6.8a3.001 3.001 0 0 0-5.042-.739Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTwoClouds);
export default ForwardRef;
