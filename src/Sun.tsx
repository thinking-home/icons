import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSun = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M1 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM12 5a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1ZM12 23a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1ZM19 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            fill="currentColor"
        />
        <path
            d="M4.222 18.364a1 1 0 0 0 1.414 1.414l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414ZM5.636 7.05A1 1 0 0 0 7.05 5.636L5.636 4.222a1 1 0 0 0-1.414 1.414L5.636 7.05ZM18.364 19.778a1 1 0 0 0 1.414-1.414l-1.414-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414ZM16.95 5.636a1 1 0 0 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414L16.95 5.636Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSun);
export default ForwardRef;
