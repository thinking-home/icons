import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHome = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M12 2.041c.333 0 .617.158.844.389a.484.484 0 0 1 .005.004l6.856 6.857.004.004 2.998 2.998a1 1 0 0 1-1.414 1.414L20 12.414V19.9a1.1 1.1 0 0 1-1.1 1.1H5.1A1.1 1.1 0 0 1 4 19.9v-7.486l-1.293 1.293a1 1 0 0 1-1.414-1.414l9.859-9.859.004-.004c.227-.23.511-.389.844-.389Zm-6 8.373V19h3v-5.9a1.1 1.1 0 0 1 1.1-1.1h3.8a1.1 1.1 0 0 1 1.1 1.1V19h3v-8.586l-6-6-6 6ZM13 19v-5h-2v5h2Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHome);
export default ForwardRef;
