import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHeart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M4.561 13.675 12 20.763l7.439-7.088a4.96 4.96 0 0 0 0-7.226c-2.022-1.927-5.506-1.947-7.439.137-1.933-2.084-5.417-2.064-7.439-.137a4.96 4.96 0 0 0 0 7.226Zm8.954-5.778c1.255-1.196 3.289-1.196 4.544 0a2.96 2.96 0 0 1 0 4.33L12 18l-6.059-5.773a2.96 2.96 0 0 1 0-4.33c1.255-1.196 3.29-1.196 4.544 0 .638.607 1.26 2.748 1.515 2.748.255 0 .877-2.141 1.515-2.748Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHeart);
export default ForwardRef;
