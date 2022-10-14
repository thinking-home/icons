import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTimer = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.002 4.515a1 1 0 0 1 1.36-.39A9 9 0 1 1 5.625 5.647a1 1 0 1 1 1.416 1.412 7 7 0 1 0 8.349-1.184 1 1 0 0 1-.39-1.36Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.707 12.707a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414Z"
            fill="currentColor"
        />
        <path
            d="M13 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTimer);
export default ForwardRef;
