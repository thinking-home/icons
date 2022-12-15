import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgAlarmClock = (
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
            d="M2.1 3.1a3 3 0 0 1 4.243 0L2.1 7.344a3 3 0 0 1 0-4.242ZM16 13a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V9a1 1 0 1 1 2 0v3h2a1 1 0 0 1 1 1Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.032 18.618a9 9 0 1 0-14.064 0l-1.675 1.675a1 1 0 1 0 1.414 1.414l1.675-1.675A8.962 8.962 0 0 0 12 22a8.962 8.962 0 0 0 5.618-1.968l1.675 1.675a1 1 0 0 0 1.414-1.414l-1.675-1.675ZM12 20a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
            fill="currentColor"
        />
        <path
            d="M21.9 7.343a3 3 0 0 0-4.243-4.242l4.242 4.242Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAlarmClock);
export default ForwardRef;
