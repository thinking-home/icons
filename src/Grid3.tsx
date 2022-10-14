import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgGrid3 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        ref={ref}
        {...props}
    >
        <path
            d="M21 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM21 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM19 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM12 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM14 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGrid3);
export default ForwardRef;
