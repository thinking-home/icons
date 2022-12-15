import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRain = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="m5.593 9.027 1.222-.165.402-1.166a4.003 4.003 0 0 1 7.3-.603l.724 1.33 1.477-.336a3.5 3.5 0 1 1 1.102 6.898l-.159.015h-1.083l-.536 2H18v-.022a5.5 5.5 0 1 0-1.726-10.84 6.003 6.003 0 0 0-10.949.908 5.001 5.001 0 0 0 .367 9.945L6.226 15H6a3 3 0 0 1-.407-5.973Z"
            fill="currentColor"
        />
        <path
            d="M9.859 12.636a1 1 0 0 1 .707 1.224l-.362 1.353a1 1 0 1 1-1.932-.518l.362-1.352a1 1 0 0 1 1.225-.707ZM8.41 18.045a1 1 0 0 1 .707 1.225l-.363 1.352a1 1 0 1 1-1.932-.518l.363-1.352a1 1 0 0 1 1.224-.707ZM14.804 13.896a1 1 0 1 0-1.932-.518l-.363 1.352a1 1 0 0 0 1.932.518l.363-1.352ZM13.354 19.305a1 1 0 1 0-1.932-.518l-.362 1.353a1 1 0 0 0 1.932.517l.362-1.352Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRain);
export default ForwardRef;
