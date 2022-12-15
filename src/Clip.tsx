import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgClip = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M10.707 4.515a5 5 0 0 1 7.071 7.07l-5.657 5.658A3 3 0 1 1 7.88 13l5.657-5.657a1 1 0 1 1 1.414 1.414l-5.657 5.657a1 1 0 1 0 1.414 1.414l5.657-5.656a3 3 0 0 0-4.243-4.243l-5.657 5.657a5 5 0 0 0 7.072 7.07l2.828-2.828a1 1 0 0 1 1.414 1.415L14.95 20.07a7 7 0 0 1-9.9-9.9l5.657-5.656Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgClip);
export default ForwardRef;
