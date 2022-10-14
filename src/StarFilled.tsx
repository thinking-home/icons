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
        role="img"
        ref={ref}
        {...props}
    >
        <path
            d="M12.462 3.11a.5.5 0 0 0-.924 0l-2.33 5.603a.5.5 0 0 1-.422.307l-6.05.485a.5.5 0 0 0-.285.878l4.61 3.948a.5.5 0 0 1 .16.496L5.813 20.73a.5.5 0 0 0 .747.543l5.18-3.164a.5.5 0 0 1 .52 0l5.18 3.164a.5.5 0 0 0 .747-.543l-1.408-5.903a.5.5 0 0 1 .16-.496l4.61-3.948a.5.5 0 0 0-.286-.878l-6.049-.485a.5.5 0 0 1-.422-.307l-2.33-5.603Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStarFilled);
export default ForwardRef;
