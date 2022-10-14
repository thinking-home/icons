import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgStarHalf = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>,
) => (
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
            d="M8.786 9.02a.5.5 0 0 0 .422-.307l2.33-5.603a.5.5 0 0 1 .924 0l2.33 5.603a.5.5 0 0 0 .422.307l6.05.485a.5.5 0 0 1 .285.878l-4.61 3.948a.5.5 0 0 0-.16.496l1.408 5.903a.5.5 0 0 1-.747.543l-5.18-3.164a.5.5 0 0 0-.52 0l-5.18 3.164a.5.5 0 0 1-.747-.543l1.408-5.903a.5.5 0 0 0-.16-.496l-4.61-3.948a.5.5 0 0 1 .286-.878l6.049-.485ZM12 16.036c.452 0 .903.122 1.303.366l2.101 1.284-.57-2.395a2.5 2.5 0 0 1 .805-2.479l1.87-1.602-2.455-.197a2.5 2.5 0 0 1-2.108-1.532L12 7.208v8.828Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStarHalf);
export default ForwardRef;
