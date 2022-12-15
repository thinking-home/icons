import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgStopwatch = (
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
            d="M12 14a1 1 0 0 1-1-1V9a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 1a1 1 0 1 0 0 2v1.055A9.001 9.001 0 0 0 12 22a9 9 0 0 0 7.032-14.618l1.453-1.453a1 1 0 0 0-1.414-1.414l-1.453 1.453A8.957 8.957 0 0 0 13 4.055V3a1 1 0 1 0 0-2h-2Zm1 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStopwatch);
export default ForwardRef;
