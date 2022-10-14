import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCloud = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M12 19a6.97 6.97 0 0 1-3.271-.81 5 5 0 1 1-3.06-9.18 7 7 0 0 1 12.662 0 5 5 0 1 1-3.06 9.18A6.97 6.97 0 0 1 12 19Zm5.05-2.153a3.008 3.008 0 0 1-1.585-1.242A4.989 4.989 0 0 1 12 17a4.989 4.989 0 0 1-3.465-1.395A3.008 3.008 0 0 1 6 17a3 3 0 1 1 1.065-5.806A4.996 4.996 0 0 1 12 7a4.996 4.996 0 0 1 4.935 4.194 2.994 2.994 0 0 1 2.014-.04 3.001 3.001 0 0 1-1.898 5.693Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloud);
export default ForwardRef;
