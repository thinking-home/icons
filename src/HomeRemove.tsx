import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHomeRemove = (
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
            d="M10.586 10.172a1 1 0 1 0-1.414 1.414L10.586 13l-1.414 1.414a1 1 0 1 0 1.414 1.414L12 14.414l1.414 1.414a1 1 0 0 0 1.414-1.414L13.414 13l1.414-1.414a1 1 0 1 0-1.414-1.414L12 11.586l-1.414-1.414Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m12.848 2.434-.004-.004c-.227-.23-.511-.389-.844-.389-.333 0-.617.158-.844.389l-.005.004-9.858 9.859a1 1 0 1 0 1.414 1.414L4 12.414V19.9A1.1 1.1 0 0 0 5.1 21h13.8a1.1 1.1 0 0 0 1.1-1.1v-7.486l1.293 1.293a1 1 0 0 0 1.414-1.414l-9.859-9.859ZM18 10.414l-6-6-6 6V19h12v-8.586Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeRemove);
export default ForwardRef;
