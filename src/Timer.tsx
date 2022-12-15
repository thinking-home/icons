import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTimer = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M13 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            fill="currentColor"
        />
        <path
            d="M15.122 4.028a1 1 0 0 1 1.353-.41A9.5 9.5 0 1 1 5.271 5.294a1 1 0 0 1 1.414-.002C6.881 5.487 7 5.744 7 6c0 .255-.118.51-.312.706a7.5 7.5 0 1 0 8.844-1.324 1 1 0 0 1-.41-1.354Z"
            fill="currentColor"
        />
        <path
            d="M9.707 8.293a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414-1.414l-3-3Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTimer);
export default ForwardRef;
