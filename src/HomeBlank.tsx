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
        role="img"
        ref={ref}
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m20 12.414 1.293 1.293a1 1 0 0 0 1.414-1.414l-9.859-9.859-.004-.004c-.227-.23-.511-.389-.844-.389-.333 0-.617.158-.844.389l-.005.004-9.858 9.859a1 1 0 1 0 1.414 1.414L4 12.414V19.9A1.1 1.1 0 0 0 5.1 21h13.8a1.1 1.1 0 0 0 1.1-1.1v-7.486Zm-2-2-6-6-6 6V19h12v-8.586Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeBlank);
export default ForwardRef;
