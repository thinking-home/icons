import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCloud = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M5.339 18H18a4 4 0 0 0 0-8c-.594 0-1.19.083-1.782.13l-.556-1.347a4.502 4.502 0 0 0-8.543.683l-.34 1.453-1.49.087A3.5 3.5 0 0 0 2 14.5c0 1.904 1.5 3.334 3.339 3.5ZM17.51 8.02a6.502 6.502 0 0 0-12.338.99A5.5 5.5 0 0 0 0 14.5c0 2.869 2.197 5.247 5 5.5h13a6 6 0 1 0-.49-11.98Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloud);
export default ForwardRef;
