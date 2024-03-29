import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHomeBlank = (
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
            d="M13.138 3.344a2 2 0 0 0-2.276 0L3.724 8.283A4 4 0 0 0 2 11.573V17a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-5.428a4 4 0 0 0-1.724-3.289l-7.138-4.939ZM16 19h2a2 2 0 0 0 2-2v-5.428a2 2 0 0 0-.862-1.644L12 4.989 4.862 9.928A2 2 0 0 0 4 11.572V17a2 2 0 0 0 2 2h2v-5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v5Zm-6 0h4v-5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v5Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeBlank);
export default ForwardRef;
