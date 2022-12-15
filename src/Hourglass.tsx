import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHourglass = (
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
            d="M7.968 1C6.88 1 5.92 1.898 6.005 3.073 6.311 7.346 8.44 9.847 10.557 12c-2.118 2.153-4.246 4.654-4.552 8.927C5.921 22.102 6.881 23 7.968 23h8c1.086 0 2.046-.898 1.962-2.073-.305-4.273-2.434-6.774-4.552-8.927 2.118-2.153 4.247-4.654 4.552-8.927C18.014 1.898 17.054 1 15.968 1h-8Zm6.208 7c.933-1.358 1.593-2.92 1.754-5H8.005c.16 2.08.821 3.642 1.754 5h4.417ZM8.68 18c.724-1.82 1.93-3.197 3.288-4.581 1.357 1.384 2.563 2.76 3.287 4.581H8.68Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHourglass);
export default ForwardRef;
