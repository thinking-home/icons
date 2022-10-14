import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMoon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M15.8 13.2c.826 0 1.6-.199 2.283-.55 1.705-.877 3.801.966 2.714 2.848A9 9 0 1 1 8.503 3.204c1.882-1.088 3.724 1.009 2.847 2.713A5 5 0 0 0 15.8 13.2ZM7.966 6.136c.445-.46.952-.86 1.508-1.184.065-.038.127-.008.084.078a7 7 0 0 0 9.413 9.413c.067-.035.125 0 .077.083a7.032 7.032 0 0 1-2.772 2.662 7 7 0 0 1-8.31-11.051Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoon);
export default ForwardRef;
