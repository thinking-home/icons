import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHeartFilled = (
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
            d="m12 7.13-.688-.694a4.844 4.844 0 0 0-6.886 0 4.929 4.929 0 0 0 0 6.935L12 21l7.574-7.629a4.929 4.929 0 0 0 0-6.935 4.844 4.844 0 0 0-6.886 0L12 7.13Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHeartFilled);
export default ForwardRef;
