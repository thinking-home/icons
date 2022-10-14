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
        role="img"
        ref={ref}
        {...props}
    >
        <path
            d="m12 20.763-7.439-7.088a4.96 4.96 0 0 1 0-7.226c2.022-1.927 5.506-1.947 7.439.137 1.933-2.084 5.417-2.064 7.439-.137a4.96 4.96 0 0 1 0 7.226L12 20.763Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHeartFilled);
export default ForwardRef;
