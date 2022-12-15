import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgStarFilled = (
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
            d="M11.552 3.168a.5.5 0 0 1 .896 0l2.127 4.309a2.5 2.5 0 0 0 1.882 1.367l4.755.691a.5.5 0 0 1 .277.853l-3.44 3.354a2.5 2.5 0 0 0-.72 2.213l.986-.17-.986.17.813 4.736a.5.5 0 0 1-.726.527l-4.253-2.236a2.5 2.5 0 0 0-2.326 0l-4.253 2.236a.5.5 0 0 1-.726-.527l.812-4.736a2.5 2.5 0 0 0-.719-2.213l-3.44-3.354a.5.5 0 0 1 .277-.853l4.755-.69a2.5 2.5 0 0 0 1.882-1.368l2.127-4.309Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={2}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStarFilled);
export default ForwardRef;
