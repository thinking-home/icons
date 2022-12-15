import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHeart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M12 9.968 9.892 7.845a2.844 2.844 0 0 0-4.047 0 2.929 2.929 0 0 0 0 4.117l6.155 6.2 6.155-6.2a2.929 2.929 0 0 0 0-4.117 2.844 2.844 0 0 0-4.047 0L12 9.968ZM12 21l-7.574-7.629a4.929 4.929 0 0 1 0-6.935 4.844 4.844 0 0 1 6.666-.208s.608.6.908.902c.3-.302.908-.902.908-.902a4.844 4.844 0 0 1 6.666.208 4.929 4.929 0 0 1 0 6.935L12 21Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHeart);
export default ForwardRef;
