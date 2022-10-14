import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgStars = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M14.058 18.08c-.077-.025-.077-.135 0-.16 3.405-1.127 2.735-.457 3.862-3.862.025-.077.135-.077.16 0 1.127 3.405.457 2.735 3.862 3.862.077.025.077.135 0 .16-3.405 1.127-2.735.457-3.862 3.862-.025.077-.135.077-.16 0-1.127-3.405-.457-2.735-3.862-3.862ZM14.058 6.08c-.077-.025-.077-.135 0-.16 3.405-1.127 2.735-.457 3.862-3.862.025-.077.135-.077.16 0 1.127 3.405.457 2.735 3.862 3.862.077.025.077.135 0 .16-3.405 1.127-2.735.457-3.862 3.862-.025.077-.135.077-.16 0-1.127-3.405-.457-2.735-3.862-3.862ZM2.1 12.14c-.134-.044-.134-.236 0-.28 5.96-1.972 4.788-.8 6.76-6.76.044-.134.236-.134.28 0 1.972 5.96.8 4.788 6.76 6.76.134.044.134.236 0 .28-5.96 1.972-4.788.8-6.76 6.76-.044.134-.236.134-.28 0-1.972-5.96-.8-4.788-6.76-6.76Z"
            fill="currentColor"
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStars);
export default ForwardRef;