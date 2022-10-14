import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgStar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M9.208 8.713a.5.5 0 0 1-.422.307l-6.05.485a.5.5 0 0 0-.285.878l4.61 3.948a.5.5 0 0 1 .16.496L5.813 20.73a.5.5 0 0 0 .747.543l5.18-3.164a.5.5 0 0 1 .52 0l5.18 3.164a.5.5 0 0 0 .747-.543l-1.408-5.903a.5.5 0 0 1 .16-.496l4.61-3.948a.5.5 0 0 0-.286-.878l-6.049-.485a.5.5 0 0 1-.422-.307l-2.33-5.603a.5.5 0 0 0-.924 0l-2.33 5.603ZM12 7.208l-.946 2.273a2.5 2.5 0 0 1-2.108 1.532l-2.455.197 1.87 1.602a2.5 2.5 0 0 1 .806 2.479l-.571 2.395 2.1-1.284a2.5 2.5 0 0 1 2.607 0l2.101 1.284-.57-2.395a2.5 2.5 0 0 1 .805-2.479l1.87-1.602-2.455-.197a2.5 2.5 0 0 1-2.108-1.532L12 7.208Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStar);
export default ForwardRef;
